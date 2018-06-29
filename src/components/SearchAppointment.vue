<template>
  <div class="row search-appointments">
    <div class="col-sm-offset-3 col-sm-6">

      <div class="input-group">

        <input id="SearchApts" placeholder="Search" type="text" class="form-control" aria-label="Search Appointments" v-model="searchTerm"/>

        <div class="input-group-btn">
          <button type="button" class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span class="caret"></span></button>

            <ul class="dropdown-menu dropdown-menu-right">

              <li><a href="#" id="petName" @click="reqKeyChange('petName')">Pet Name<span class="glyphicon glyphicon-ok" v-if="filKey==='petName'"></span></a></li>

              <li><a href="#" id="aptDate" @click="reqKeyChange('aptDate')">Date<span class="glyphicon glyphicon-ok" v-if="filKey==='aptDate'"></span></a></li>

              <li><a href="#" id="ownerName" @click="reqKeyChange('petOwner')">Owner<span class="glyphicon glyphicon-ok" v-if="filKey==='petOwner'"></span></a></li>

              <li role="separator" class="divider"></li>

              <li><a href="#" id="asc" @click="reqDirChange('asc')">Asc<span class="glyphicon glyphicon-ok" v-if="filDir==='asc'"></span></a></li>

              <li><a href="#" id="desc" @click="reqDirChange('desc')">Desc
                <span class="glyphicon glyphicon-ok" v-if="filDir==='desc'"></span></a></li>
            </ul>
        </div><!-- input-group-btn --> 
      </div><!-- input-group --> 
    </div><!-- col-sm-offset-3 --> 
  </div><!-- search-appointments -->
</template>

<script>
/* eslint-disable */
export default {

  name: 'SearchAppointments',
  props: ['filDir', 'filKey'],
  data(){
    return{
      searchTerm: ''
    }
  },
  watch: {
    searchTerm(){
      this.$emit('searchRec', this.searchTerm)
    }
  },
  methods:{
    reqKeyChange(key){
      this.$emit('keyChange', key)
    },
    reqDirChange(dir){
      this.$emit('dirChange', dir)
    }
  }
} // export
</script>