import { boot } from 'quasar/wrappers';
import axios from 'axios'

//Initialization
const params = {
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'x-access-token': window.localStorage.getItem('ywc15Token') || ''
    }
}

const axiosInstance = axios.create(params);
const test = 'Hallo';

// Type declaration
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
        $axiosInstance: typeof axiosInstance;
        $test: typeof test;
  }
}

export default boot(({ app }) => {
  //Set global variables
  app.config.globalProperties.$axiosInstance = axiosInstance
  app.config.globalProperties.$test = test
});

export { axiosInstance, test };