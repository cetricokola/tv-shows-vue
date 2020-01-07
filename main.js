import './src/public/sass/style.sass';
import Vue from 'vue'
import Main from './src/app.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
new Vue({
    render: (createEl) => createEl(Main)
}).$mount('#app')
