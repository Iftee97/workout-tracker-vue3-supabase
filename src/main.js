import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/tailwind.css"

createApp(App).use(router).mount("#app")

// this project will need some serious refactoring
// - upgrade to use pinia for global state instead of reactive store state 
// - upgrade to supabase v2