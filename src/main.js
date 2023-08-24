import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')
const app = createApp(App);

//app.config.errorHandler = () => null;
app.config.warnHandler = () => null;

app.mount("#app");