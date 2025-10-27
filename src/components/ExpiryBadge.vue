<script setup lang="ts">
import StatusExpiryIcon from '@/foundation/StatusExpiryIcon.vue';
import { computed } from 'vue';
import { t } from '@/composable/i18n';
import { ExpiryUnitTypes } from '@/definitions';

// component properties
interface Props {
  timeRemaining?: number;
  warningThreshold?: number;
  timeUnit?: ExpiryUnitTypes;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  timeRemaining: 10,
  warningThreshold: 5,
  timeUnit: ExpiryUnitTypes.Days,
  dataTestid: 'expiry-badge',
});

const timeRemaining = computed(() => Math.ceil(props.timeRemaining));
const warningThreshold = computed(() => props.warningThreshold);
const status = computed(() => {
  if (timeRemaining.value <= 0) {
    return 'expired';
  } else if (timeRemaining.value < warningThreshold.value) {
    return 'warning';
  } else {
    return 'notify';
  }
});
</script>

<template>
  <div :class="{ [status]: status }" class="badge" :data-testid="dataTestid">
    <span class="icon">
      <status-expiry-icon />
    </span>
    <span class="text">
      {{ t(`expiryIndicator.${timeUnit}`, { n: timeRemaining }) }}
    </span>
  </div>
</template>

<style scoped>
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;
  height: 0.75rem;
  padding: 0.03125rem;
}

.text {
  margin: auto;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.badge {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1875rem;
  gap: 0.1875rem;
  border: 0.0625rem solid;
  padding: 0.1875rem;
}

.notify {
  background-color: var(--colour-primary-soft);
  border-color: var(--colour-primary-hover);
  color: var(--colour-primary-hover);
}

.expired {
  background-color: var(--colour-neutral-subtle);
  border-color: var(--colour-ti-secondary);
  color: var(--colour-ti-secondary);
}

.warning {
  background-color: var(--colour-warning-soft);
  border-color: var(--colour-ti-warning);
  color: var(--colour-ti-warning);
}
</style>
