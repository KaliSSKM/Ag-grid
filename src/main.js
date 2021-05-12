import Vue from 'vue'
import App from './App.vue'

import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import "../node_modules/@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css";
import "../node_modules/@ag-grid-enterprise/all-modules/dist/styles/ag-theme-alpine.css";

import { AllModules } from "@ag-grid-enterprise/all-modules";
import { LicenseManager } from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("License Key");

Vue.component(AgGridVue)
Vue.component(AllModules)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
