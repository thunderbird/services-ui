<script setup lang="ts">
import { computed } from 'vue';
import { t } from '@/composable/i18n';

interface PropTypes {
  username: string,
  avatarUrl?: string,
}

const props = defineProps<PropTypes>()

const usernameInitial = computed(() => {
  return props.username?.charAt(0)[0]?.toUpperCase() ?? '?';
})
</script>

<template>
  <aside class="avatar">
    <img class="img" :src="avatarUrl" v-if="avatarUrl" :alt="t('userAvatar.altText', {'username': username})"/>
    <span class="initials" :title="username" v-else>{{ usernameInitial }}</span>
  </aside>
</template>

<style scoped>
.avatar {
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px var(--colour-user-blue);
  border-radius: 100%;
  background-color: rgba(10, 132, 255, 0.15);

  .img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .initials {
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    color: var(--colour-ti-base-light);
  }
}
</style>
