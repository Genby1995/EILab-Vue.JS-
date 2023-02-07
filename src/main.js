import { createApp } from 'vue';
import App from './App.vue';
import components from "@/components/UI/index";
import router from './router';

const app = createApp(App)

console.log(components);

components.forEach(item => {
    app.component(item.name, item)
})

app
    .use(router)
    .mount('#app')
