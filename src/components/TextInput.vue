<script setup lang="ts">
/**
 * @note The default slot is deprecated and will be removed in future releases
 */
import { ref, computed, useAttrs, type InputTypeHTMLAttribute } from 'vue';
import { type ElementEvent } from '@/models';
import { t } from '@/composable/i18n';
import ErrorIcon from '@/foundation/ErrorIcon.vue';
import EyeOffIcon from '@/foundation/EyeOffIcon.vue';
import EyeIcon from '@/foundation/EyeIcon.vue';

const attrs = useAttrs();
const model = defineModel<string>();
const isInvalid = ref(false);
const validationMessage = ref('');
const isDirty = ref(false);
const isRequired = Object.hasOwn(attrs, 'required');
const inputRef = ref<HTMLInputElement>(null);
const showPasswordText = t('textInput.passwordIndicator.show');
const hidePasswordText = t('textInput.passwordIndicator.hide');
const passwordIndicatorText = ref(showPasswordText);

const charCount = computed(() => model.value?.length ?? 0);

/**
 * Forwards focus intent to the text input element.
 * Unlike HTMLElement.focus() this does not take any parameters.
 */
const focus = () => {
  if (!inputRef.value) {
    return;
  }
  inputRef.value.focus();
};

/**
 * Resets the component's internal validation state and clears the input value.
 * This should be explicitly called when the parent form is reset.
 */
const reset = () => {
  model.value = '';
  isInvalid.value = false;
  isDirty.value = false;
  validationMessage.value = '';
};

// component properties
interface Props {
  name: string;
  label?: string;
  help?: string;
  error?: string;
  prefix?: string; // A prefix shows up at the start of the input field and moves the actual input to the right.
  outerPrefix?: string; // A prefix shows up outside the input field and moves the whole input to the right.
  outerSuffix?: string;
  smallText?: boolean;
  smallInput?: boolean;
  maxLength?: number | string;
  dataTestid?: string;
  type?: InputTypeHTMLAttribute;
}
const props = withDefaults(defineProps<Props>(), {
  label: null,
  help: null,
  error: null,
  prefix: null,
  smallText: false,
  smallInput: false,
  maxLength: null,
  dataTestid: 'text-input',
  type: 'text',
});

const emit = defineEmits(['submit', 'blur']);
defineExpose({ focus, reset });

const onInvalid = (evt: ElementEvent<HTMLInputElement>) => {
  isInvalid.value = true;
  validationMessage.value = evt.target.validationMessage;
};

/**
 * On any change we mark the element as dirty
 * this is so we can delay :invalid until
 * the user does something worth invalidating
 */
const onChange = () => {
  isDirty.value = true;
  isInvalid.value = false;
  validationMessage.value = '';
  inputRef.value.setCustomValidity('');
};

const onBlur = (evt: ElementEvent<HTMLInputElement>) => {
  if (isDirty.value && evt.target.checkValidity()) {
    isInvalid.value = false;
    validationMessage.value = '';
  }

  emit('blur', evt);
};

// not computed, we want this only on the initial load
const isPasswordField = props.type === 'password';  
// The current inputType, this will swap between text and password.
const inputType = ref(props.type);
// false: hide password, true: show password
const passwordIsVisible = ref(isPasswordField ? false : null);

const togglePasswordVisibility = () => {
  inputType.value = passwordIsVisible.value ? 'password' : 'text';
  passwordIsVisible.value = !passwordIsVisible.value;
  if (passwordIsVisible.value === true) {
    passwordIndicatorText.value = hidePasswordText;
  } else if (passwordIsVisible.value === false) {
    passwordIndicatorText.value = showPasswordText;
  }
};
</script>

<template>
  <label class="wrapper" :for="name">
    <span v-if="label || $slots.default" class="label">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
      <span v-if="isRequired && !model?.length" class="required">*</span>
    </span>
    <span class="tbpro-input" :class="{ 'small-text': props.smallText }">
      <span v-if="outerPrefix" class="tbpro-input-outer-prefix">{{ outerPrefix }}</span>
      <span class="tbpro-input-wrapper" :class="{'small-input': props.smallInput}">
        <span v-if="prefix" class="tbpro-input-prefix">{{ prefix }}</span>
        <input
          v-bind="attrs"
          v-model="model"
          class="tbpro-input-element"
          :class="{
            dirty: isDirty,
            error: error !== null,
          }"
          :type="inputType"
          :id="name"
          :name="name"
          :maxlength="maxLength"
          :data-testid="dataTestid"
          @invalid="onInvalid"
          @change="onChange"
          @blur="onBlur"
          ref="inputRef"
        />
        <span 
          class="tbpro-input-suffix" 
          aria-live="polite" 
          tabindex="0" 
          :title="passwordIndicatorText"
          @keyup.space="togglePasswordVisibility" 
          @click="togglePasswordVisibility"
          v-if="passwordIsVisible !== null" 
        >
          <eye-icon class="icon" alt="" v-if="passwordIsVisible === true" />
          <eye-off-icon class="icon" alt="" v-else-if="passwordIsVisible === false" />
        </span>
        <span
          v-else-if="maxLength !== null"
          class="character-count tbpro-input-suffix"
          aria-live="polite"
          :aria-label="t('textInput.maxLengthAlt', {currentCount: charCount, maxCount: maxLength})"
        > {{ charCount }}/{{ maxLength }}</span>
      </span>
      <span v-if="outerSuffix" class="tbpro-input-outer-suffix">{{ outerSuffix }}</span>
    </span>
    <span v-if="isInvalid" class="help-label invalid">
      <error-icon />
      {{ validationMessage }}
    </span>
    <span v-else-if="error" class="help-label invalid">
      <error-icon />
      {{ error }}
    </span>
    <span v-if="help" class="help-label">
      {{ help }}
    </span>
  </label>
</template>

<style scoped>
@import '@/assets/styles/mixins.pcss';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--colour-ti-secondary);
  font-family: var(--font-sans);
  font-size: var(--txt-input);
  line-height: var(--line-height-input);
  font-weight: 400;
}

.label {
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
}

.small-text {
  --txt-input: 0.7384375rem;
}

.help-label {
  display: flex;
  align-items: center;
  color: var(--colour-ti-muted);
  box-sizing: border-box;

  width: 100%;
  font-size: 0.6875rem;
  line-height: 0.9375rem;

  &.invalid {
    gap: 0.25rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    background-color: var(--colour-danger-soft);
    color: var(--colour-danger-default);
  }
}

.required {
  color: var(--colour-ti-critical);
  padding-inline-start: 0.25rem;
}

.tbpro-input {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  border-radius: var(--border-radius);
  border: 0.0625rem solid var(--colour-neutral-border);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05) inset;
  box-sizing: border-box;

  &:has(.tbpro-input-outer-prefix, .tbpro-input-outer-suffix) {
    border-radius: var(--border-radius);
    overflow: hidden;
    gap: 0;

    .tbpro-input-wrapper {
      .tbpro-input-element {
        border-radius: 0;
      }
    }
  }

  .tbpro-input-outer-prefix,
  .tbpro-input-outer-suffix {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    background-color: var(--colour-neutral-border);
    padding: 0.5rem 0.75rem;
    align-self: stretch;
  }

  &:hover:has(input:enabled):not(:focus-within) {
    border-color: var(--colour-neutral-border-intense);
  }

  &:focus-within {
    border-color: var(--colour-primary-default);
    box-shadow: 0 0 0 0.0625rem var(--colour-primary-default);
  }

  &:has(.dirty:invalid):not(:focus-within),
  &:has(.error):not(:focus-within) {
    border-color: var(--colour-ti-critical);
  }

  .tbpro-input-wrapper {
    --outer-padding: 0.7rem;
    position: relative;
    width: 100%;
    display: flex;
    padding: var(--outer-padding);
    gap: calc(var(--outer-padding) * 0.25);
    box-sizing: border-box;

    &.small-input {
      --outer-padding: 0.125rem;
      --txt-input: 0.7384375rem;
    }

    .tbpro-input-prefix {
      align-self: center;
      font-size: var(--txt-input);
      line-height: var(--line-height-input);
      color: var(--colour-ti-muted);
      user-select: none;
      text-overflow: '.../';
      overflow: hidden;
      text-wrap: nowrap;
      z-index: 1;
      flex-shrink: 0;
      max-width: 40%;
    }

    .tbpro-input-element {
      width: 100%;
      transition-property: none;
      font-size: var(--txt-input);
      font-family: var(--font-sans);
      box-sizing: border-box;
      line-height: var(--line-height-input);

      color: var(--colour-ti-secondary);
      background-color: var(--colour-neutral-base);
      border: none;
      border-radius: var(--border-radius);
      padding: 0 0.125rem; /* Recreate browser applied padding but remove the top and bottom padding */

      &:disabled {
        filter: grayscale(50%);
        cursor: not-allowed;
      }

      &::placeholder {
        color: var(--colour-ti-muted);
      }

      &:focus {
        outline: none; /* The outline is applied to the .tbpro-input itself */
      }

      &[type='time']::-webkit-calendar-picker-indicator {
        margin-right: -0.5rem;
        background: none;
      }
    }

    .tbpro-input-suffix {
      position: relative;
      display: flex;
      flex-shrink: 0;
      line-height: var(--line-height-input);
      color: var(--colour-ti-muted);
      z-index: 1;
      cursor: pointer;
      align-self: center;
      .icon {
        stroke-width: 1.25;
        /* Undo the outer padding for top/bottom so we don't adjust the input size */
        margin: calc(-1 * var(--outer-padding)) 0;
      }
      &.character-count {
        pointer-events: none;
        font-weight: 600;
      }
    }

  }
}

.dark {
  .tbpro-input-element {
    background-color: var(--colour-neutral-lower);
  }
}
</style>
