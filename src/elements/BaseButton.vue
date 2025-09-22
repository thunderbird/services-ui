<script setup lang="ts">
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/elements/ToolTip.vue';

// component properties
interface Props {
  type?: 'primary' | 'brand' | 'danger' | 'link';
  size?: 'default' | 'small';
  variant?: 'filled' | 'outline';
  tooltip?: string;
  forceTooltip?: boolean;
  dataTestid?: string;
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'default',
  variant: 'filled',
  tooltip: '',
  forceTooltip: false,
  dataTestid: 'button',
  disabled: false,
});
</script>

<template>
  <button
    class="base"
    :class="{ [type]: type, small: size === 'small', [variant]: variant }"
    type="button"
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
  </button>
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

  &.outline {
    &:disabled {
      background: var(--colour-neutral-base);
      border: 0.0625rem solid var(--colour-neutral-border);
      color: var(--colour-ti-muted);
      cursor: not-allowed;
    }
  }
}

.primary {
  border: 0.0625rem solid transparent;

  &.filled {
    background: linear-gradient(180deg, var(--colour-accent-blue) -31.82%, var(--colour-primary-default) 8.74%, var(--colour-primary-hover) 100%) border-box;
    color: var(--colour-neutral-base);

    &:hover:enabled {
      background: var(--colour-primary-hover);
    }

    &:active:enabled {
      background: var(--colour-primary-pressed);
    }
  }

  &.outline {
    background:
      linear-gradient(var(--colour-neutral-base), var(--colour-neutral-base)) padding-box,
      linear-gradient(180deg, var(--colour-primary-default) 31%, var(--colour-primary-hover) 100%) border-box;
    color: var(--colour-primary-hover);

    &:hover:enabled {
      border: 0.125rem solid var(--colour-primary-hover);
      border-image: none;
      margin: -0.0625rem; /* Compensate for the extra 1px border to prevent layout shift */

      &.small {
        margin: 0 -0.0625rem; /* Compensate for the extra 1px border to prevent layout shift */
      }
    }

    &:active:enabled {
      background: color-mix(in srgb, var(--colour-accent-blue), transparent 90%);
    }
  }
}

.brand {
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;
  border: 0.0625rem solid transparent;

  &.filled {
    /* For brand buttons, we are using one-off colours for light / dark mode */
    --button-brand-filled-border-gradient: linear-gradient(#A0E1FF, #2B8CDC) border-box;

    background:
      linear-gradient(329deg, var(--colour-primary-default) -21.06%, var(--colour-accent-blue) 64%) padding-box,
      var(--button-brand-filled-border-gradient);
    color: var(--colour-ti-base-light);

    &:hover:enabled {
      background:
        linear-gradient(var(--colour-primary-hover), var(--colour-primary-hover)) padding-box,
        var(--button-brand-filled-border-gradient);
      color: var(--colour-neutral-base);
    }

    &:active:enabled {
      background:
        linear-gradient(var(--colour-primary-pressed), var(--colour-primary-pressed)) padding-box,
        var(--button-brand-filled-border-gradient);
      color: var(--colour-neutral-base);
    }
  }

  &.outline {
    --button-brand-outline-border-gradient: linear-gradient(99deg, var(--colour-accent-blue) 19.15%, var(--colour-accent-gray) 75.77%) border-box;

    background:
      linear-gradient(var(--colour-neutral-base), var(--colour-neutral-base)) padding-box,
      var(--button-brand-outline-border-gradient);
    color: var(--colour-ti-base);

    &:hover:enabled {
      background:
        linear-gradient(var(--colour-neutral-raised), var(--colour-neutral-raised)) padding-box,
        var(--button-brand-outline-border-gradient);
    }

    &:active:enabled {
      background:
        linear-gradient(var(--colour-neutral-lower), var(--colour-neutral-lower)) padding-box,
        var(--button-brand-outline-border-gradient);
    }
  }
}

.danger {
  border: 0.0625rem solid transparent;

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
    border: 0.0625rem solid var(--button-destructive-color);
    background: var(--colour-neutral-base);
    color: var(--button-destructive-color);

    &:hover:enabled {
      border: 0.125rem solid var(--button-destructive-color-hover);
      margin: -0.0625rem; /* Compensate for the extra 1px border to prevent layout shift */
      color: var(--button-destructive-color-hover);

      &.small {
        margin: 0 -0.0625rem; /* Compensate for the extra 1px border to prevent layout shift */
      }
    }

    &:active:enabled {
      border: 0.125rem solid var(--button-destructive-color-active);
      margin: -0.0625rem; /* Compensate for the extra 1px border to prevent layout shift */
      color: var(--button-destructive-color-active);
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
    user-select: all;
    font-weight: 400;
    line-height: 1;
  }
  &.small .text {
    padding: 0;
  }

  &:hover {
    box-shadow: none !important;
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
</style>
