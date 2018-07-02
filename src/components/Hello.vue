<template>
  <div>
    <b-jumbotron>
      <h1 class="display-3"><router-link to="/appts">What's up For the Day?</router-link></h1>
    </b-jumbotron>
    <b-jumbotron header="You Hungry?"></b-jumbotron>
    <b-jumbotron header="Speak up!"></b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'splash',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron{
    background-color: rgba(255, 255, 255, .2);
  }

  a{
    color: gold;
  }
  a:focus, a:hover{
    color: purple;
    text-decoration: none;
  }

  h1{
    font-size: 3em;
    font-weight: 500;
  }
</style>
