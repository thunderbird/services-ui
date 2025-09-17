<script setup lang="ts">
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/elements/ToolTip.vue';

// component properties
interface Props {
  type?: 'primary' | 'brand' | 'destructive' | 'link';
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
  variant: 'outline',
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
    <span class="icon" v-if="$slots?.icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
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
  --faded-colour-btn-border: var(--colour-btn-border, var(--colour-neutral-border));

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: var(--border-radius);
  font-family: 'Inter', 'sans-serif';
  font-size: var(--txt-input); /* 14px */
  font-weight: 400;
  padding: 1rem 1.12rem;
  cursor: pointer;

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

  &:disabled {
    background-color: var(--colour-neutral-border);
    border-color: var(--colour-neutral-border);
    color: var(--colour-ti-muted);
    cursor: not-allowed;
  }
}

.primary {
  &.filled {
    background: linear-gradient(180deg, var(--colour-accent-blue) -31.82%, var(--colour-primary-default) 8.74%, var(--colour-primary-hover) 100%);
    border: none;
    color: var(--colour-neutral-base);

    &:hover:enabled {
      background: var(--colour-primary-hover);
    }

    &:active:enabled {
      background: var(--colour-primary-pressed);
    }

    &:disabled {
      background: var(--colour-neutral-border);
    }
  }

  &.outline {
    border: 1px solid transparent;
    background:
      linear-gradient(var(--colour-neutral-base), var(--colour-neutral-base)) padding-box,
      linear-gradient(180deg, var(--colour-primary-default) 31%, var(--colour-primary-hover) 100%) border-box;
    color: var(--colour-primary-hover);

    &:hover:enabled {
      border: 2px solid var(--colour-primary-hover);
      border-image: none;
      margin: -1px; /* Compensate for the extra 1px border to prevent layout shift */
    }

    &:active:enabled {
      background: color-mix(in srgb, var(--colour-accent-blue), transparent 90%);
    }

    &:disabled {
      /* TODO: Border colour is not a variable, roughly translates to #ADACB3 */
      border: 1px solid rgba(119, 117, 128, 0.50);
      background: var(--colour-neutral-border);
    }
  }
}

.brand {
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;
  border: 1px solid transparent;

  &.filled {
    background:
      linear-gradient(329deg, var(--colour-primary-default) -21.06%, var(--colour-accent-blue) 64%) padding-box,
      /* TODO: This gradient doesn't seem correct and colours are not variables */
      linear-gradient(#A0E1FF, #2B8CDC) border-box;
    color: var(--colour-ti-base);

    &:hover:enabled {
      background:
        linear-gradient(var(--colour-primary-hover), var(--colour-primary-hover)) padding-box,
        /* TODO: This gradient doesn't seem correct and colours are not variables */
        linear-gradient(#A0E1FF, #2B8CDC) border-box;
      color: var(--colour-neutral-base);
    }

    &:active:enabled {
      background:
        linear-gradient(var(--colour-primary-pressed), var(--colour-primary-pressed)) padding-box,
        /* TODO: This gradient doesn't seem correct and colours are not variables */
        linear-gradient(#A0E1FF, #2B8CDC) border-box;
      color: var(--colour-neutral-base);
    }
  }

  &.outline {
    background:
      /* TODO: This is light/gray/gray-50 (?) in Figma */
      linear-gradient(#FFF, #FFF) padding-box,
      linear-gradient(99deg, var(--colour-accent-blue) 19.15%, var(--colour-accent-gray) 75.77%) border-box;

    &:hover:enabled {
      background:
        linear-gradient(var(--colour-neutral-base), var(--colour-neutral-base)) padding-box,
        linear-gradient(99deg, var(--colour-accent-blue) 19.15%, var(--colour-accent-gray) 75.77%) border-box;
    }
  }
}

.destructive {
  &.filled {
    background-color: var(--colour-danger-default);
    color: var(--colour-neutral-base);

    &:hover:enabled {
      background-color: var(--colour-danger-hover);
    }

    &:active:enabled {
      background-color: var(--colour-danger-pressed);
    }
  }

  &.outline {
    border: 1px solid var(--colour-danger-default);
    background: var(--colour-neutral-base);
    color: var(--colour-danger-default);

    &:hover:enabled {
      border: 2px solid var(--colour-danger-hover);
      margin: -1px; /* Compensate for the extra 1px border to prevent layout shift */
      color: var(--colour-danger-hover);
    }

    &:active:enabled {
      border: 2px solid var(--colour-danger-pressed);
      background-color: var(--colour-danger-soft);
      margin: -1px; /* Compensate for the extra 1px border to prevent layout shift */
      color: var(--colour-danger-pressed);
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

  .text {
    font-size: 0.875rem;
  }

  &button {
    min-width: initial;
    height: 2rem;
  }
}
</style>
