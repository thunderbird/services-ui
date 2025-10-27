<script setup lang="ts">
import { computed } from 'vue';
import { NoticeBarTypes } from '@/definitions';

import NoticeInfoIcon from '@/foundation/NoticeInfoIcon.vue';
import NoticeSuccessIcon from '@/foundation/NoticeSuccessIcon.vue';
import NoticeWarningIcon from '@/foundation/NoticeWarningIcon.vue';
import NoticeCriticalIcon from '@/foundation/NoticeCriticalIcon.vue';

// component properties
interface Props {
  type?: NoticeBarTypes;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: NoticeBarTypes.Info,
  dataTestid: 'notice-bar',
});

const isInfo = computed(() => props.type === NoticeBarTypes.Info);
const isSuccess = computed(() => props.type === NoticeBarTypes.Success);
const isWarning = computed(() => props.type === NoticeBarTypes.Warning);
const isError = computed(() => props.type === NoticeBarTypes.Critical);
</script>

<template>
  <div
    :class="{ [type]: type }"
    class="notice notice-bar"
    :data-testid="dataTestid"
  >
    <span class="icon">
      <notice-info-icon v-if="isInfo" />
      <notice-success-icon v-if="isSuccess" />
      <notice-warning-icon v-if="isWarning" />
      <notice-critical-icon v-if="isError" />
    </span>
    <span class="body">
      <slot />
    </span>
    <div class="cta" v-if="$slots?.cta">
      <slot name="cta" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/custom-media.pcss';

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 132%;
  color: var(--colour-ti-secondary);
  flex-grow: 1;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.notice {
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: start;
  align-items: center;
  border-radius: 1rem;
  gap: 0.5rem;
  border: 0.0625rem solid;
  padding: 1rem;

  &:has(.cta) {
    padding: 0.75rem 0.75rem 0.75rem 1rem;
  }
}

.info {
  background-color: var(--colour-primary-soft);
  border-color: var(--colour-primary-default);
}

.success {
  background-color: var(--colour-success-soft);
  border-color: var(--colour-success-default);
}

.warning {
  background-color: var(--colour-warning-soft);
  border-color: var(--colour-warning-default);
}

.critical {
  background-color: var(--colour-danger-soft);
  border-color: var(--colour-danger-default);
}
</style>
