import { defineStore } from 'pinia'
import {httpClient} from "@/services/custom-client";
import {keycloakInstance as keycloak} from "@/services/keycloak";
import type {CurriculumState} from "@/types/curriculum-types";

export const useCurriculumStore = defineStore('curriculumStore', {
  state: (): CurriculumState => ({
    curriculums: [],
    response: {},
    error: {}
  }),
  actions: {
    fetchCurriculums(): void{
      httpClient.get('/curriculums',{
        headers:{
          Authorization: `Bearer ${keycloak.token}`
        }
      }).then(res => {
        this.curriculums = res.data
      }).catch(err => {
        this.error = err.response
      })
    },

  }
})
