<template>
  <div class="ActiveBugComponent">
    <div class="container-fluid">
      <div class="row d-flex">
        <div class="card col-11">
          <h6><i>Title:</i></h6>
          <div class="card-header">
            <h1>{{ bug.title }}</h1>
          </div>
          <h6><i>Created By:</i></h6>
          <div class="card-body">
            <h1>{{ bug.creatorEmail }}</h1>
          </div>
          <div class="d-flex flex-row-reverse"><h6><i>Status</i></h6></div>
          <div class="card-body d-flex flex-row-reverse">
            <h1>{{ bug.closed }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "component",
  data() {
    return {};
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>