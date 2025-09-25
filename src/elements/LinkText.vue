<script setup lang="ts">
import CopyIcon from '@/icons/CopyIcon.vue';
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';

interface Props {
  type?: 'default' | 'primary';
  url?: string,
  dataTestid?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  dataTestid: 'link-text-control',
});

const emit = defineEmits(['click']);

/**
 * On click we propagate the event to the parent
 */
const onClick = (event: Event) => {
  emit('click', event);
};
</script>

<template>
  <a
    :href="url"
    class="link-text"
    :class="{ [type]: type }"
    :data-testid="dataTestid"
    @click="onClick"
  >
    <span class="icon">
      <slot name="prefix">
        <copy-icon />
      </slot>
    </span>
    <span class="text">
      <slot />
    </span>
    <span class="icon">
      <slot name="suffix">
        <arrow-right-icon />
      </slot>
    </span>
  </a>
</template>

<style scoped>
.link-text {
  cursor: pointer;
  transition: var(--transition);
  color: var(--colour-ti-secondary);
  text-decoration-line: underline;
  text-underline-offset: .25rem;
  display: inline-flex;
  gap: .5rem;
  align-items: center;

  &:hover {
    color: var(--colour-ti-base);
    text-decoration-line: none;
  }

  &.primary {
    color: var(--colour-ti-highlight);

    &:hover {
      color: var(--colour-primary-hover);
    }
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
