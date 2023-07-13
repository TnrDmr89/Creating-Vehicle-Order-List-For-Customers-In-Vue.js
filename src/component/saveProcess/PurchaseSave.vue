<template>
  <div>
    <div class="container">
      <div
        class="d-flex justify-content-center align-content-center"
        v-if="!isSaved"
      >
        <div class="card shadow p-3 mt-2" style="width: 500px">
          <h2 style="margin-left: 35%;">Order Info</h2>
          <div class="form">
            <div class="form-group mt-2">
              <label for="name" class="form-label">Person Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="PersonName"
                v-model="person.personName"
              />
            </div>
            <div class="form-group mt-2">
              <label for="surname" class="form-label">Person Surname</label>
              <input
                type="text"
                class="form-control"
                id="surname"
                placeholder="PersonSurname"
                v-model="person.personSurname"
              />
            </div>
            <div class="form-group mt-2">
              <label for="age" class="form-label">Person Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="PersonAge"
                v-model="person.personAge"
              />
            </div>
            <div class="form-group mt-2">
              <label for="tc" class="form-label">Person TC</label>
              <input
                type="text"
                class="form-control"
                id="tc"
                placeholder="PersonTC"
                v-model="person.personTC"
              />
            </div>
            <div class="form-group mt-2">
              <label for="tc" class="form-label">Vehicle Brand</label>
              <input
                type="text"
                class="form-control"
                id="tc"
                placeholder="VehicleBrand"
                v-model="car.brand"
              />
            </div>
            <div class="form-group mt-2">
              <label for="tc" class="form-label">Vehicle Model</label>
              <input
                type="text"
                class="form-control"
                id="tc"
                placeholder="VehicleModel"
                v-model="car.model"
              />
            </div>
            <div class="form-group mt-2">
              <label for="tc" class="form-label">Purchased Year</label>
              <input
                type="text"
                class="form-control"
                id="tc"
                placeholder="PurchasedYear"
                v-model="car.purchaseYear"
              />
            </div>
            <div class="mt-3">
              <label for="select">Purchased Store</label>
              <select
                class="form-select mt-3"
                id="select"
                v-model="selectedStore"
              >
                <option
                  v-for="store in getStoreList"
                  :key="store.id"
                  :value="store"
                >
                  {{ store.name }}
                </option>
              </select>
            </div>
            <div class="mt-3">
              <label for="selectDeal">Purchased Dealer</label>
              <select
                class="form-select mt-3"
                id="selectDeal"
                v-model="selectedDealer"
              >
                <option
                  v-for="dealer in getDealerByStore"
                  :key="dealer.name"
                  :value="dealer"
                >
                  {{ dealer.dealerName }}
                </option>
              </select>
            </div>
            <div class="d-flex justify-content-evenly">
              <button
                class="btn mt-3 btn-primary"
                @click="savePerson"
                :disabled="$v.$invalid"
              >
                Save
              </button>
              <button
                  class="btn mt-3 btn-warning"
                  @click="quit"
                >
                  Quit
                </button>
            </div>
          </div>
        </div>
      </div>
      <app-save-success v-else></app-save-success>
    </div>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
import { required, numeric, alpha } from "vuelidate/lib/validators";
import SaveSuccess from "../processResult/SaveSuccess.vue";
export default {
  components: {
    appSaveSuccess: SaveSuccess,
  },
  data() {
    return {
      person: {
        personName: null,
        personSurname: null,
        personAge: null,
        personTC: "",
      },
      car: {
        brand: null,
        model: null,
        purchaseYear: null,
      },
      selectedStore: null,
      selectedDealer: null,
      isSaved: false,
    };
  },
  computed: {
    ...mapGetters(["getStoreList", "getDealerByStore"]),
  },
  methods: {
    savePerson() {
      const personSaved = {
          ...this.person,
          car: {
            ...this.car,
            dealer: {
              ...this.selectedDealer,
              store: { ...this.selectedStore },
            },
          },
      
      };
      console.log(personSaved);
      this.$store.dispatch("savePerson", personSaved);
      this.isSaved = true;
      this.clearData();
    },
    clearData() {
      for (let person in this.person) {
        this.person[person] = null;
      }
      for (let car in this.car) {
        this.car[car] = null;
      }
      for (let store in this.store) {
        this.store[store] = null;
      }
      this.selectedStore = null;
      this.selectedDealer = null;
      setTimeout(() => {
        this.isSaved = false;
      }, 1000);
    },
    quit(){
      this.$router.replace("/home")
    }
  },
  watch: {
    selectedStore: function (value) {
      if(value != null){
        this.$store.dispatch("getDealerByStore", value);
        this.selectedDealer = null
      }
    },
  },
  validations: {
    person: {
      personName: {
        required,
        alpha,
      },
      personSurname: {
        required,
        alpha,
      },
      personAge: {
        required,
        numeric,
      },
      personTC: {
        required,
      },
    },
    car: {
      brand: { required, alpha },
      model: { required, alpha },
      purchaseYear: { required },
    },
    selectedStore: { required },
    selectedDealer: { required },
  },
};
</script>
  
  <style>
</style>