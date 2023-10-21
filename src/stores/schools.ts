import { defineStore } from 'pinia'
import {httpClient} from "@/services/custom-client";
import {keycloakInstance as keycloak} from "@/services/keycloak";
import type {School, SchoolStoreState} from "@/types/school-types";

export const useSchoolStore = defineStore('schoolStore', {
  state: (): SchoolStoreState => ({
    schoolsResponse: {
      totalItems: 0,
      data:[],
      perPage: 20
    },
    response: {},
    error: {},
    currPage: 1,
    singleSchool:null
  }),
  getters:{
    schools: (state):School[] => state.schoolsResponse.data,
    totalNumberOfSchools: (state):number => state.schoolsResponse.totalItems,
  },
  actions: {
    fetchSchools(page:number = 1): void{
      httpClient.post('/schools',{
        page
      },{
        headers:{
          Authorization: `Bearer ${keycloak.token}`
        }
      }).then(res => {
        this.schoolsResponse = res.data
        this.currPage =  page
      }).catch(err => {
        this.error = err.response
      })
    },
    searchSchools(page:number = 1, query: string): void{
      httpClient.post('/schools/search',{
        page,
        query
      },{
        headers:{
          Authorization: `Bearer ${keycloak.token}`
        }
      }).then(res => {
        this.schoolsResponse = res.data
        this.currPage =  page
      }).catch(err => {
        this.error = err.response
      })
    },
    getTotalNumberOfSchools(){
      httpClient.get('/schools/count', {
        headers:{
          Authorization: `Bearer ${keycloak.token}`
        }
      }).then(res => {
        this.schoolsResponse.totalItems = res.data
      }).catch(err => {
        this.error = err.response
      })
    },
    fetchSchool(id:number){
      httpClient.get(`/schools/${id}`, {
        headers:{
          Authorization: `Bearer ${keycloak.token}`
        }
      }).then(res => {
        this.singleSchool = res.data
      }).catch(err => {
        this.error = err.response
      })
    },

  }
})
