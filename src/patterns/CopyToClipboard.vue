<script setup lang="ts">
import { ref } from 'vue';
import { t } from '@/composable/i18n';
import CopyIcon from '@/icons/CopyIcon.vue';
import LinkButton from '@/elements/LinkButton.vue';

type BaseProps = {
  dataTestid?: string;
  iconOnly?: boolean;
};

type WithDisplayText = BaseProps & {
  displayText?: string;
  copyValue?: string;
};

type IconOnlyProps = BaseProps & {
  displayText?: string;
  iconOnly: true;
  copyValue: string;
};

export type Props = WithDisplayText | IconOnlyProps;

const props = withDefaults(defineProps<Props>(), {
  displayText: t('copyToClipboard.default'),
  dataTestid: 'copy-to-clipboard-button',
});

const myLinkTooltip = ref<string>(t('copyToClipboard.default'));
const myLinkShow = ref<boolean>(false);

const copyLink = async () => {
  if (!navigator.clipboard?.writeText) {
    myLinkTooltip.value = t('copyToClipboard.error');
  } else {
    console.log('copying to clipboard', props.copyValue || props.displayText);
    await navigator.clipboard?.writeText(props.copyValue || props.displayText);
    myLinkTooltip.value = t('copyToClipboard.copied');
  }

  myLinkShow.value = true;

  // Fade out after a bit
  setTimeout(() => {
    myLinkShow.value = false;

    // After the animation fades...
    setTimeout(() => {
      myLinkTooltip.value = t('copyToClipboard.default');
    }, 500);
  }, 4000);
};
</script>

<template>
  <link-button
    :data-testid="dataTestid"
    :class="{ 'iconOnly': iconOnly }"
    @click="copyLink"
    :tooltip="myLinkTooltip"
    :force-tooltip="myLinkShow"
  >
    <template #iconLeft>
      <copy-icon/>
    </template>

    {{ !iconOnly ? displayText : '' }}
  </link-button>
</template>

<style scoped>
.iconOnly {
  gap: 0;
}
</style>