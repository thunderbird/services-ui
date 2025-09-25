<script setup lang="ts">
import { ref } from 'vue';
import { t } from '@/composable/i18n';
import CopyIcon from '@/icons/CopyIcon.vue';
import LinkButton from '@/elements/LinkButton.vue';

interface Props {
  displayText: string;
  copyValue?: string;
  dataTestid?: string;
}
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
    class="my-link-btn"
    @click="copyLink"
    :tooltip="myLinkTooltip"
    :force-tooltip="myLinkShow"
  >
    <template #iconLeft>
      <copy-icon/>
    </template>

    {{ displayText }}
  </link-button>
</template>