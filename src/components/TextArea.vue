<script setup lang="ts">
/**
 * @deprecated The default slot is deprecated and will be removed in future releases
 */
import { computed, ref, useAttrs } from 'vue';
import { t } from '@/composable/i18n';
import ErrorIcon from '@/foundation/ErrorIcon.vue';
import { useTextareaAutosize } from '@vueuse/core';

const isInvalid = ref(false);
const isDirty = ref(false);
const model = defineModel<string>();
const { textarea } = useTextareaAutosize({
  input: model,
  styleProp: 'minHeight', // Provides support for the rows attribute
});

const charCount = computed(() => model.value?.length ?? 0);
const attrs = useAttrs();
const isRequired = Object.hasOwn(attrs, 'required');

/**
 * Forwards focus intent to the text input element.
 * Unlike HTMLElement.focus() this does not take any parameters.
 */
const focus = () => {
  if (!textarea.value) {
    return;
  }
  textarea.value.focus();
};

/**
 * Resets the component's internal validation state and clears the input value.
 * This should be explicitly called when the parent form is reset.
 */
const reset = () => {
  model.value = '';
  isInvalid.value = false;
  isDirty.value = false;
};

// component properties
interface Props {
  name: string;
  label?: string;
  help?: string;
  smallText?: boolean;
  maxLength?: number | string;
  dataTestid?: string;
}
const props = withDefaults(defineProps<Props>(), {
  label: null,
  help: null,
  prefix: null,
  smallText: false,
  maxLength: null,
  dataTestid: 'text-area',
});

defineExpose({ focus, reset });

const onInvalid = () => {
  isInvalid.value = true;
  isDirty.value = true;
};
/**
 * On any change we mark the element as dirty
 * this is so we can delay :invalid until
 * the user does something worth invalidating
 */
const onChange = () => {
  isDirty.value = true;
};
</script>

<template>
  <label class="wrapper" :for="name">
    <span class="label">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
      <span v-if="isRequired && !model?.length" class="required">*</span>
    </span>
    <span class="tbpro-textarea" :class="{ 'small-text': props.smallText }">
      <textarea
        class="tbpro-textarea-element"
        ref="textarea"
        v-bind="attrs"
        v-model="model"
        :class="{ dirty: isDirty }"
        :id="name"
        :name="name"
        :maxLength="maxLength"
        :data-testid="dataTestid"
        @invalid="onInvalid"
        @change="onChange"
      />
      <span v-if="maxLength !== null" class="character-count"> {{ charCount }}/{{ maxLength }} </span>
    </span>
    <span v-if="isInvalid" class="help-label invalid">
      <error-icon />
      {{ t('textArea.invalidInput') }}
    </span>
    <span v-else-if="help" class="help-label">
      {{ help }}
    </span>
  </label>
</template>

<style scoped>
@import '@/assets/styles/mixins.pcss';

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--colour-ti-secondary);
  font-family: var(--font-sans);
  font-size: var(--txt-input);
  line-height: var(--line-height-input);
  font-weight: 400;
}

.label {
  width: 100%;
  font-weight: 600;
}

.help-label {
  display: flex;
  align-items: center;
  color: var(--colour-ti-muted);

  width: 100%;
  min-height: 0.9375rem;
  font-size: 0.625rem;
  line-height: 0.9375rem;

  &.invalid {
    gap: 0.25rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: 0.75rem;
    background-color: var(--colour-danger-soft);
    color: var(--colour-danger-default);
  }
}

.required {
  color: var(--colour-ti-critical);
  padding-inline-start: 0.25rem;
}

.tbpro-textarea {
  display: inline-block;
  position: relative;
  width: 100%;

  .tbpro-textarea-element {
    width: 100%;
    min-height: 5rem; /* Provide a sensible default minimum height */
    resize: vertical; /* Allow vertical resizing */
    transition-property: none;
    font-family: var(--font-sans);
    font-size: var(--txt-input);
    line-height: 1.5;
    padding: 1rem 0.75rem;
    box-sizing: border-box;
    overflow: auto;
    resize: none;
    scrollbar-width: none;

    color: var(--txt-colour);
    background-color: var(--colour-neutral-base);
    border-radius: var(--border-radius);
    border: 0.0625rem solid var(--colour-neutral-border);

    &:hover:enabled {
      border-color: var(--colour-neutral-border-intense);
    }

    &:active:enabled,
    &:focus:enabled {
      border-color: var(--colour-primary-default);
    }

    &:focus:enabled {
      outline: 0.0625rem solid var(--colour-primary-default);
    }

    &.dirty:invalid {
      border-color: var(--colour-ti-critical);
    }

    &:disabled {
      filter: grayscale(50%);
      cursor: not-allowed;
    }

    &::placeholder {
      color: var(--colour-ti-muted);
    }
  }

  &:has(.character-count) {
    .tbpro-textarea-element {
      /* Compensate for the character-count */
      padding: 1rem 1rem 2rem 0.75rem;
      scroll-padding-block-end: 2rem;
    }
  }

  .character-count {
    position: absolute;
    bottom: 1rem;
    right: 0.75rem;
    pointer-events: none;
    font-weight: 600;
  }
}

.dark {
  .tbpro-textarea {
    background-color: var(--colour-neutral-lower);
  }
}
</style>
