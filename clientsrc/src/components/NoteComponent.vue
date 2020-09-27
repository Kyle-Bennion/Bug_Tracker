<template>
  <div class="NoteComponent">
      <div class="card d-flex flex-row justify-content-centerS">
        <div class="card-body col-3">{{ noteProp.creatorEmail }}</div>
        <div class="card-body col-8">{{ noteProp.content }}</div>
        <div class="card-body col-1 justify-content-e"><button class="btn btn-danger">Delete</button></div>
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