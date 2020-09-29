<template>
  <div class="BugComponent col-12">
    <div
      class="text-dark justify-content-around pointer row border"
      @click="setActive"
    >
      <div class="col-3">
        <b>{{ bugProp.title }}</b>
      </div>
      <div class="col-3">
        <b>{{ bugProp.creatorEmail }}</b>
      </div>
      <div class="col-3 textShadow">
        <p v-if="bugProp.closed" class="redI"><b>Closed</b></p>
        <p class="greenI" v-if="!bugProp.closed"><b>Open</b></p>
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
.textShadow {
  text-shadow: 0.5px 0.5px #070404;
}
</style>