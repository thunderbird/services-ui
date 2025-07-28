<script setup lang="ts">
import { ref, computed } from 'vue';
import { useElementSize } from '@vueuse/core';
import { type HTMLInputElementEvent } from '@/models';

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
            'dirty': isDirty,
            'error': error !== null,
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
      {{ validationMessage }}
    </span>
    <span v-else-if="error" class="help-label invalid">
      {{ error }}
    </span>
    <span v-else-if="help" class="help-label">
      {{ help }}
    </span>
  </label>
</template>

<style scoped>
@import "@/assets/styles/mixins.pcss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--colour-ti-base);
  font-family: var(--font-sans);
  font-size: var(--txt-input);
  line-height: var(--line-height-input);
  font-weight: 400;
}

.label {
  width: 100%;
  font-weight: 600;
  padding: 0.1875rem;
}

.small-text {
  --txt-input: 0.7384375rem;
}

.help-label {
  display: flex;
  color: var(--colour-ti-base);

  width: 100%;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  padding: 0.1875rem;

  &.invalid {
    color: var(--colour-danger-default);
  }
}

.required {
  color: var(--colour-ti-critical);
  padding-left: .25rem;
}

.tbpro-input {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  .tbpro-input-outer-prefix,
  .tbpro-input-outer-suffix {
    white-space: nowrap;
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
      --colour-btn-border: var(--colour-neutral-border);
      width: 100%;
      transition-property: none;
      font-size: var(--txt-input);

      padding: 0.75rem;
      box-sizing: border-box;

      color: var(--txt-colour);
      background-color: var(--colour-neutral-base);
      border-radius: var(--border-radius);
      @mixin faded-border var(--colour-btn-border);

      &.small-input {
        padding: .125rem;
        --txt-input: 0.7384375rem;
      }
      
      &:hover:enabled {
        --colour-btn-border: var(--colour-neutral-border-intense);
      }

      &:active:enabled {
        --colour-btn-border: var(--colour-neutral-border-intense);
      }

      &:focus:enabled {
        --colour-btn-border: var(--colour-service-primary);
        outline: 0.125rem solid var(--colour-btn-border);
        /* Un-fade the border */
        border: 0.0625rem solid var(--colour-btn-border) !important;
        border-radius: 0.125rem;
      }

      &.dirty:invalid,
      &.error {
        --colour-btn-border: var(--colour-ti-critical);
      }

      &:disabled {
        filter: grayscale(50%);
        cursor: not-allowed;
      }

      &::placeholder {
        color: var(--colour-ti-muted);
      }

      &[type="time"]::-webkit-calendar-picker-indicator {
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
