<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader :title="'Memo Stats'" :to-link="'/'" />

      <!-- <div class="container px-0 md:px-6 text-left">
        <div class="px-2 pt-4 mb-4">
          <ActivityFeedSearchBox />
        </div>
      </div> -->
    </template>

    <template #content>
      <div class="container px-0 md:px-6 text-left">
        <div class="px-4 pt-4">
          <div class="mb-8" v-for="memoItem in get_memos" :key="memoItem.id">
            <router-link
              class="cursor-pointer block bg-background text-black hover:text-secondary"
              :to="{ name: 'ActivityFeedMemoItem', params: { id: memoItem.id } }"
            >
              <MemoListItem :model="memoItem" />
            </router-link>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <NavigationBottom />
    </template>
  </LayoutFixedScrollable>
</template>

<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
// import ActivityFeedSearchBox from '@/components/ActivityFeedSearchBox.vue';
import MemoListItem from '@/components/MemoListItem.vue';
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable.vue';
import { mapGetters, mapActions } from 'vuex';
import NavigationBottom from '@/components/BaseNavigationBottom';

export default {
  name: 'ActivityFeedMemoList',
  // ActivityFeedSearchBox
  components: { MemoListItem, BaseAppBarHeader, LayoutFixedScrollable, NavigationBottom },
  computed: {
    ...mapGetters('memo', ['get_memos'])
  },
  methods: {
    ...mapActions('memo', ['fetch_memos'])
  },
  mounted() {
    this.fetch_memos();
  }
};
</script>
