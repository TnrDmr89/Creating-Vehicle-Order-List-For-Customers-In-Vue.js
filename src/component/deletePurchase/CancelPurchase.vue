<template>
  <div class="container">
    <div
      class="d-flex justify-content-center align-content-center"
      v-if="getIsError === null"
    >
      <div class="card shadow p-3 mt-2" style="width: 500px">
        <h2 style="margin-left: 20%">Delete Purchase Order</h2>
        <div class="form">
          <div class="form-group mt-2">
            <label for="TC" class="form-label">Person TC</label>
            <input
              type="text"
              class="form-control"
              id="TC"
              placeholder="Person TC"
              v-model="tc"
            />
          </div>
          <div class="d-flex justify-content-evenly">
            <button class="btn mt-3 btn-primary" @click="deleteCustomer" :disabled="$v.$invalid">
              Delete
            </button>
            <button
              class="btn mt-3 btn-warning"
              @click="quit"
              style="margin-left: -20px"
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    </div>
    <app-failure v-else-if="getIsError"></app-failure>
    <app-success v-else-if="!getIsError"></app-success>
  </div>
</template>

<script>
import FailureProcess from "../processResult/FailureProcess.vue";
import SaveSuccess from '../processResult/SaveSuccess.vue'
import { mapGetters } from 'vuex'
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    appFailure: FailureProcess,
    appSuccess:SaveSuccess
  },
  data() {
    return {
      tc: null
    };
  },
  computed:{
    ...mapGetters(["getIsError"])
  },   
  methods: {
    quit() {
      this.$router.replace("/home");

    },
    deleteCustomer() {
      this.$store.dispatch("deletePerson", this.tc);
      this.tc=null;
    }
  },
  validations:{
    tc:{
      required,
    }
  }
};
</script>

<style>
</style>