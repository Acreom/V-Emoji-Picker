import Vue from "vue";
import AppTest from "./AppTestUi.vue";

Vue.config.productionTip = false;

import VirtualCollection from 'vue-virtual-collection';
Vue.use(VirtualCollection);

new Vue({
  render: h => h(AppTest)
}).$mount("#app");
