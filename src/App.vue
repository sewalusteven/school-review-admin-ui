<script setup lang="ts">
import { RouterView } from 'vue-router'
import {onBeforeMount} from "vue";
import {keycloakInstance as keycloak} from "@/services/keycloak";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

onBeforeMount(() => {
  keycloak.init({
    onLoad:'login-required'
  }).then(() => {
    if (keycloak.token != null) {
      authStore.updateTokenToServer(keycloak.token)
    }
  }).catch(error => {
    console.error('Failed to initialize adapter:', error);
  })
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
