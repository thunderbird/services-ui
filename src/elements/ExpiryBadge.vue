<script setup lang="ts">
import BaseBadge from "./BaseBadge.vue";
import StatusExpiryIcon from "@/icons/StatusExpiryIcon.vue";
import { computed } from "vue";
import { t } from '@/composable/i18n';
import { ExpiryUnitTypes } from "@/definitions";

// component properties
interface Props {
  timeRemaining?: number;
  warningThreshold?: number;
  timeUnit?: ExpiryUnitTypes;
}
const props = withDefaults(defineProps<Props>(), {
  timeRemaining: 10,
  warningThreshold: 5,
  timeUnit: ExpiryUnitTypes.Days
})

const timeRemaining = computed(() => Math.ceil(props.timeRemaining));
const warningThreshold = computed(() => props.warningThreshold);
const status = computed(() => {
  if (timeRemaining.value <= 0) {
    return "secondary";
  } else if (timeRemaining.value < warningThreshold.value) {
    return "warning";
  } else {
    return "primary";
  }
});

</script>

<template>
  <base-badge :class="status" icon>
    <template #icon>
      <status-expiry-icon/>
    </template>
    {{ t(`expiryIndicator.${timeUnit}`, { 'n': timeRemaining }) }}
  </base-badge>
</template>
