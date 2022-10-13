<template>
  <div v-if="dataLoaded" class="container mt-10 px-4">
    <!-- if no data -->
    <div v-if="data.lenght === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">No exercises...</h1>
      <router-link
        :to="{ name: 'Create' }"
        class="
          mt-6
          py-2
          px-6
          rounded-sm
          text-sm text-white
          bg-at-light-green
          duration-200
          border-solid border-2 border-transparent
          hover:border-at-light-green hover:bg-white hover:text-at-light-green
        "
      >
        Create Workout
      </router-link>
    </div>

    <!-- if data -->
    <div
      v-else
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      <router-link
        class="
          flex flex-col
          items-center
          bg-light-grey
          p-8
          shadow-md
          cursor-pointer
        "
        :to="{ name: 'View-Workout' }"
        v-for="(workout, index) in data"
        :key="index"
      >
        <!-- cardio image -->
        <img
          v-if="workout.workoutType === 'cardio'"
          class="h-24 w-auto"
          src="@/assets/images/running-light-green.png"
          alt=""
        />

        <!-- strength training image -->
        <img
          v-else
          class="h-24 w-auto"
          src="@/assets/images/dumbbell-light-green.png"
          alt=""
        />

        <p
          class="
            mt-6
            py-1
            px-3
            text-xs text-white
            bg-at-light-green
            shadow-md
            rounded-lg
          "
        >
          {{ workout.workoutType }}
        </p>

        <h1 class="mt-8 mb-2 text-center text-xl text-at-light-green">
          {{ workout.workoutName }}
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";

export default {
  name: "Home",

  setup() {
    const data = ref([]);
    const dataLoaded = ref(false);

    // Fetch data from supabase
    const getData = async () => {
      try {
        let { data: workouts, error } = await supabase
          .from("workouts")
          .select("*");
        if (error) throw error;
        data.value = workouts;
        dataLoaded.value = true;
        // console.log(data.value);
      } catch (error) {
        console.warn(error.message);
      }
    };
    getData();

    return {
      data,
      dataLoaded,
      getData,
    };
  },
};
</script>
