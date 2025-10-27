<script setup lang="ts">
import { t } from '@/composable/i18n';
import VisualDivider from '@/components/VisualDivider.vue';

interface Props {
  contributeToThisSiteUrl: string
}

const props = defineProps<Props>();

interface NavItem {
  i18nKey: string;
  urlKey: string;
}

const mozillaNavItems: NavItem[] = [
  {
    i18nKey: 'sendDMCANotice',
    urlKey: 'dmcaNotice'
  },
  {
    i18nKey: 'reportFraud',
    urlKey: 'reportFraud'
  },
  {
    i18nKey: 'participationGuidelines',
    urlKey: 'participationGuidelines'
  },
];

const urlMap = {
  cookies: 'https://www.mozilla.org/privacy/websites/#data-tools',
  dmcaNotice: 'https://www.mozilla.org/en-US/about/legal/report-infringement/',
  reportFraud: 'https://www.mozilla.org/about/legal/fraud-report/',
  participationGuidelines: 'https://www.mozilla.org/en-US/about/governance/policies/participation/',
  mzlaLink: 'https://blog.thunderbird.net/2020/01/thunderbirds-new-home/',
  creativeCommonsLink: 'https://www.mozilla.org/en-US/foundation/licensing/website-content/',
} as const;

const getUrl = (key: keyof typeof urlMap): string => urlMap[key];
</script>

<template>
  <footer>
    <slot />

    <VisualDivider />

    <div class="mozilla-navigation">
      <img src="@/assets/svg/mozilla-logo.svg" alt="Mozilla Logo" />
      <div class="mozilla-navigation-content">
        <ul>
          <!-- This needs to be a slot instead of a prop so that it can be a Vue Router Link component -->
          <slot name="privacyPolicy" />

          <li>
            <a :href="getUrl('cookies')" target="_blank">{{ t(`footer.cookies`) }}</a>
          </li>

          <!-- This needs to be a slot instead of a prop so that it can be a Vue Router Link component -->
          <slot name="legal" />

          <li v-for="navItem in mozillaNavItems" :key="navItem.i18nKey">
            <a
              :href="getUrl((navItem).urlKey as keyof typeof urlMap)"
              target="_blank"
            >
              {{ t(`footer.${navItem.i18nKey}`) }}
            </a>
          </li>
        </ul>

        <p>
          <i18n-t keypath="footer.copywrite">
            <template v-slot:mzlaLink>
              <a :href="getUrl('mzlaLink')">
                {{ $t('footer.mzlaLinkText') }}
              </a>
            </template>
            <template v-slot:currentYear>
              {{ new Date().getFullYear() }}
            </template>
            <template v-slot:creativeCommonsLink>
              <a :href="getUrl('creativeCommonsLink')">
                {{ $t('footer.creativeCommonsLinkText') }}
              </a>
            </template>
          </i18n-t>
        </p>

        <a class="underline" :href="props.contributeToThisSiteUrl" target="_blank">
          {{ t('footer.contributeToThisSite' )}}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import '@/assets/styles/custom-media.pcss';

footer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1rem;
  background-image: linear-gradient(138deg, #1b2128 34%, #171b24 55%);

  /* FIXME: This should be --colour-ti-base but we don't have a background
     for the footer in light mode yet so it is not readable if we use the var */
  color: #eeeef0;

  :deep(a) {
    color: #eeeef0;
    text-decoration: none;
  }

  .underline, :deep(a:hover) {
    text-decoration: underline;
  }

  .mozilla-navigation {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    font-family: Inter;
    font-size: 0.75rem;

    img {
      height: 36px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mozilla-navigation-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      ul {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-flow: row;
        column-gap: 2.25rem;
      }
    }
  }
}

@media (--md) {
  footer {
    gap: 2.5rem;
    padding: 3rem 1rem 5rem;

    .mozilla-navigation {
      flex-direction: row;
      gap: 6rem;

      .mozilla-navigation-content {
        ul {
          display: flex;
          flex-direction: row;
          gap: 2.25rem;
        }
      }
    }
  }
}

@media (--lg) {
  footer {
    padding: 3rem 3.5rem 5rem;
  }
}
</style>
