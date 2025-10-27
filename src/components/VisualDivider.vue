<script setup lang="ts">
/**
 * This could be a <hr/> but there's no <vr/> :(
 */
interface PropTypes {
  type?: 'horizontal' | 'vertical'
}
withDefaults(defineProps<PropTypes>(), {
  type: 'horizontal'
});
</script>

<template>
  <div :class="type" class="divider"></div>
</template>

<style>
html {
  --divider-background-colour: #e4e4e7; /* using old surface/border */
  --divider-border-colour: #fff;
  &.dark {
    --divider-background-colour: #3D4D67;
    --divider-border-colour: #242d3c; /* I made this one up */
  }
}
</style>
<style scoped>
.divider {
  box-shadow: 1px 0 0 0 var(--divider-border-colour);
  background-color: var(--divider-background-colour);
}

.horizontal {
  width: 100%;
  height: 1px;
}

.vertical {
  width: 1px;
  height: 100%;
}
</style>
