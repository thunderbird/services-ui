<script setup lang="ts">
import { type SelectOption } from '@/models';
import ErrorIcon from '@/icons/ErrorIcon.vue';

// component properties
interface Props {
  options: SelectOption<string | number>[];
  required: boolean;
  help?: string;
  error?: string;
  disabled?: boolean;
  singleSelection?: boolean;
  dataTestid?: string;
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  help: null,
  error: null,
  disabled: false,
  singleSelection: false,
  dataTestid: 'bubble-select',
});

const model = defineModel<(string | number)[]>({ default: [] });
const emit = defineEmits(['click']);

/**
 * Adds or removes the option value from the model.
 * There's probably a better way to do this lol!
 * @param option
 */
const toggleBubble = (option: SelectOption<string | number>) => {
  // Detect what our current state is
  const val = model.value.indexOf(option.value);

  if (val > -1) {
    // We have the value, so filter it out
    model.value = model.value.filter((value) => option.value !== value);
  } else if (props.singleSelection) {
    // We don't have the value but we should only ever have one selection
    model.value = [option.value]
  } else {
    // We don't have the value, so mix it in
    model.value = [...model.value, option.value];
  }

  // Sort for niceness
  model.value.sort();

  // Finally let the parent know there was a click
  emit('click');
};
</script>

<template>
  <div class="wrapper">
    <label>
      <span class="label">
        <slot />
        <span v-if="required && model?.length === 0" class="required">*</span>
      </span>
    </label>
    <ul class="bubble-list">
      <li v-for="option in options" :key="option.value">
        <button
          class="tbpro-bubble"
          :aria-pressed="model.indexOf(option.value) > -1"
          :class="{
            selected: model.indexOf(option.value) > -1,
            error,
            disabled,
          }"
          :title="option.fullLabel ?? String(option.value)"
          type="button"
          @click="() => (!disabled ? toggleBubble(option) : null)"
          :data-testid="dataTestid"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
    <span v-if="error" class="help-label invalid">
      <error-icon />
      {{ error }}
    </span>
    <span v-if="help" class="help-label">
      {{ help }}
    </span>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--colour-ti-secondary);
  font-family: 'Inter', 'sans-serif';
  font-size: 1rem;
  line-height: var(--line-height-input);
  font-weight: 400;
}

.bubble-list {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.label {
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

.tbpro-bubble {
  transition: var(--transition);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.75rem;
  height: 2.75rem;
  border: 0.0625rem solid rgba(0, 0, 0, 0.1);
  border-radius: 6.25rem;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05) inset;
  background-color: var(--colour-neutral-lower);
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 150%;
  color: var(--colour-ti-secondary);
  cursor: pointer;
  text-transform: uppercase;

  &:hover:not(.selected) {
    border-color: var(--colour-primary-hover);
  }
}

.selected {
  background-color: var(--colour-ti-secondary);
  color: var(--colour-neutral-base);
}

.required {
  color: var(--colour-ti-critical);
  padding-inline-start: 0.25rem;
}

.disabled {
  cursor: default;
}

.error {
  border-color: var(--colour-ti-critical);
}

.selected.disabled {
  background-color: var(--colour-neutral-border);
  border-color: var(--colour-ti-muted);
  color: var(--colour-ti-muted);
}
</style>
