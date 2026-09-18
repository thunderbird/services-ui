<script setup lang="ts">
/**
 * Storybook-only helper to show the colour blocks
 * Colours use the live CSS variables, so they follow the theme picked in the Storybook toolbar
 */
import { onBeforeUnmount, onMounted, ref } from 'vue';

export interface ColourGroup {
  name: string;
  description: string;
  tokens: string[];
  deprecated?: boolean;
}

const props = defineProps<{ groups: ColourGroup[] }>();

// Resolved hex values for the active theme
const values = ref<Record<string, string>>({});

function readValues() {
  const style = getComputedStyle(document.documentElement);
  for (const token of props.groups.flatMap((group) => group.tokens)) {
    values.value[token] = style.getPropertyValue(token).trim();
  }
}

// Storybook's theme switcher toggles a class on <html>
const observer = new MutationObserver(readValues);
onMounted(() => {
  readValues();
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});

onBeforeUnmount(() => observer.disconnect());
</script>

<template>
  <div class="palette">
    <section v-for="group in groups" :key="group.name">
      <h2>
        {{ group.name }}
        <span v-if="group.deprecated" class="deprecated">Deprecated</span>
      </h2>
      <p class="description">{{ group.description }}</p>
      <ul class="swatches">
        <li v-for="token in group.tokens" :key="token">
          <div class="chip" :style="{ backgroundColor: `var(${token})` }"></div>
          <code>{{ token }}</code>
          <span class="value">{{ values[token] }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.palette {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--colour-neutral-base);
  color: var(--colour-ti-base);
}

h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
}

.deprecated {
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--colour-ti-critical);
  border-radius: 1rem;
  color: var(--colour-ti-critical);
  font-size: 0.75rem;
  text-transform: uppercase;
}

.description {
  margin: 0 0 1rem;
  color: var(--colour-ti-secondary);
}

.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.chip {
  height: 4rem;
  margin-bottom: 0.25rem;
  border: 1px solid var(--colour-neutral-border);
  border-radius: 0.5rem;
}

.swatches li {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

code {
  font-size: 0.75rem;
  word-break: break-all;
}

.value {
  color: var(--colour-ti-secondary);
  font-family: monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
