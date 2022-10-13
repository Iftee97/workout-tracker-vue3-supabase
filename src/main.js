import { createApp } from "vue"
import { createPinia } from 'pinia'
import App from "./App.vue"
import router from "./router"
import "./assets/tailwind.css"

createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app")

// start: npm run serve

// this project will need some serious refactoring
// - upgrade to supabase v2