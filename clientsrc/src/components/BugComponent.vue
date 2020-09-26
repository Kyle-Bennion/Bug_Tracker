<template>
  <div class="BugComponent">
    <li> {{bugProp.title}} - {{bugProp.description}}</li>
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