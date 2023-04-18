<template>
  <v-content>
    <v-snackbar
      v-model="showErr"
    >
      {{ errorMSg }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="showErr = false, errorMSg = ''"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
            v-model="valid"
            lazy-validation
            >
            <v-text-field
                solo
                label="Email"
                v-model="email"
                prepend-inner-icon="mdi-email"
                :rules="emailVal"
            ></v-text-field>

            <v-text-field
                solo
                label="Contraseña"
                v-model="password"
                prepend-inner-icon="mdi-lock"
                :rules="passVal"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="blue" @click="validate()" :disabled="loading" dark>Iniciar sesón</v-btn>
        </v-card-actions>
        <div>
          <v-btn text block :disabled="loading" @click="$emit('change-login')">¿Olvidaste tu contraseña?</v-btn>
        </div>
        <hr>
      </v-card>
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template>
        <v-card>
          <v-card-title>
            <div style="margin: auto;" class="headline">{{msg}}</div>
          </v-card-title>
          <v-card-text>
            <div v-html="link1"></div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-content>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";

  export default defineComponent({
    name: 'LoginForm',
    setup(){
      onMounted(() => {
        console.log("woomy");
      });
    }
  });

</script>
