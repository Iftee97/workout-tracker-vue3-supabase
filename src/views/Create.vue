<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">
    <!-- Status Message -->
    <div
      v-if="statusMsg || errorMsg"
      class="mb-10 p-4 bg-light-grey rounded-md shadow-lg"
    >
      <p class="text-at-light-green">{{ statusMsg }}</p>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!-- Create Workout Form -->
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
      <form class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-at-light-green">Record Workout</h1>

        <!-- workout name -->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-at-light-green">
            Workout Name
          </label>
          <input
            type="text"
            class="p-2 text-gray-500 focus:outline-none"
            id="workout-name"
            v-model="workoutName"
            required
          />
        </div>

        <!-- workout type -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-at-light-green">
            Workout Type
          </label>
          <select
            id="workout-type"
            class="p-2 text-gray-500 focus:outline-none"
            @change="workoutChange"
            v-model="workoutType"
            required
          >
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>
      </form>
    </div>
  </div>
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
