<script setup lang="ts">
import { ref } from 'vue';
import { t } from '@/composable/i18n';

const model = defineModel<string>();
const isInvalid = ref(false);
const isDirty = ref(false);
const textareaRef = ref<HTMLTextAreaElement>(null);
/**
 * Forwards focus intent to the text input element.
 * Unlike HTMLElement.focus() this does not take any parameters.
 */
const focus = () => {
  if (!textareaRef.value) {
    return;
  }
  textareaRef.value.focus();
};

// component properties
interface Props {
  name: string;
  help?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  smallText?: boolean;
  maxLength?: number | string;
  rows?: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  help: null,
  placeholder: null,
  prefix: null,
  required: false,
  disabled: false,
  smallText: false,
  maxLength: null,
});
defineExpose({ focus });

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
      <slot />
      <span v-if="required && model?.length === 0" class="required">*</span>
    </span>
    <span class="tbpro-textarea" :class="{ 'small-text': props.smallText }">
      <textarea
        class="tbpro-textarea-element"
        v-model="model"
        :class="{ dirty: isDirty }"
        :id="name"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :required="required"
        :maxLength="maxLength"
        :rows="rows"
        @invalid="onInvalid"
        @change="onChange"
        ref="textareaRef"
      />
    </span>
    <span v-if="isInvalid" class="help-label invalid">
      <!-- Placeholder -->
      Invalid input
      {{ t('textArea.invalidInput') }}
    </span>
    <span v-else-if="help" class="help-label">
      {{ help }}
    </span>
    <span v-else class="help-label">
      <!-- Empty space -->
    </span>
  </label>
</template>

<style scoped>
@import '@/assets/styles/mixins.pcss';

.wrapper {
  display: flex;
  flex-direction: column;
  color: var(--colour-ti-base);
  font-family: 'Inter', 'sans-serif';
  font-size: var(--txt-input);
  line-height: var(--line-height-input);
  font-weight: 400;
}

.label {
  width: 100%;
  font-weight: 600;
  padding: 0.1875rem;
}

.help-label {
  display: flex;
  color: var(--colour-ti-base);

  width: 100%;
  min-height: 0.9375rem;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  padding: 0.1875rem;

  &.invalid {
    color: var(--colour-danger-default);
  }
}

.required {
  color: var(--colour-ti-critical);
}

.tbpro-textarea {
  display: inline-block;
  position: relative;
  width: 100%;

  .tbpro-textarea-element {
    --colour-btn-border: var(--colour-neutral-border);
    width: 100%;
    min-height: 5rem; /* Provide a sensible default minimum height */
    resize: vertical; /* Allow vertical resizing */
    transition-property: none;
    font-size: var(--txt-input);
    padding: 0.75rem;
    box-sizing: border-box;

    color: var(--txt-colour);
    background-color: var(--colour-neutral-base);
    border-radius: var(--border-radius);
    @mixin faded-border var(--colour-btn-border);

    &:hover:enabled {
      --colour-btn-border: var(--colour-neutral-border-intense);
    }

    &:active:enabled {
      --colour-btn-border: var(--colour-neutral-border-intense);
    }

    &:focus:enabled {
      --colour-btn-border: var(--colour-service-primary);
      outline: 0.125rem solid var(--colour-btn-border);
      /* Un-fade the border */
      border: 0.0625rem solid var(--colour-btn-border) !important;
      border-radius: 0.125rem;
    }

    &.dirty:invalid {
      --colour-btn-border: var(--colour-ti-critical);
    }

    &:disabled {
      filter: grayscale(50%);
      cursor: not-allowed;
    }

    &::placeholder {
      color: var(--colour-ti-muted);
    }
  }
}

.dark {
  .tbpro-textarea {
    background-color: var(--colour-neutral-lower);
  }
}
</style>
