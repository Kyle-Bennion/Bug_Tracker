<template>
  <div class="NoteComponent">
      <div class="card text-center">
        <div class="col-4">{{ noteProp.creatorEmail }}</div>
        <div class="col-4">{{ noteProp.content }}</div>
        <div class="col-4"><button class="btn btn-red">Delete</button></div>
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