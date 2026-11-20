<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { t } from '@/composable/i18n';
import UserAvatar from '@/components/UserAvatar.vue';

interface Props {
  username: string;
  avatarUrl?: string;
  dataTestid?: string;
  triggerLabel?: string; // Screen reader label / title for the trigger button.
  menuLabel?: string; // aria-label for the popover's menu.
  forceDark?: boolean; // Render the popover in dark mode regardless of the current theme.
}

const props = withDefaults(defineProps<Props>(), {
  dataTestid: 'user-menu',
  triggerLabel: t('userMenu.openLabel'),
  menuLabel: t('userMenu.menuLabel'),
  forceDark: false,
});

const container = useTemplateRef('details');

onClickOutside(container, close);

function close() {
  if (container.value?.open) {
    container.value.open = false;
  }
}
</script>

<template>
  <details ref="details" class="user-menu" :data-testid="props.dataTestid" @keydown.escape="close">
    <!-- Label as hidden text instead of aria-label (accessible name must contain the visible initials) -->
    <summary class="trigger" :title="props.triggerLabel">
      <span class="screen-reader-only">{{ props.triggerLabel }}</span>
      <user-avatar :username="props.username" :avatar-url="props.avatarUrl" aria-hidden="true" />
    </summary>
    <!-- Slotted links should set role="menuitem" themselves, as it can't be applied from here -->
    <div class="popover" :class="{ dark: props.forceDark }" role="menu" :aria-label="props.menuLabel" @click="close">
      <slot />
    </div>
  </details>
</template>

<style scoped>
.user-menu {
  position: relative;
  display: inline-block;

  .trigger {
    display: flex;
    border-radius: 50%;
    list-style: none;
    cursor: pointer;
    user-select: none;

    &::-webkit-details-marker {
      display: none;
    }

    &:focus-visible {
      outline: 2px solid var(--colour-primary-hover);
      outline-offset: 2px;
    }
  }

  .popover {
    position: absolute;
    z-index: 30;
    top: calc(100% + 0.5rem);
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: max-content;
    padding: 0.5rem 0;
    border: 1px solid var(--colour-neutral-border);
    border-radius: var(--border-radius);
    background: var(--colour-neutral-raised);
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.14),
      0px 0px 2px 0px rgba(0, 0, 0, 0.12);

    /* Dark theme values of the tokens used here, as they are only defined for html.dark */
    &.dark {
      --colour-neutral-raised: #2b2b2f;
      --colour-neutral-subtle: var(--colour-surface-subtle-dark);
      --colour-neutral-border: #52525b;
      --colour-ti-base: var(--colour-ti-base-dark);
    }

    :slotted(a) {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
      color: var(--colour-ti-base);
      text-decoration: none;
    }

    :slotted(a:hover),
    :slotted(a:focus-visible) {
      outline: none;
      background: var(--colour-neutral-subtle);
    }
  }
}
</style>
