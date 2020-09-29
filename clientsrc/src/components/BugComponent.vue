<template>
  <div class="BugComponent col-12 border">
    <div
      class="text-dark justify-content-around pointer row mb-1 grow"
      @click="setActive"
    >
      <div class="col-3">
        <h3><b>{{ bugProp.title }}</b></h3>
      </div>
      <div class="col-3">
        <h3><b>{{ bugProp.creatorEmail }}</b></h3>
      </div>
      <div class="col-3 textShadow">
        <h3 v-if="bugProp.closed" class="redI"><b>Closed</b></h3>
        <h3 class="greenI" v-if="!bugProp.closed"><b>Open</b></h3>
      </div>
      <div class="col-3">
        <h5><i>{{ bugProp.updatedAt }}</i></h5>
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
.border{
  border-color: #1D3557 !important;
  border-width: small !important;
}
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(0.99); }

</style>