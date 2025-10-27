<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <base-button type="danger">
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </base-button>
</template>
