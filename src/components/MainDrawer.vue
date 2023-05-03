<template>
 <nav>
    <v-app-bar color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item 
            title="Perfil" 
            @click="logOut"
            prepend-icon="mdi-account">
          </v-list-item>
          <v-list-item 
          @click="logOut" 
          title="Cerrar sesión"
          prepend-icon="mdi-logout"
          ></v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app>
      <v-list-item title="Menu"></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact">
        <v-list-item :value="item.to"
        :title="item.title"
        :prepend-icon="item.icon"
        v-for="item in menuItems"
        :key="item.title"
        @click="changeRoute(item.value)">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({ 
  name: 'MainDrawer',
  setup(){
    const router = useRouter();
    const route = useRoute();
    const drawer = ref(false);
    const menuItems = ref([
       {
          title: 'Inicio',
          icon: 'mdi-view-dashboard',
          to: '/dashboard',
          value: 'main'
        },
        {
          title: 'Usuarios',
          icon: 'mdi-account-group',
          to: 'dashboard/users',
          value: 'users',
        },
        {
          title: 'Acerca de',
          icon: 'mdi-help-box',
          to: '/dashboard/about',
          value: 'about',
        }
    ])

    const logOut = () => {
      // logic here
    }

    const changeRoute = (value: any) => {
      router.push({name: value})
    }

    const logOutSuccess = () => {
      // logic here
    }
    
    return {
      menuItems,
      logOut,
      logOutSuccess,
      drawer,
      changeRoute,
    }
  }
});
</script>
