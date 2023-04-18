<template>
  <div class="home">
    <v-app-bar
      app
      color="blue"
      dark
    >
      <v-spacer></v-spacer>

      <v-btn
        to="/login"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>
