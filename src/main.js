import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

//app.config.errorHandler = () => null;
app.config.warnHandler = () => null;

app.mount("#app");