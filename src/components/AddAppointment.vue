<template>
  
  <div class="card border-dark" border-variant="dark" header-bg-variant="dark">
    <h4 v-b-toggle.addAptform class="card-header bg-dark">What to do Today?</h4>
    <div class="panel-heading apt-addheading" @click="hidepanel =! hidepanel">
      <span class="glyphicon glyphicon-plus"></span> Add Appointment
    </div><!-- panel-heading -->

    <b-collapse id="addAptform" class="container-fluid">
        
      <b-form class="add-appointment form-horizontal" @submit.prevent="reqAdd">

        <div class="form-group">
          <label htmlFor="petName">Pet Name</label>
          <div >
            <input type="text" class="form-control" id="petName" placeholder="Pet's Name" v-model="formData.petName"/>
          </div><!-- col-sm-10 --> 
        </div><!-- form-group --> 

        <div class="form-group">
          <label htmlFor="petOwner">Pet Owner</label>
          <div >
            <input type="text" class="form-control"
              id="petOwner" placeholder="Owner's Name" v-model="formData.petOwner" />
          </div><!-- col-sm-10 -->
        </div><!-- form-group --> 

        <div class="form-group">
          <label htmlFor="aptDate">Date</label>
          <div >
            <input type="date" class="form-control" id="aptDate" v-model="formData.aptDate" />
          </div><!-- col-sm-4 --> 
          <label htmlFor="aptTime">Time</label>
          <div >
            <input type="time" class="form-control" id="aptTime" v-model="formData.aptTime"/>
          </div><!-- col-sm-4 --> 
        </div><!-- form-group -->

        <div class="form-group">
          <label  htmlFor="aptNotes">Apt. Notes</label>
          <div >
            <textarea class="form-control" rows="4" cols="50"
              id="aptNotes" placeholder="Appointment Notes" v-model="formData.aptNotes"></textarea>
          </div><!-- col-sm-10 --> 
        </div><!-- form-group -->

        <div class="form-group">
          <div >
            <button type="submit" class="btn btn-primary text-right">Add Appointment</button>
          </div><!-- col-sm-offset-2 --> 
        </div><!-- form-group -->

      </b-form>
    </b-collapse><!-- panel-body -->
  </div><!-- panel-primary -->
</template>

<script>
/* eslint-disable */
export default {
  name: 'AddAppointments',
  data(){
    return{
      hidepanel: true,
      formData: []
    }
  },
  methods: {
    reqAdd(){
      let parsedData = {
        petName: this.formData.petName,
        petOwner: this.formData.petOwner,
        aptDate: this.formData.aptDate + ' ' + this.formData.aptTime,
        aptNotes: this.formData.aptNotes
      }
      this.$emit('addReq', parsedData)
      this.formData = []
      this.hidepanel = true
    }
  }
}
</script>

<style scoped>
  .card-title {
    cursor: pointer;
  }
  .card{
    /*background: transparent;*/
    background-color: rgba(255, 255, 255, .2);
    margin-bottom: 10px;
  }

</style>