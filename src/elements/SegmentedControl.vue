<script setup lang="ts">
import { type SelectOption } from '@/models';

interface Props {
  options: SelectOption<string | number>[];
  legend: string;
  required: boolean;
  disabled?: boolean;
  dataTestid?: string;
}

withDefaults(defineProps<Props>(), {
  required: false,
  disabled: false,
  dataTestid: 'segmented-control',
});

const model = defineModel<string | number>({ default: null });
const emit = defineEmits(['click']);

/**
 * Update the model with the selected option
 */
const setOption = (option: SelectOption<string | number>) => {
  // Update model
  model.value = option.value;

  // Let the parent know there was a click
  emit('click', option);
};
</script>

<template>
  <div class="wrapper">
    <label>
      <span class="label">
        <slot />
        <span v-if="required && model !== null" class="required">*</span>
      </span>
    </label>
    <ul class="segment-list">
      <li v-for="option in options" :key="option.value">
        <button
          class="segment"
          :aria-pressed="model === option.value"
          :class="{
            selected: model === option.value,
            disabled,
          }"
          :title="option.fullLabel ?? String(option.value)"
          type="button"
          @click="() => (!disabled ? setOption(option) : null)"
          :data-testid="dataTestid"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  display: inline-flex;
  flex-direction: column;
  color: var(--colour-ti-base);
  font-family: 'Inter', 'sans-serif';
  font-size: var(--txt-input);
  line-height: var(--line-height-input);
  font-weight: 400;
}

.label {
  width: 100%;
  font-weight: 600;
}
.required {
  color: var(--colour-ti-critical);
}

.segment-list {
  padding: 0;
  display: inline-flex;
  list-style: none;

  li {
    .segment {
      transition: var(--transition);
      
      display: flex;
      justify-content: center;
      align-items: center;
    
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-width: 1px 0 1px 1px;
      background-color: transparent;
      padding: 0.5rem 1rem;
      margin-left: -1px;
      cursor: pointer;
      box-shadow: 0.125rem 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.05) inset;
      font-weight: 700;
      color: var(--colour-ti-secondary);
    
      &.selected {
        background-color: var(--colour-service-primary);
        color: var(--colour-neutral-base);
    
        &.disabled {
          background-color: var(--colour-ti-muted);
          color: var(--colour-neutral-base);
        }
      }
      
      &.disabled {
        cursor: not-allowed;
      }
    }

    &:last-child .segment {
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
      border-right-width: 1px;
    }
    &:first-child .segment {
      border-top-left-radius: 999px;
      border-bottom-left-radius: 999px;
    }
  }
}

</style>
