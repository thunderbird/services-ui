<script setup lang="ts">
import { ref } from 'vue';
import { type HTMLInputElementEvent, type SelectOption } from '@/models';
import ErrorIcon from '@/icons/ErrorIcon.vue';
import CaretDownIcon from '@/icons/CaretDownIcon.vue';

// component properties
interface Props {
  name: string;
  options: SelectOption<number | string>[];
  help?: string;
  required?: boolean;
  autofocus?: boolean;
  disabled?: boolean;
  dataTestid?: string;
}
withDefaults(defineProps<Props>(), {
  required: false,
  autofocus: false,
  disabled: false,
  dataTestid: 'select-input',
});

const model = defineModel<number | string>();
const isInvalid = ref(false);
const isDirty = ref(false);
const validationMessage = ref('');

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

const onInvalid = (evt: HTMLInputElementEvent) => {
  isInvalid.value = true;
  validationMessage.value = evt.target.validationMessage;
};
const onInput = (evt: HTMLInputElementEvent) => {
  isDirty.value = true;

  // Revalidate on input change
  if (evt.target.checkValidity()) {
    isInvalid.value = false;
    validationMessage.value = '';
  }
};

defineEmits(['submit']);
defineExpose({ reset });
</script>

<template>
  <label class="wrapper" :for="name">
    <span v-if="$slots.default" class="label">
      <slot />
      <span v-if="required && (model === null || model === '')" class="required">*</span>
    </span>
    <div class="tbpro-select-container">
      <select
        class="tbpro-select"
        :class="{ dirty: isDirty, invalid: isInvalid }"
        v-model="model"
        :id="name"
        :name="name"
        :required="required"
        :autofocus="autofocus"
        :disabled="disabled"
        @invalid="onInvalid"
        @input="onInput"
        :data-testid="dataTestid"
      >
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.label }}
        </option>
      </select>
      <caret-down-icon class="dropdown-caret" />
    </div>
    <span v-if="isInvalid" class="help-label invalid">
      <error-icon />
      {{ validationMessage }}
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
  font-size: 1rem;
  line-height: var(--line-height-input);
  font-weight: 400;
}

.label {
  display: flex;
  gap: 0.25rem;
  width: 100%;
  font-weight: 600;
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

.visible {
  visibility: visible;
}

.required {
  color: var(--colour-ti-critical);
}

.tbpro-select-container {
  position: relative;
  width: 100%;

  .dropdown-caret {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
  }
}

.tbpro-select {
  font-size: var(--txt-input);
  font-weight: 400;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  width: 100%;
  border-radius: var(--border-radius);
  color: var(--colour-ti-secondary);
  background-color: var(--colour-neutral-base);
  border: 0.0625rem solid var(--colour-neutral-border);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05) inset;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: var(--colour-ti-muted);
  }

  &:hover {
    border-color: var(--colour-neutral-border-intense);
  }

  &:focus-within {
    border-color: var(--colour-primary-default);
    box-shadow: 0 0 0 0.0625rem var(--colour-primary-default);
  }

  &:active {
    background-color: var(--colour-neutral-subtle);
  }

  &:disabled {
    filter: grayscale(50%);
    cursor: not-allowed;
  }

  &.invalid {
    border-color: var(--colour-ti-critical);
  }
}

.dark {
  .tbpro-select {
    background-color: var(--colour-neutral-base);
  }
}
</style>
