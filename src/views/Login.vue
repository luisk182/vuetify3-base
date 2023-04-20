<template>
  <v-container class="fill-height bg-grey-lighten-4" fluid>
    <v-row algin="center" justify="center">
        <div class="login-logo">
        </div>
        <LoginForm />
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import LoginForm from "../components/LoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
  setup(){
    onMounted(() => {
      // pending initialization
    });

  },
});

</script>
<style style="scss">
.v-progress-linear {
  margin:0 !important;
}
</style>
