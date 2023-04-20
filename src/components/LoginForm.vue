<template>
    <Toaster v-model="showMsg" :message="`some error message`" />
    <v-progress-linear :indeterminate="true" color="primary" v-show="loading"></v-progress-linear>
        <v-card class="elevation-3 pa-6" min-width="400">
          <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="75"
        />
        <v-spacer></v-spacer>
        <v-card-text>
          <v-form
            ref="form"
            >
            <v-text-field
                solo
                label="Email"
                v-model="loginFormValues.email"
                prepend-inner-icon="mdi-email"
            ></v-text-field>

            <v-text-field
                solo
                label="Contraseña"
                v-model="loginFormValues.password"
                prepend-inner-icon="mdi-lock"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="blue" @click="validate" :disabled="loading" dark>Iniciar sesón</v-btn>
        </v-card-actions>
        <div>
          <v-btn text block :disabled="loading" @click="$emit('change-login')">¿Olvidaste tu contraseña?</v-btn>
        </div>
        <hr>
      </v-card>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import Toaster from "@/components/Toaster.vue";

  export default defineComponent({
    name: 'LoginForm',
    components: {
      Toaster,
    },
    setup(){
      const showMsg = ref(false);
      const loading = ref(false);
      const loginFormValues = ref({
        email: '',
        password: '',
      })
      onMounted(() => {
        setTimeout(() => {
          showMsg.value = true;
      }, 1000);
      });

      const validate = () => {
        console.log("some")
      }

      return {
        validate,
        showMsg,
        loading,
        loginFormValues,
      }
    }
  });

</script>
