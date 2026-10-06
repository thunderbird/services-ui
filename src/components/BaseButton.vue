<script setup lang="ts">
// component properties
interface Props {
  variant?: 'primary' | 'brand' | 'danger' | 'link';
  size?: 'default' | 'small';
  outline?: boolean;
  /**
   * Transform the button into an anchor tag. If null then the component will be rendered as a button tag.
   */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  dataTestid?: string;
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'default',
  outline: false,
  type: 'button',
  dataTestid: 'button',
  disabled: false,
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="base"
    :class="[variant, { small: size === 'small', outline, filled: !outline }]"
    :type="!href ? type : undefined"
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

a {
  text-decoration: none;
}

.base {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  height: 2.875rem;

  border: 0;
  border-radius: var(--border-radius);
  font-family: 'Inter', sans-serif;
  font-size: var(--txt-input); /* 14px */
  font-weight: 400;
  line-height: 1;
  padding: 0 1rem;
  cursor: pointer;
  user-select: none;

  position: relative;
  transition:
    background-color var(--transition-duration) var(--transition-timing-function),
    background-image var(--transition-duration) var(--transition-timing-function),
    border var(--transition-duration) var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function),
    box-shadow var(--transition-duration) var(--transition-timing-function);

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
      background: var(--colour-surface-deep);
      color: var(--colour-ti-disabled);
      cursor: not-allowed;
      box-shadow: none;
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
      --button-outline-border: var(--colour-surface-border);
      background: var(--colour-neutral-base);
      color: var(--colour-ti-disabled);
      cursor: not-allowed;
    }
  }
}

.primary {
  &.filled {
    background: linear-gradient(
        180deg,
        var(--colour-accent-blue) -15.91%,
        var(--colour-primary-default) 20.02%,
        var(--colour-primary-hover) 100%
      )
      border-box;
    color: var(--colour-neutral-base);
    box-shadow: var(--shadow-elevation-2);

    &:hover:not(:disabled),
    &:focus:not(:disabled):not(:active) {
      background: linear-gradient(
        180deg,
        var(--colour-primary-hover) 0%,
        var(--colour-primary-hover) 100%
      );
      box-shadow: var(--shadow-elevation-1);
    }

    &:active:not(:disabled) {
      background: linear-gradient(
        180deg,
        var(--colour-primary-pressed) 0%,
        var(--colour-primary-pressed) 100%
      );
    }
  }

  &.outline {
    --button-outline-border: linear-gradient(
      to bottom,
      var(--colour-accent-blue) -127%,
      var(--colour-ti-highlight) 87%,
      var(--colour-primary-hover) 7%
    ) border-box;

    position: relative;
    background: transparent;
    color: var(--colour-ti-highlight);

    &:hover:not(:disabled) {
      --button-outline-border: var(--colour-primary-hover);
      &::before {
        padding: 0.125rem; /* Controls border-width */
      }
    }

    &:active:not(:disabled) {
      --button-outline-border: var(--colour-primary-pressed);
      background-color: color-mix(in srgb, var(--colour-accent-blue), transparent 90%);
      color: var(--colour-ti-brand);
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
    --button-outline-border: linear-gradient(
      to bottom right,
      #7bc6f4 10%,
      #2b8cdc 60%
    ) border-box;

    background: linear-gradient(
      329deg,
      var(--colour-primary-default) -21.06%,
      var(--colour-accent-blue) 64%
    );
    color: var(--colour-ti-base-light);
    position: relative;

    &:hover:not(:disabled),
    &:focus:not(:disabled):not(:active) {
      --button-outline-border: linear-gradient(
        to bottom right,
        #A0E1FF 10%,
        #2b8cdc 60%
      ) border-box;
      background: linear-gradient(
        var(--colour-primary-hover),
        var(--colour-primary-hover)
      );
      color: var(--colour-neutral-base);
    }

    &:active:not(:disabled) {
      --button-outline-border: linear-gradient(
        to bottom right,
        #A0E1FF 10%,
        #2b8cdc 60%
      ) border-box;
      background: linear-gradient(
        var(--colour-primary-pressed),
        var(--colour-primary-pressed)
      );
      color: var(--colour-neutral-base);
    }
  }

  &.outline {
    --button-outline-border: linear-gradient(
      99deg,
      var(--colour-accent-blue) 19.15%,
      var(--colour-accent-gray) 75.77%
    ) border-box;

    position: relative;
    background: transparent;
    color: var(--colour-ti-base);

    &:hover:not(:disabled),
    &:focus:not(:disabled):not(:active) {
      background: var(--colour-surface-base);
      color: var(--colour-ti-base-light);
    }

    &:active:not(:disabled) {
      background: var(--colour-surface-lower);
      color: var(--colour-ti-base-light);
    }
  }
}

.danger {
  &.filled {
    background-color: var(--button-destructive-color);
    color: var(--colour-neutral-base);

    &:hover:not(:disabled) {
      background-color: var(--button-destructive-color-hover);
    }

    &:active:not(:disabled) {
      background-color: var(--button-destructive-color-active);
    }
  }

  &.outline {
    --button-outline-border: var(--button-destructive-color);

    position: relative;
    background: transparent;
    color: var(--button-destructive-color);

    &:hover:not(:disabled) {
      --button-outline-border: var(--button-destructive-color-hover);

      color: var(--button-destructive-color-hover);

      &::before {
        padding: 0.125rem; /* Controls border-width */
      }
    }

    &:active:not(:disabled) {
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
  /* color-mix darkens the text just enough to meet 4.5:1 contrast */
  color: color-mix(in srgb, var(--colour-primary-default) 92%, black);
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
    color: var(--colour-ti-disabled);
    cursor: not-allowed;
  }

  &.outline:disabled {
    --button-outline-border: transparent;
  }
}

.small {
  height: 1.75rem;
  padding: 0 0.75rem;

  &.brand .text {
    font-size: 0.6875rem;
  }

  .text {
    font-size: 0.875rem;
  }

  & button {
    min-width: initial;
    height: 2rem;
  }
}
</style>
