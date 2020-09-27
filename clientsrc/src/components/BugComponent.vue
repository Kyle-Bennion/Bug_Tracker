<template>
  <div class="BugComponent">
    <div class="card text-dark d-flex pointer" @click="setActive">
<div class="card-body">{{bugProp.title}} {{bugProp.creatorEmail}} {{bugProp.closed}} {{bugProp.createdAt}}</div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'BugComponent',
  data(){
    return {}
  },
  computed:{},
  methods:{
    setActive(){
      this.$store.dispatch("getActiveBug", this.bugProp.id)
    }
  },
  components:{},
  props: ["bugProp"]
}
</script>


<style scoped>
.pointer{
  cursor: pointer;
}
</style>