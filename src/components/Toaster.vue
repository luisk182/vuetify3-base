<template>
  <v-snackbar v-model="modelValue">
    {{ message }}
  <template v-slot:actions>
    <v-btn
      color="pink"
      text
      @click="closeSnackBar"
    >
      Cerrar
    </v-btn>
  </template>
  </v-snackbar>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";

  export default defineComponent({
    name: 'Toaster',
    emits: ['update:modelValue'],
    props:{
      message: {
        type: String,
        default: "This is an alert message",
      },
      variant: {
        type: String,
        default: "default"
      },
      alertType: {
        type: String,
        default: "text",
      },
      show: {
        type: Boolean,
      },
      modelValue: Boolean,
    },
    setup(props, context){
      onMounted(()=>{
        console.log(props)
      })
      const closeSnackBar = () => {
        context.emit("update:modelValue", false)
      }

      return{ 
        closeSnackBar,
      }
    }
  });

</script>
