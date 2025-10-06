<script setup lang="ts">
import BaseButton from '@/elements/BaseButton.vue';
</script>

<template>
  <base-button type="link" class="icon-only">
    <template #iconLeft>
      <slot />
    </template>
  </base-button>
</template>

<style>
.link.icon-only {
  padding: .5rem;

  .icon {
    width: 1em;
    height: 1em;
  }

  .text {
    display: none;
  }
}
</style>
