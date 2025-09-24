<script setup lang="ts">
import { ref, computed } from 'vue';
import { useElementSize } from '@vueuse/core';
import { type HTMLInputElementEvent } from '@/models';
import NoticeCriticalIcon from '@/icons/NoticeCriticalIcon.vue';

const model = defineModel<string>();
const isInvalid = ref(false);
const validationMessage = ref('');
const isDirty = ref(false);
const inputRef = ref<HTMLInputElement>(null);
const inputPrefix = ref<HTMLSpanElement>(null);
const { width: inputPrefixWidth } = useElementSize(inputPrefix); // Calculate the width of the prefix element

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
  help?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  prefix?: string; // A prefix shows up at the start of the input field and moves the actual input to the right.
  outerPrefix?: string; // A prefix shows up outside the input field and moves the whole input to the right.
  outerSuffix?: string;
  required?: boolean;
  disabled?: boolean;
  smallText?: boolean;
  smallInput?: boolean;
  maxLength?: number | string;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  help: null,
  error: null,
  placeholder: null,
  prefix: null,
  required: false,
  disabled: false,
  smallText: false,
  smallInput: false,
  maxLength: null,
  dataTestid: 'text-input',
});

const emit = defineEmits(['submit', 'blur']);
defineExpose({ focus, reset });

// Calculate padding left for the actual input considering prefix width and existing padding
const inputPaddingLeft = computed(() => (props.prefix ? `${inputPrefixWidth.value + 12}px` : null));

const onInvalid = (evt: HTMLInputElementEvent) => {
  isInvalid.value = true;
  isDirty.value = true;
  validationMessage.value = evt.target.validationMessage;
};
/**
 * On any change we mark the element as dirty
 * this is so we can delay :invalid until
 * the user does something worth invalidating
 */
const onChange = () => {
  inputRef.value.setCustomValidity('');
  isInvalid.value = false;
  isDirty.value = true;
  validationMessage.value = '';
};
</script>

<template>
  <label class="wrapper" :for="name">
    <span v-if="$slots.default" class="label">
      <slot />
      <span v-if="required && !model?.length" class="required">*</span>
    </span>
    <span class="tbpro-input" :class="{ 'small-text': props.smallText }">
      <span v-if="outerPrefix" class="tbpro-input-outer-prefix">{{ outerPrefix }}</span>
      <span class="tbpro-input-wrapper">
        <span v-if="prefix" ref="inputPrefix" class="tbpro-input-prefix">{{ prefix }}</span>
        <input
          v-model="model"
          class="tbpro-input-element"
          :class="{
            'small-input': props.smallInput,
            dirty: isDirty,
            error: error !== null,
          }"
          :type="type"
          :id="name"
          :name="name"
          :disabled="disabled"
          :placeholder="placeholder"
          :required="required"
          :maxLength="maxLength"
          :style="{ paddingLeft: inputPaddingLeft }"
          :data-testid="dataTestid"
          @invalid="onInvalid"
          @change="onChange"
          @blur="emit('blur')"
          ref="inputRef"
        />
      </span>
      <span v-if="outerSuffix" class="tbpro-input-outer-suffix">{{ outerSuffix }}</span>
    </span>
    <span v-if="isInvalid" class="help-label invalid">
      <notice-critical-icon />
      {{ validationMessage }}
    </span>
    <span v-else-if="error" class="help-label invalid">
      <notice-critical-icon />
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
}

.small-text {
  --txt-input: 0.7384375rem;
}

.help-label {
  display: flex;
  color: var(--colour-ti-muted);
  box-sizing: border-box;

  width: 100%;
  font-size: 0.625rem;
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
    position: relative;
    width: 100%;

    .tbpro-input-prefix {
      position: absolute;
      top: 0.7rem;
      left: 12px;
      font-size: var(--txt-input);
      line-height: var(--line-height-input);
      color: var(--colour-ti-muted);
      user-select: none;
      text-overflow: '.../';
      overflow: hidden;
      max-width: 40%;
      text-wrap: nowrap;
      z-index: 1;
    }

    .tbpro-input-element {
      width: 100%;
      transition-property: none;
      font-size: var(--txt-input);

      padding: 0.75rem;
      box-sizing: border-box;

      color: var(--colour-ti-secondary);
      background-color: var(--colour-neutral-base);
      border: none;
      border-radius: var(--border-radius);

      &.small-input {
        padding: 0.125rem;
        --txt-input: 0.7384375rem;
      }

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
  }
}

.dark {
  .tbpro-input-element {
    background-color: var(--colour-neutral-lower);
  }
}
</style>
