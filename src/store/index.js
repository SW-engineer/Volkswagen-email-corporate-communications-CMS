import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import category from './modules/category';
import loading from './modules/loading';
import snackbar from './modules/snackbar';
import post from './modules/post';
import memo from './modules/memo';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['memo'],
  key: 'store'
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  modules: {
    snackbar,
    loading,
    auth,
    category,
    post,
    memo
  }
});
