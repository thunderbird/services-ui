<script setup lang="ts">
/**
 * @note The default slot is deprecated and will be removed in future releases
 */
import { ref, useAttrs, type SelectHTMLAttributes } from 'vue';
import type { ElementEvent, SelectOption } from '@/models';
import ErrorIcon from '@/foundation/ErrorIcon.vue';
import CaretDownIcon from '@/foundation/CaretDownIcon.vue';

const attrs = useAttrs();
const model = defineModel<number | string>();
const isInvalid = ref(false);
const isDirty = ref(false);
const isRequired = Object.hasOwn(attrs, 'required') && attrs.required !== false;
const inputRef = ref<HTMLSelectElement>();
const validationMessage = ref('');

const emit = defineEmits(['submit', 'blur']);

// component properties
interface Props {
  name: string;
  label?: string;
  options: SelectOption<number | string>[];
  help?: string;
  error?: string;
  dataTestid?: string;
}
withDefaults(defineProps<Props>(), {
  label: '',
  dataTestid: 'select-input',
});

defineOptions({ inheritAttrs: false });

/**
 * Forwards focus intent to the select element.
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

const onInvalid = (evt: Event) => {
  isInvalid.value = true;
  validationMessage.value = (evt as ElementEvent<HTMLSelectElement>).target.validationMessage;
};
const onInput = () => {
  isDirty.value = true;
  isInvalid.value = false;
  validationMessage.value = '';
  inputRef.value?.setCustomValidity('');
};

const onBlur = (evt: Event) => {
  if (isDirty.value && (evt as ElementEvent<HTMLSelectElement>).target.checkValidity()) {
    isInvalid.value = false;
    validationMessage.value = '';
  }

  emit('blur');
};

defineExpose({ focus, reset });
</script>

<template>
  <label class="wrapper" :for="name">
    <span v-if="label || $slots.default" class="label">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
      <span v-if="isRequired && (model === null || model === '')" class="required">*</span>
    </span>
    <div class="tbpro-select-container">
      <select
        v-bind="attrs"
        v-model="model"
        class="tbpro-select"
        :class="{ dirty: isDirty, error: error }"
        :id="name"
        :name="name"
        @invalid="onInvalid"
        @input="onInput"
        @blur="onBlur"
        :data-testid="dataTestid"
        ref="inputRef"
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
    pointer-events: none;
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

  &:hover:not(:disabled) {
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

  &.invalid,
  &.dirty:invalid:not(:focus),
  &.error:not(:focus) {
    border-color: var(--colour-ti-critical);
  }
}

.dark {
  .tbpro-select {
    background-color: var(--colour-neutral-base);
  }
}
</style>
