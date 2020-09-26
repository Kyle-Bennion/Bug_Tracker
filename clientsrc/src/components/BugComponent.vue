<template>
  <div class="BugComponent">
    <div class="card text-dark d-flex">
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
  methods:{},
  components:{},
  props: ["bugProp"]
}
</script>


<style scoped>

</style>