<template>
  <div class="NoteComponent">
      <div class="card d-flex flex-row justify-content-centerS">
        <div class="card-body col-3"><h2>{{ noteProp.creatorEmail }}</h2></div>
        <div class="card-body col-8"><h4>{{ noteProp.content }}</h4></div>
        <div class="card-body col-1 justify-content-e"><button class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
      </div>
  </div>
</template>


<script>
export default {
  name: "component",
  props: ["noteProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {

  },
};
</script>


<style scoped>
</style>