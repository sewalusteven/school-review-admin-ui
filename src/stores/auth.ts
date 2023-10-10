import { defineStore } from 'pinia'
import {httpClient} from "@/services/custom-client";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    response: null,
    error: null
  }),
  actions: {
    updateTokenToServer(token: string): void{
      httpClient.post('/add-token',{token}).then(res => {
        this.response = res.data
      }).catch(err => {
        this.error = err.response
      })
    },

  }
})
