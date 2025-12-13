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
  decimalPlaces?: number;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  timeRemaining: 10,
  warningThreshold: 5,
  timeUnit: ExpiryUnitTypes.Days,
  decimalPlaces: 0,
  dataTestid: 'expiry-badge',
});

const roundUp = (num: number, precision: number) => {
    const norm = Math.pow(10, precision);
    return Math.ceil(num * norm) / norm;
}

const convertToSmallerUnit = (unit: ExpiryUnitTypes, value: number) => {
  switch (unit) {
    case ExpiryUnitTypes.Years:
      return { unit: ExpiryUnitTypes.Months, value: Math.ceil(value*12)};
    case ExpiryUnitTypes.Months:
      return { unit: ExpiryUnitTypes.Weeks, value: Math.ceil(value*4.345) };
    case ExpiryUnitTypes.Weeks:
      return { unit: ExpiryUnitTypes.Days, value: Math.ceil(value*7) };
    case ExpiryUnitTypes.Days:
      return { unit: ExpiryUnitTypes.Hours, value: Math.ceil(value*24) };
    case ExpiryUnitTypes.Hours:
      return { unit: ExpiryUnitTypes.Minutes, value: Math.ceil(value*60) };
    case ExpiryUnitTypes.Minutes:
    default:
      return { unit: ExpiryUnitTypes.Seconds, value: Math.ceil(value*60) };
  }
}

const timeRemaining = computed(() => props.decimalPlaces > 0
  ? roundUp(props.timeRemaining, props.decimalPlaces)
  : Math.floor(props.timeRemaining)
);

const label = computed(() => {
  let text = t('expiryIndicator.expired');

  if (props.timeRemaining > 0 && props.decimalPlaces === 0 && props.timeUnit !== ExpiryUnitTypes.Seconds) {
    // For no decimal places, we render the time with the next smaller unit
    text = t(`expiryIndicator.${props.timeUnit}`, { n: timeRemaining.value.toString() }, Math.ceil(timeRemaining.value));
    const { unit, value } = convertToSmallerUnit(props.timeUnit, props.timeRemaining % 1);
    if (value > 0) {
      text += ' ' + t(`expiryIndicator.and.${unit}`, { n: value.toString() }, Math.ceil(value));
    }
  } else if (props.timeRemaining > 0) {
    // Otherwise we show the decimal places up to the given amount
    text = t(`expiryIndicator.${props.timeUnit}`, { n: timeRemaining.value.toString() }, Math.ceil(timeRemaining.value));
  }
  return text;
});

const status = computed(() => {
  if (props.timeRemaining <= 0) {
    return 'expired';
  } else if (props.timeRemaining < props.warningThreshold) {
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
      {{ label }}
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
