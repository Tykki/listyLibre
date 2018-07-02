
<template>
  <div id="main-app" class="container-fluid">
    <img id="headerImg" src="./assets/libra.svg">

    <add-appointment @addReq="appAdd"/>
    <search-appointment :filKey="filterKey" :filDir="filterDir" @searchRec="searchApts" @keyChange="changeKey" @dirChange="changeDir"/>
    <router-view
      :appointments = 'filteredApts' @remove="removeItem"/>
  </div>
</template>

<script>
  /* eslint-disable */
import _ from 'lodash'
import moment from 'moment'
import AppointmentList from '@/components/AppointmentList.vue';
import AddApp from '@/components/AddAppointment.vue'
import SearchApp from '@/components/SearchAppointment.vue'

export default {
  name: 'MainApp',
  data() {
    return {
      theAppointments: [],
      searchTerms: '',
      filterKey: 'petName',
      filterDir: 'asc'
    } //return
  }, //data

  components: {
    'appointment-list': AppointmentList,
    'add-appointment': AddApp,
    'search-appointment': SearchApp
  }, //components

  created: function() {
    $.getJSON('/static/appointments.json')
      .done( info =>  {
        this.theAppointments = info;
    }); //getJSON
  }, //created
  methods: {
    appAdd(apt){
      this.theAppointments.push(apt)
    },
    removeItem(apt){
      this.theAppointments = _.without(this.theAppointments, apt)
    },
    searchApts(terms){
      this.searchTerms = terms
    },
    changeKey(key){
      this.filterKey = key
    },
    changeDir(dir){
      this.filterDir = dir
    }
  },
  computed: {
    searchedApt(){
      return this.theAppointments.filter(item => 
        item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
        item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase()) ||
        item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        )
    },
    filteredApts(){
      return _.orderBy(this.searchedApt, item => item[this.filterKey].toLowerCase(), this.filterDir)
    }
  }
} //default
</script>