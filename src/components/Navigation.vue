<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <router-link class="flex items-center gap-x-4 cursor-pointer" :to="{ name: 'Home' }">
        <img class="w-14" src="../assets/images/dumbbell-light.png" alt="" />
        <h1 class="text-lg">Active Tracker</h1>
      </router-link>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link v-if="user" class="cursor-pointer" :to="{ name: 'Create' }"> Create </router-link>
        <router-link v-if="!user" class="cursor-pointer" :to="{ name: 'Login' }"> Login </router-link>
        <li v-if="user">
          user: <span class="font-bold">{{ user.email }}</span>
        </li>
        <li v-if="user" class="cursor-pointer" @click="logout">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { supabase } from '../supabase/init';
import { useRouter } from 'vue-router';
// import store from "../store/index";
import { useUserStore } from '../PiniaStore/UserStore';

export default {
  name: 'Navigation',

  setup() {
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    const router = useRouter();

    // logout function
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: 'Home' }); // redirect to home page
    };

    return {
      user,
      logout,
    };
  },
};
</script>