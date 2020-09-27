<template>
  <div class="BugComponent">
    <div class="card text-dark d-flex pointer" @click="setActive">
<div class="card-body">{{bugProp.title}} {{bugProp.creatorEmail}} {{bugProp.closed}} {{bugProp.updatedAt}}</div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'BugComponent',
  data(){
    return {
      bugData:{}
    }
  },
  computed:{},
  methods:{
    setActive(){
      this.$store.dispatch("getActiveBug", this.bugProp.id)
    },
    addBug(){
      this.$store.dispatch("createBug", {
        title: this.bugData.title,
        description: this.bugData.description
      })
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