<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue';
import { type HTMLInputElementEvent } from '@/models';
import CheckboxCheckIcon from '@/foundation/CheckboxCheckIcon.vue';
import ErrorIcon from '@/foundation/ErrorIcon.vue';

// component properties
interface Props {
  name: string;
  label?: string;
  help?: string;
  error?: string;
  dataTestid?: string;
}
withDefaults(defineProps<Props>(), {
  label: null,
  help: null,
  error: null,
  dataTestid: 'checkbox-input',
});

const model = defineModel<boolean>();
const attrs = useAttrs();
const customClass = attrs['class'] || '';
const isRequired = Object.hasOwn(attrs, 'required');
const isInvalid = ref(false);
const validationMessage = ref('');
const isDirty = ref(false);
const inputRef = ref<HTMLInputElement>(null);

onMounted(() => {
  if (Object.hasOwn(attrs, 'checked')) {
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
  model.value = Object.hasOwn(attrs, 'checked');
  isInvalid.value = false;
  isDirty.value = false;
  validationMessage.value = '';
};

const emit = defineEmits(['change']);
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
  const newValue = !model.value;
  model.value = newValue;
  emit('change', newValue);
};

/**
 * Standard HTML attributes should be passed on to the input
 * through the v-bind and not to the root div
 */
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="checkbox-wrapper" :class="customClass">
    <label class="label" :for="name" @click.prevent="onChange">
      <input
        type="checkbox"
        class="screen-reader-only"
        v-model="model"
        v-bind="attrs"
        :class="{ dirty: isDirty }"
        :id="name"
        :name="name"
        :data-testid="dataTestid"
        @invalid="onInvalid"
        ref="inputRef"
      />

      <span class="checkbox-control" aria-hidden="true">
        <checkbox-check-icon v-if="model" class="checkbox-icon" />
      </span>

      <span v-if="label">
        {{ label }}
        <span v-if="isRequired && !model" class="required">*</span>
      </span>
    </label>
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
  </div>
</template>

<style scoped>
@import '@/assets/styles/mixins.pcss';

input[type='checkbox'] {
  appearance: none;
}

.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  color: var(--colour-ti-secondary);
  font-weight: 400;
  font-size: 1rem;
  width: 100%;
}

.dark {
  .checkbox-control {
    color: var(--colour-ti-base-light);
  }
}

.label {
  display: flex;
  gap: 0.625rem;
  justify-content: flex-start;
  align-items: center;
  color: var(--colour-ti-secondary);
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

.checkbox-control {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05) inset;
  background-color: var(--colour-surface-raised, #fff);
  color: var(--colour-ti-base-dark);

  .checkbox-icon {
    width: 1rem;
    height: 1rem;
  }
}

input:hover + .checkbox-control {
  border-color: rgba(0, 0, 0, 0.3);
}

input:focus-visible + .checkbox-control {
  outline: 2px solid var(--colour-primary-hover);
  outline-offset: 2px;
}

input.dirty:invalid + .checkbox-control {
  border-color: var(--colour-ti-critical);
}

input:checked + .checkbox-control,
input:checked + .checkbox-control:hover,
input:checked:focus-visible + .checkbox-control {
  background-color: var(--colour-primary-default-light);
  border-color: var(--colour-primary-hover-light);
}

input:disabled + .checkbox-control {
  cursor: not-allowed;
  opacity: 0.5;
}

input:disabled + .checkbox-control ~ span {
  color: var(--colour-ti-muted);
}
</style>
