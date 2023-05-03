<template>
<div>
  <drawer> </drawer>
  <router-view/>
</div>
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";
import drawer from '@/components/MainDrawer.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    drawer
  },
  setup(){

    const created = () => {

    }
    return {
      created,
    }
  }
})

</script>
