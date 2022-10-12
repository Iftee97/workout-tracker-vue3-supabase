<template>
  <div class="max-w-screen-md mx-auto px-4 py-10"></div>
</template>

<script>
import { ref } from "vue";
// import { supabase } from "../supabase/init";

export default {
  name: "create",

  setup() {
    const workoutName = ref("");
    const workoutType = ref("select-workout");
    const exercises = ref([]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);

    return {
      workoutName,
      workoutType,
      exercises,
      statusMsg,
      errorMsg,
    };
  },
};
</script>
