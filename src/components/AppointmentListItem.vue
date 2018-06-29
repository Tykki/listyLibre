<template>
  <li class="pet-item media">

    <div class="media-left">
      <button class="pet-delete btn btn-xs btn-danger" @click="reqRemove">
      <span class="glyphicon glyphicon-remove"></span></button>
    </div><!-- media-left -->

    <div class="pet-info media-body">

      <div class="pet-head">
        <span class="pet-name" contenteditable="true" ref="petName" @blur="reqUpd('petName')">{{appointment.petName}}</span>
        <span class="apt-date pull-right">{{this.formatDate}}</span>
      </div><!-- pet-head -->

      <div class="owner-name">
        <span class="label-item">Owner:</span>
        <span contenteditable="true" ref="ownerName" @blur="reqUpd('ownerName')">{{appointment.petOwner}}</span>
      </div>
      <div class="apt-notes" contenteditable="true" ref="aptNotes" @blur="reqUpd('aptNotes')">{{appointment.aptNotes}}</div>

    </div><!-- pet-info -->

  </li><!-- pet-item -->


</template>

<script>
/* eslint-disable */
  import moment from 'moment'

export default {
  name: 'PetAppointmentItem',
  props: ['appointment'],
  methods: {
    reqRemove(){
      this.$parent.$emit('remove', this.appointment)
    },
    reqUpd(myref){
      this.appointment[myref] = this.$refs[myref].innerText
    }
  },
  computed: {
    formatDate(){
      return moment(new Date(this.appointment.aptDate)).format('MM-DD-YY, h:mm a')
    }
  }
}
</script>

<style scoped>

  .pet-item {
    border-bottom: 1px dotted gray;
    padding-bottom: 10px;
  }

  .pet-item:last-child {
    border-bottom: none;
  }

  .pet-name {
    font-weight: 600;
    color: #337ab7;
    font-size: 1.3em;
    line-height: 100%;
  }

  .pet-info {
    font-size: 1.7em;
  }

  .label-item {
    font-weight: 600;
    color: #667B82;
  }
  
  .pet-delete {
    font-size: 1.2em;
  }

  .apt-date {
    font-style: italic;
  }

  [contenteditable]:focus {
    outline: none;
    background: #EEE8D6; 
  }
</style>