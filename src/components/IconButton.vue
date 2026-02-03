<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

interface Props {
  size?: 'small' | 'default' | 'medium' | 'large';
}
withDefaults(defineProps<Props>(), {
  size: 'default',
});
</script>

<template>
  <base-button type="link" class="icon-only" :class="{ [size]: size }">
    <template #iconLeft="slotData">
      <slot v-bind="slotData" />
    </template>
  </base-button>
</template>

<style>
.link.icon-only {
  padding: 0.5rem;

  .icon,
  .icon svg {
    width: 1rem;
    height: 1rem;
  }

  &.small .icon,
  &.small .icon svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  &.medium .icon,
  &.medium .icon svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  &.large .icon,
  &.large .icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .text {
    display: none;
  }
}
</style>
