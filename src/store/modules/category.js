// @ts-ignore
import { PageService } from '@whynotearth/meredith-axios';
import Vue from 'vue';
import { companySlug } from '@/constants/app';

export default {
  namespaced: true,
  state: {
    items: {}
  },
  mutations: {
    update(state, payload) {
      Vue.set(state.items, payload.key, payload.data);
    }
  },
  actions: {
    async getItemsByName(context, name) {
      try {
        const data = await PageService.byName({ companySlug, categoryName: name });
        context.commit('update', { key: name, data });
      } catch (error) {
        return new Error('get category issue');
      }
    }
  },
  getters: {
    getItemsByName: state => name => {
      return state.items[name] || [];
    }
  }
};
