import Vue from 'vue'
import App from './App'
import './mock'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  VueResource  from 'vue-resource'
import url from 'url';
import settle from 'axios/lib/core/settle';
import buildURL from 'axios/lib/helpers/buildURL';
import buildFullPath from 'axios/lib/core/buildFullPath';
import createError from 'axios/lib/core/createError';

Vue.config.productionTip = false
Vue.prototype.$api='http://47.92.165.44:8888'
// Vue.use(VueResource)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()