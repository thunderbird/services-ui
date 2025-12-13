<script setup lang="ts">
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/components/ToolTip.vue';

// component properties
interface Props {
  type?: 'primary' | 'brand' | 'danger' | 'link';
  size?: 'default' | 'small';
  variant?: 'filled' | 'outline';
  /**
   * Transform the button into an anchor tag. If null then the component will be rendered as a button tag.
   */
  href?: string;
  tooltip?: string;
  forceTooltip?: boolean;
  formAction?: 'none' | 'submit' | 'reset';
  dataTestid?: string;
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'default',
  variant: 'filled',
  forceTooltip: false,
  formAction: 'none',
  dataTestid: 'button',
  disabled: false,
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="base"
    :class="{ [type]: type, small: size === 'small', [variant]: variant }"
    :type="formAction === 'none' ? 'button' : formAction"
    :data-testid="dataTestid"
    :disabled="disabled"
  >
    <span class="icon" v-if="$slots?.iconLeft">
      <slot name="iconLeft" />
    </span>
    <span class="text">
      <slot />
    </span>
    <span class="icon" v-if="$slots?.iconRight">
      <slot name="iconRight" />
    </span>
    <tool-tip
      v-if="tooltip"
      class="tooltip"
      :class="{ 'display-tooltip': forceTooltip }"
      :position="TooltipPosition.Bottom"
      @click.prevent
    >
      {{ tooltip }}
    </tool-tip>
  </component>
</template>

<style>
html {
  --button-destructive-color: var(--colour-danger-default);
  --button-destructive-color-hover: var(--colour-danger-hover);
  --button-destructive-color-active: var(--colour-danger-pressed);

  &.dark {
    --button-destructive-color: var(--colour-danger-pressed);
    --button-destructive-color-hover: #f87171; /* TODO: var(--critical-hover) in Figma (?) */
    --button-destructive-color-active: var(--colour-ti-critical);
  }
}
</style>

<style scoped>
@import '@/assets/styles/mixins.pcss';

.tooltip {
  transform: translate(0, -100%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms ease-out;
}

button:hover > .tooltip,
.display-tooltip {
  opacity: 1;
}

.base {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: 0;
  border-radius: var(--border-radius);
  font-family: 'Inter', 'sans-serif';
  font-size: var(--txt-input); /* 14px */
  font-weight: 400;
  line-height: 1;
  padding: 1rem 1.12rem;
  cursor: pointer;
  user-select: none;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.75rem;
    height: 0.75rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    outline: none !important;
  }

  &:focus {
    outline: 0.125rem solid var(--colour-primary-default);
    outline-offset: 0.125rem;
  }

  &.filled {
    &:disabled {
      background: var(--colour-neutral-border);
      color: var(--colour-ti-muted);
      cursor: not-allowed;
    }
  }

  &.outline,
  &.brand.filled {
    /* Gradient ring only */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;

      /* the gradient that will become the border ring */
      background: var(--button-outline-border);

      /* ring thickness is controlled by padding on the pseudo-element */
      box-sizing: border-box;
      padding: 0.0625rem;

      /* punch out the center on the pseudo-element only */
      -webkit-mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      -webkit-mask-composite: xor; /* Chrome/Safari/Edge */
      mask-composite: exclude; /* Firefox */

      pointer-events: none; /* clicks go to the button */
    }

    &:disabled {
      --button-outline-border: transparent;
      background: var(--colour-neutral-base);
      border: 0.0625rem solid var(--colour-neutral-border);
      color: var(--colour-ti-muted);
      cursor: not-allowed;
    }
  }
}

.primary {
  &.filled {
    background: linear-gradient(
        180deg,
        var(--colour-accent-blue) -31.82%,
        var(--colour-primary-default) 8.74%,
        var(--colour-primary-hover) 100%
      )
      border-box;
    color: var(--colour-neutral-base);

    &:hover:enabled {
      background: linear-gradient(180deg, var(--colour-primary-hover) 0%, var(--colour-primary-hover) 100%);
    }

    &:active:enabled {
      background: linear-gradient(180deg, var(--colour-primary-pressed) 0%, var(--colour-primary-pressed) 100%);
    }
  }

  &.outline {
    --button-outline-border: var(--colour-primary-default);

    position: relative;
    background: transparent;
    color: var(--colour-primary-hover);

    &:hover:enabled {
      &::before {
        padding: 0.125rem; /* Controls border-width */
      }
    }

    &:active:enabled {
      background: color-mix(in srgb, var(--colour-accent-blue), transparent 90%);
      transition: none;

      &::before {
        padding: 0.125rem; /* Controls border-width */
      }
    }
  }
}

.brand {
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;

  &.filled {
    /* For brand buttons, we are using one-off colours for light / dark mode */
    --button-outline-border: linear-gradient(to bottom right, #7bc6f4 10%, #2b8cdc 60%) border-box;

    background: linear-gradient(329deg, var(--colour-primary-default) -21.06%, var(--colour-accent-blue) 64%);
    color: var(--colour-ti-base-light);
    position: relative;

    &:hover:enabled {
      background: linear-gradient(var(--colour-primary-hover), var(--colour-primary-hover));
      color: var(--colour-neutral-base);
    }

    &:active:enabled {
      background: linear-gradient(var(--colour-primary-pressed), var(--colour-primary-pressed));
      color: var(--colour-neutral-base);
    }
  }

  &.outline {
    --button-outline-border: linear-gradient(99deg, var(--colour-accent-blue) 19.15%, var(--colour-accent-gray) 75.77%)
      border-box;

    position: relative;
    background: transparent;
    color: var(--colour-ti-base);

    &:hover:enabled {
      background: #f2f2f2;
      color: var(--colour-ti-base-light);
    }

    &:active:enabled {
      background: #e3e3e3;
      color: var(--colour-ti-base-light);
    }
  }
}

.danger {
  &.filled {
    background-color: var(--button-destructive-color);
    color: var(--colour-neutral-base);

    &:hover:enabled {
      background-color: var(--button-destructive-color-hover);
    }

    &:active:enabled {
      background-color: var(--button-destructive-color-active);
    }
  }

  &.outline {
    --button-outline-border: var(--button-destructive-color);

    position: relative;
    background: transparent;
    color: var(--button-destructive-color);

    &:hover:enabled {
      --button-outline-border: var(--button-destructive-color-hover);

      color: var(--button-destructive-color-hover);

      &::before {
        padding: 0.125rem; /* Controls border-width */
      }
    }

    &:active:enabled {
      --button-outline-border: var(--button-destructive-color-active);

      color: var(--button-destructive-color-active);

      &::before {
        padding: 0.125rem; /* Controls border-width */
      }
    }
  }
}

.link {
  --colour-btn-border: transparent;

  background-color: transparent;
  color: var(--colour-service-primary);
  text-decoration: underline;
  box-shadow: none !important;
  border: none !important;
  min-width: 0;

  .text {
    padding: 0;
    user-select: none;
    font-weight: 400;
    line-height: 1;
  }
  &.small .text {
    padding: 0;
  }

  &:hover {
    box-shadow: none !important;
  }

  &.outline:disabled,
  &.filled:disabled {
    background: none;
    color: var(--colour-ti-muted);
    cursor: not-allowed;
  }
}

.small {
  padding: 0.38rem 0.75rem;

  &.brand .text {
    font-size: 0.6875rem;
  }

  .text {
    font-size: 0.875rem;
  }

  &button {
    min-width: initial;
    height: 2rem;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .base {
    transition:
      background-color 250ms ease-in-out,
      background 250ms ease-in-out,
      border 250ms ease-in-out,
      color 250ms ease-in-out,
      box-shadow 250ms ease-in-out;
  }
}
</style>
