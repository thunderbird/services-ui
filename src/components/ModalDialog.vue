<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { t } from '@/composable/i18n';
import LinkButton from '@/components/LinkButton.vue';

// component properties
interface Props {
  closable?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  closable: true,
});
const emit = defineEmits(['opened', 'closed']);

const isVisible = ref(false);

const show = () => {
  isVisible.value = true;
  emit('opened');
};
const hide = () => {
  isVisible.value = false;
  emit('closed');
};

defineExpose({ show, hide })

onMounted(async () => {
  // Activate page scroll-lock
  window.document.body.classList.add('modal-active');
});
onUnmounted(() => {
  // Release page scroll-lock
  window.document.body.classList.remove('modal-active');
});
</script>

<template>
  <div v-show="isVisible" class="overlay" role="dialog" tabindex="-1" aria-labelledby="title" aria-modal="true">
    <div class="modal">
      <link-button class="modal-close" @click="hide" aria-labelledby="modal-close-button">
        X
        <!-- <img id="modal-close-button" src="@/assets/svg/icons/close.svg" :alt="t('label.close')" :title="t('label.close')"/> -->
      </link-button>
      <div v-if="$slots.header" class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div v-if="$slots.actions" class="modal-actions">
        <slot name="actions"></slot>
      </div>
      <div class="divider"></div>
      <div v-if="$slots.footer" class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/styles/custom-media.pcss';

body.modal-active {
  overflow: hidden;
}

.overlay {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.modal-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
}

/* Filter it for dark-mode B^) */
.dark .modal-close > :deep(.text) {
  filter: invert(0.75)
}

.modal-body {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}

.modal-actions {
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.modal-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-block: 2rem;
}

.modal {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
  padding: 1rem 1rem 0;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.divider {
  width: 100%;
  height: 0.0625rem;
  padding-bottom: 1px;
  border-radius: unset;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    90deg,
    rgba(21, 66, 124, 0) 20.5%,
    rgba(21, 66, 124, 0.2) 50%,
    rgba(21, 66, 124, 0) 79.5%
  );
}
.dark {
  .divider {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.00) 0%,
      rgba(255, 255, 255, 0.40) 50%,
      rgba(255, 255, 255, 0.00) 100%
    );
  }
}

.footer {
  bottom: 0;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  gap: 1rem;

  :deep(a) {
    color: var(--colour-service-primary-pressed);
    font-size: 0.75rem;
    line-height: 1.5rem;
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
    padding: 2rem 2rem 0;
    overflow: hidden;
    height: min-content;
    max-height: 90vh;
  }

  .modal-header {
    flex-shrink: 0;
  }

  .modal-body {
    overflow-y: auto;
    min-height: 0;
  }

  .modal-actions {
    justify-content: center;
    margin-block: 2rem;
    flex-shrink: 0;
  }

  .divider {
    width: 50rem;
    margin: 0;
    flex-shrink: 0;
  }

  .footer {
    padding-bottom: 0;
    flex-shrink: 0;
  }
}

</style>
