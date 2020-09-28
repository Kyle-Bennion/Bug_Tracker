<template>
  <div class="BugComponent col-12">
    <div
      class="text-dark justify-content-around pointer row border"
      @click="setActive"
    >
      <div class="col-3">
        {{ bugProp.title }}
      </div>
      <div class="col-3">
        {{ bugProp.creatorEmail }}
      </div>
      <div class="col-3">
        <p v-if="bugProp.closed" class="redI">Closed</p>
        <p class="greenI" v-if="!bugProp.closed">Open</p>
      </div>
      <div class="col-3">
        {{ bugProp.updatedAt }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "BugComponent",
  data() {
    return {
      bugData: {},
    };
  },
  computed: {},
  methods: {
    setActive() {
      this.$store.dispatch("getActiveBug", this.bugProp.id);
    },
    addBug() {
      this.$store.dispatch("createBug", {
        title: this.bugData.title,
        description: this.bugData.description,
      });
    },
  },
  components: {},
  props: ["bugProp"],
};
</script>


<style scoped>
.pointer {
  cursor: pointer;
}
.redI {
  color: rgb(199, 0, 0);
}
.greenI {
  color: limegreen;
}
</style>