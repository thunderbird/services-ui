<script setup lang="ts">
import { computed } from 'vue';
import { formatTimeAgoIntl, useIntervalFn, useNow } from '@vueuse/core';
import { i18n } from '@/composable/i18n';
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/components/ToolTip.vue';

// component properties
interface Props {
  datetime: Date | number | string;
  format?: Intl.RelativeTimeFormatStyle;
  tooltipPosition?: TooltipPosition;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  format: 'short',
  tooltipPosition: TooltipPosition.Top,
  dataTestid: 'relative-time',
});

// Refresh the relative text periodically so it stays accurate.
const now = useNow({ scheduler: (cb) => useIntervalFn(cb, 30_000) });

const date = computed(() => new Date(props.datetime));
const isoString = computed(() => date.value.toISOString());

const relative = computed(() => formatTimeAgoIntl(
  date.value,
  {
    locale: i18n.locale.value,
    relativeTimeFormatOptions: { style: props.format, numeric: 'auto' },
    // Keep the spacing from Intl, which differs per locale and format.
    insertSpace: false,
  },
  now.value,
));

const absolute = computed(() => new Intl.DateTimeFormat(
  i18n.locale.value,
  { dateStyle: 'long', timeStyle: 'long' },
).format(date.value));
</script>

<template>
  <tool-tip :position="tooltipPosition" :data-testid="`${dataTestid}-tooltip`">
    <template #default="{ tooltipId }">
      <time :datetime="isoString" tabindex="0" :aria-describedby="tooltipId" :data-testid="dataTestid">
        {{ relative }}
      </time>
    </template>
    <template #content>{{ absolute }}</template>
  </tool-tip>
</template>

<style scoped>
time {
  text-decoration: underline dotted;
  cursor: help;
}
</style>
