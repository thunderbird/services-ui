<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { t } from '@/composable/i18n';
import CheckIcon from '@/icons/CheckIcon.vue';

const model = defineModel();

// component emits
const emit = defineEmits(['changed']);

// component properties
interface Props {
  name: string;
  active?: boolean; // deprecated in favor of v-model, sets initial toggle state
  disabled?: boolean; // flag for making toggle non changable
  label?: string; // input label
  noLegend?: boolean; // hide "on" and "off" labels
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  label: null,
  noLegend: true,
  dataTestid: 'switch-toggle',
});

// Internal state ref, used only when v-model is not provided
const internalState = ref(false);

onMounted(() => {
  // Initialize internal state only if v-model is not being used
  if (model.value === undefined) {
    internalState.value = props.active;
  }
});

const currentState = computed(() => (model.value !== undefined ? model.value : internalState.value));

const toggleState = () => {
  if (!props.disabled) {
    const newState = !currentState.value;

    // Update the model if available, else update the internal state.
    // In either case, `currentState` will be recomputed.
    if (model.value !== undefined) {
      model.value = newState;
    } else {
      internalState.value = newState;
      emit('changed', newState); // Emit legacy event for non-v-model usage
    }
  }
};
</script>

<template>
  <div class="component-container" @click.prevent="toggleState">
    <div v-if="label">{{ label }}</div>
    <div class="toggle-container">
      <div v-if="!noLegend" class="toggle-label">{{ t('switchToggle.off') }}</div>
      <div class="toggle" tabindex="0" @keyup.space.prevent="toggleState">
        <input
          class="toggle-input"
          type="checkbox"
          :name="name"
          :checked="!!currentState"
          :disabled="disabled"
          :data-testid="dataTestid"
        />
        <div class="toggle-handle">
          <check-icon class="toggle-icon-on" />
        </div>
      </div>
      <div v-if="!noLegend" class="toggle-label">{{ t('switchToggle.on') }}</div>
    </div>
  </div>
</template>

<style scoped>
.component-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:has(.toggle-input:disabled) {
    cursor: not-allowed;
  }
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.toggle-label {
  font-size: 0.75rem;
  line-height: 1.5rem;
}

.toggle {
  background: var(--colour-neutral-border);
  width: 2.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 3px 0px #00000026 inset;

  &:has(.toggle-input:checked) {
    background: var(--colour-service-primary);
  }

  &:has(.toggle-input:disabled) {
    opacity: 70%;
  }

  .toggle-input {
    display: none;

    &:checked ~ .toggle-handle {
      background-color: var(--colour-neutral-base);
      transform: translateX(1.125rem);
      border-color: var(--colour-service-primary);
      color: var(--colour-service-primary);
    }
  }

  .toggle-handle {
    background-color: var(--colour-neutral-base);
    width: 1.125rem;
    height: 1.125rem;
    margin-left: 0.125rem;
    margin-right: 0.125rem;
    border-radius: 9999px;
    transition: var(--transition);
    box-shadow: 0px 1px 2px 0px #0000001A;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;

    .toggle-icon-on {
      width: 0.625rem;
      height: 0.625rem;
    }
  }
}
</style>
