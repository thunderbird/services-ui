<script setup lang="ts">
import { useTemplateRef, type Component } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { t } from '@/composable/i18n';
import GripIcon from '@/foundation/GripIcon.vue';

export interface AppDrawerApp {
  // Unique identifier, also emitted by the `select` event for apps without an `href`.
  id: string;
  name: string;
  icon: Component;
  // Omit for an app that should be navigated to in-app; handle it via the `select` event instead.
  href?: string;
  // Marks the app the drawer is currently being shown from, rendering it as a non-navigable, highlighted tile.
  current?: boolean;
}

interface Props {
  apps: AppDrawerApp[];
  dataTestid?: string;
  // aria-label / title for the trigger button.
  triggerLabel?: string;
  // aria-label for the popover's menu.
  menuLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  dataTestid: 'app-drawer',
  triggerLabel: t('appDrawer.openLabel'),
  menuLabel: t('appDrawer.menuLabel'),
});

const emit = defineEmits<{
  select: [id: string];
}>();

const detailsEl = useTemplateRef('details');

onClickOutside(detailsEl, close);

function close() {
  if (detailsEl.value?.open) {
    detailsEl.value.open = false;
  }
}

function selectApp(app: AppDrawerApp) {
  close();

  if (!app.href) {
    emit('select', app.id);
  }
}
</script>

<template>
  <details ref="details" class="app-drawer" :data-testid="props.dataTestid" @keydown.escape="close">
    <summary class="app-drawer__button" :aria-label="props.triggerLabel" :title="props.triggerLabel">
      <grip-icon aria-hidden="true" />
    </summary>
    <div class="app-drawer__popover" role="menu" :aria-label="props.menuLabel">
      <component
        :is="app.href && !app.current ? 'a' : 'button'"
        v-for="app in props.apps"
        :key="app.id"
        class="app-drawer__tile"
        :class="{ 'app-drawer__tile--current': app.current }"
        :type="!app.href || app.current ? 'button' : undefined"
        :href="app.href && !app.current ? app.href : undefined"
        :target="app.href && !app.current ? '_blank' : undefined"
        :rel="app.href && !app.current ? 'noopener noreferrer' : undefined"
        role="menuitem"
        :aria-current="app.current ? 'page' : undefined"
        @click="selectApp(app)"
      >
        <span class="app-drawer__icon" aria-hidden="true">
          <component :is="app.icon" />
        </span>
        <span class="app-drawer__label">{{ app.name }}</span>
      </component>
    </div>
  </details>
</template>

<style scoped>
.app-drawer {
  position: relative;
  display: inline-block;
}

.app-drawer__button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  color: var(--colour-ti-base);
  list-style: none;
  cursor: pointer;
  user-select: none;
}

.app-drawer__button::-webkit-details-marker {
  display: none;
}

.app-drawer__button:hover,
.app-drawer[open] .app-drawer__button {
  color: var(--colour-ti-muted);
}

.app-drawer__button:focus-visible {
  outline: 2px solid var(--colour-primary-hover);
  outline-offset: 2px;
}

.app-drawer__popover {
  position: absolute;
  z-index: 30;
  top: calc(100% - 4px);
  right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--colour-neutral-border);
  border-radius: var(--border-radius);
  background: var(--colour-neutral-raised);
  box-shadow:
    0px 4px 8px 0px rgba(0, 0, 0, 0.14),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
}

.app-drawer__tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 0.5rem;
  font-weight: 600;
  color: var(--colour-ti-secondary);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}

.app-drawer__tile:focus-visible {
  outline: none;
}

.app-drawer__icon {
  display: grid;
  place-items: center;
  box-sizing: border-box;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.5rem;
  border: 1px solid var(--colour-neutral-border);
  border-radius: var(--border-radius);
  background: linear-gradient(to bottom, var(--colour-neutral-raised), var(--colour-neutral-subtle));
  box-shadow: 0px 3.385px 5.923px -2.538px rgba(0, 0, 0, 0.15);
  color: var(--colour-ti-secondary);
}

.app-drawer__icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}

.app-drawer__tile:hover .app-drawer__icon,
.app-drawer__tile:focus-visible .app-drawer__icon,
.app-drawer__tile--current .app-drawer__icon {
  background: linear-gradient(to bottom, var(--colour-neutral-raised), var(--colour-primary-soft));
  color: var(--colour-primary-default);
}

.app-drawer__tile:focus-visible .app-drawer__icon {
  outline: 2px solid var(--colour-primary-hover);
  outline-offset: 2px;
}

.app-drawer__tile--current .app-drawer__icon {
  border-color: var(--colour-primary-default);
}

.app-drawer__tile--current {
  color: var(--colour-primary-pressed);
  font-weight: 700;
}
</style>
