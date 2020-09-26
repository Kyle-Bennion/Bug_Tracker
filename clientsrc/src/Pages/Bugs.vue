<template>
  <div class="Bugs text-light text-center">
    <h1>All Bugs</h1>
<div class="row d-flex justify-content-around">
  <div class="col-3"> Title </div>
  <div class="col-3"> Reported by </div>
  <div class="col-3"> Status </div>
  <div class="col-3"> Last Modified </div>
</div>
<div class="container-fluid">
<div class="row">
<ul class="col-12">
  <bugs-component v-for="bug in bugs" :key="bug.id" :bugProp="bug"/>
</ul>
</div>
</div>
  </div>
</template>


<script>
import bugsComponent from "../components/BugComponent.vue"
export default {
  name: 'Bugs',
  mounted(){
    this.$store.dispatch("getAllBugs");
  }, 
  data(){
    return {}
  },
  computed:{
    bugs (){
      return this.$store.state.bugs
    }
  },
  methods:{},
  components:{
    bugsComponent,

  }
}
</script>


<style scoped>

</style>
