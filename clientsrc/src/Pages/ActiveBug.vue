<template>
  <div class="ActiveBugComponent">
    <div class="container-fluid">
      <div class="row d-flex justify-content-around mt-1">
        <div class="card col-11">
          <h6><i>Title:</i></h6>
          <div class="card-body">
            <h1 class="spc1">{{ bug.title }}</h1>
          </div>
          <h6><i>Created By:</i></h6>
          <div class="card-body">
            <h1>{{ bug.creatorEmail }}</h1>
          </div>
          <div class="d-flex flex-row-reverse">
            <h6><i>Status</i></h6>
          </div>
          <div class="card-body d-flex flex-row-reverse">
            <h1>{{ bug.closed }}</h1>
          </div>
          <div class="card-body d-flex justify-content-center">
            <h1>{{ bug.description }}</h1>
          </div>
          <button type="submit" class="btn btn-danger col-1 mx-1">Close</button>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <div class="col-10">
<form @submit.prevent="addNote" class="d-flex justify-content-end my-1">
  <div class="row col-9 justify-content-end">
    <div class="col-3">
      <input type="text" class="form-control" placeholder="Bug Comment..." v-model="formData.content" required>
    </div>
  </div>
        <button type="submit" class="btn btn-warning">Comment...</button>
</form>
        <div class="card">
          <div class="row d-flex justify-content-between boarder text-center">
            <div class="col-3"><h3>Name</h3></div>
            <div class="col-3"><h3>Message</h3></div>
            <div class="col-3"><h3>Delete</h3></div>
          </div>
          <div class="row">
          </div>
          <div class="row justify-content-between boarder">
            <div class="card-body">
            <note-component v-for="note in notes" :key="note.id" :noteProp="note"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import noteComponent from "../components/NoteComponent.vue"
export default {
  name: "component",
  mounted(){
    this.$store.dispatch("getAllNotesByBugId", this.$route.params.id),
    this.$store.dispatch('getActiveBug', this.$route.params.id)

  },
  data() {
    return {
      formData: {
        content: ""
      }
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    notes(){
      return this.$store.state.notes;
    },
  },
  methods: {
    addNote(){
      this.$store.dispatch('createNote', {content:this.formData.content, bug:this.$route.params.id});
      this.formData = {content: ""}
    },

  },
  components: {
    noteComponent
  },
};
</script>


<style scoped>
.spc1 {
  background-color: darkolivegreen;
}
</style>