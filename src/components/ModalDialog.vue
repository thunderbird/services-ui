<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import XIcon from '@/foundation/XIcon.vue';
import { onClickOutside } from "@vueuse/core";

// component properties
interface Props {
  closeOutside?: boolean;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  closeOutside: true,
  dataTestid: 'modal',
});

const emit = defineEmits(['opened', 'closed']);

const isVisible = ref(false);

const modal = useTemplateRef('modal');
onClickOutside(modal, () => {
  if (props.closeOutside && isVisible.value) {
    hide();
  }
})

const show = () => {
  isVisible.value = true;
  window.document.body.classList.add('modal-active');
  emit('opened');
};
const hide = () => {
  isVisible.value = false;
  window.document.body.classList.remove('modal-active');
  emit('closed');
};

defineExpose({ show, hide })
</script>

<template>
  <transition>
    <div v-if="isVisible" class="overlay" role="dialog" tabindex="-1" aria-labelledby="title" aria-modal="true">
      <div class="modal" ref="modal">
        <button class="modal-close" @click="hide" aria-labelledby="modal-close-button">
          <x-icon />
        </button>
        <div v-if="$slots.header" class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="$slots.actions" class="modal-actions">
          <slot name="actions"></slot>
        </div>
        <div v-if="$slots.footer" class="divider"></div>
        <div v-if="$slots.footer" class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
@import '@/assets/styles/custom-media.pcss';

.v-enter-active,
.v-leave-active {
  transition: opacity 0.125s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

body.modal-active {
  overflow: hidden;
}

.overlay {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, var(--colour-ti-base-light) 65%, transparent);
}

.modal {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-top: 5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  background-color: var(--colour-neutral-base);
}

.modal-close {
  position: absolute;
  right: 1.75rem;
  top: 1.75rem;
  cursor: pointer;
  color: var(--colour-ti-muted);
  background-color: color-mix(in srgb, black 5%, transparent);;
  border: 0;
  border-radius: 999px;
  display: flex;
  padding: .5rem;
}

/* Filter it for dark-mode B^) */
.dark .modal-close > :deep(.text) {
  filter: invert(0.75)
}

.modal-header {
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;
  margin-block-end: 1.5rem;

  font-family: Metropolis, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 120%;
  color: var(--colour-ti-highlight);
}

.modal-body {
  padding: 0 3rem;
  box-sizing: border-box;
  margin-block-end: 1.5rem;

  font-size: 0.875rem;
  line-height: 123%;
  color: var(--colour-ti-secondary);

  &:last-child {
    margin-block-end: 3rem;
  }
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 0 3rem;
  box-sizing: border-box;
  margin-block-end: 1.5rem;

  &:last-child {
    margin-block-end: 3rem;
  }
}

.divider {
  height: 0.0625rem;
  border-radius: unset;
  margin-top: auto;
  margin-bottom: 1rem;
  flex-shrink: 0;
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--colour-neutral-border) 50%,
    transparent 100%
  );
}

.footer {
  height: 2.8125rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  gap: 2rem;

  color: var(--colour-primary-pressed);

  :deep(a) {
    color: var(--colour-primary-default);
    font-size: 0.8125rem;
    line-height: 1.5rem;
    text-decoration-line: none;
    padding-left: 0;
    padding-right: 0;
    
    &:hover {
      text-decoration-line: underline;
    }
  }
}

/* Default styling for #title */
:deep(#title) {
  color: var(--colour-ti-base);
  font-family: 'Inter', 'sans-serif';
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.664rem;
}

@media (--md) {
  .modal {
    width: 48rem; /* 768px */
    height: min-content;
    min-height: 20vh;
    max-height: 90vh;
    border-radius: 1.5rem;
  }

  .modal-body {
    overflow-y: auto;
    min-height: 0;
  }

  .divider {
    width: 100%;
    margin: 0;
    flex-shrink: 0;
  }

  .footer {
    padding-bottom: 0;
    flex-shrink: 0;
  }
}

</style>
