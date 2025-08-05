<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { type HTMLInputElementEvent } from '@/models';

// component properties
interface Props {
  name: string;
  label?: string;
  help?: string;
  error?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  label: null,
  help: null,
  error: null,
  checked: false,
  required: false,
  disabled: false,
  dataTestid: 'checkbox-input',
});

const model = defineModel<boolean>();
const isInvalid = ref(false);
const validationMessage = ref('');
const isDirty = ref(false);
const inputRef = ref<HTMLInputElement>(null);

onMounted(() => {
  if (props.checked) {
    model.value = true;
  }
});

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
  model.value = props.checked ?? false;
  isInvalid.value = false;
  isDirty.value = false;
  validationMessage.value = '';
};

const emit = defineEmits(['submit', 'change']);
defineExpose({ focus, reset });

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
  isDirty.value = true;
  emit('change');
};
</script>

<template>
  <div class="wrapper">
    <label class="label" :for="name">
      <input
        class="checkbox-input"
        v-model="model"
        type="checkbox"
        :class="{ dirty: isDirty }"
        :id="name"
        :name="name"
        :checked="checked"
        :disabled="disabled"
        :required="required"
        :data-testid="dataTestid"
        @invalid="onInvalid"
        @change="onChange"
        ref="inputRef"
      />
      <span v-if="label">{{ label }}</span>
      <span v-if="required && !model" class="required">*</span>
    </label>
    <span v-if="isInvalid" class="help-label invalid">
      {{ validationMessage }}
    </span>
    <span v-else-if="error" class="help-label invalid">
      {{ error }}
    </span>
    <span v-else-if="help" class="help-label">
      {{ help }}
    </span>
  </div>
</template>

<style scoped>
@import '@/assets/styles/mixins.pcss';

.wrapper {
  --colour-highlight: var(--colour-service-primary);
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--colour-ti-base);
  font-family: var(--font-sans);
  font-size: var(--txt-input);
  line-height: var(--line-height-input);
  font-weight: 400;
  width: 100%;
}
.dark {
  .wrapper {
    --colour-highlight: var(--colour-service-secondary);
  }
}

.label {
  display: flex;
  gap: 0.625rem;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
}

.help-label {
  display: flex;
  color: var(--colour-ti-base);

  width: 100%;
  min-height: 0.9375rem;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  padding: 0.1875rem;

  &.invalid {
    color: var(--colour-danger-default);
  }
}

.required {
  color: var(--colour-ti-critical);
}

.checkbox-input {
  --colour-input-border: var(--colour-neutral-border-intense);
  width: 1rem;
  height: 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--colour-input-border);

  &:focus {
    outline-color: var(--colour-highlight);
  }

  &:checked,
  &:checked:hover,
  &:checked:focus {
    background-color: var(--colour-highlight);
    border-color: var(--colour-highlight);
    color: var(--colour-neutral-raised);
  }

  &:invalid {
    --colour-input-border: var(--colour-ti-critical);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    & ~ span {
      color: var(--colour-ti-muted);
    }
  }
}
</style>
