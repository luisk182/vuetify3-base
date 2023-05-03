<template>
    <Toaster v-model="showMsg" :message="`some error message`" />
    <v-progress-linear :indeterminate="true" color="primary" v-show="loading"></v-progress-linear>
      <form @submit.prevent="onSubmit">
        <v-card class="elevation-3 pa-6" min-width="400">
          <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="75"
        />
        <v-spacer></v-spacer>

          <v-card-text>
  
              <v-text-field
                  solo
                  label="Email"
                  v-model="email"
                  prepend-inner-icon="mdi-email"
                  :error-messages="errors.email"
                  name="email"
              ></v-text-field>

              <v-text-field
                  solo
                  label="Password"
                  v-model="password"
                  prepend-inner-icon="mdi-lock"
                  :error-messages="errors.password"
                  name="password"
              ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn type="submit" block color="blue" dark :disabled="!meta.valid">Iniciar sesón</v-btn>
          </v-card-actions>

        <div>
          <v-btn text block :disabled="loading" @click="$emit('change-login')">¿Olvidaste tu contraseña?</v-btn>
        </div>
        <hr>
      </v-card>
    </form>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import Toaster from "@/components/Toaster.vue";
  import * as yup from "yup";
  import { useForm, useField } from "vee-validate";

  export default defineComponent({
    name: 'LoginForm',
    components: {
      Toaster,
    },
    setup(){
      const showMsg = ref(false);
      const loading = ref(false);

      const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(6),
      })


      const { errors, meta, handleSubmit } = useForm({
        validationSchema: schema,
      });

      const { value: email } = useField("email");
      const { value: password } = useField("password");

      const onSubmit = handleSubmit((values) => {
        console.log(values);
      });

      const rand = () => {
        console.log("random")
      }

      onMounted(() => {
        // Pending validation
      });

      return {
        email,
        password,
        showMsg,
        loading,
        onSubmit,
        rand,
        errors,
        meta,
      }
    }
  });

</script>
