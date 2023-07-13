<template>
  <div>
    <div class="container" v-if="!isSaved">
      <div class="d-flex justify-content-center align-content-center">
        <div class="card shadow p-3 mt-2" style="width: 500px">
          <div class="form">
            <h2>Dealer Add</h2>
            <div class="mt-3">
              <label for="select">Store</label>
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
            <div class="form-group mt-2">
              <label for="name" class="form-label">Dealer Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Dealer Name"
                v-model="dealerName"
              />
            </div>
            <div class="form-group mt-2">
              <label for="surname" class="form-label">Dealer Address</label>
              <input
                type="text"
                class="form-control"
                id="surname"
                placeholder="Dealer Address"
                v-model="dealerAddress"
              />
            </div>
            <div class="form-group mt-2">
              <label for="telefon" class="form-label">Dealer Telephone</label>
              <input
                type="text"
                class="form-control"
                id="telefon"
                placeholder="Dealer Telephone"
                v-model="dealerPhone"
              />
            </div>
            <div class="d-flex justify-content-evenly">
              <button
                class="btn mt-3 btn-primary"
                @click="save"
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
    </div>
    <app-save-success v-else></app-save-success>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";
import SaveSuccess from '../processResult/SaveSuccess.vue';
export default {
  components:{
    appSaveSuccess: SaveSuccess
  },
  data() {
    return {
      dealerName: null,
      dealerAddress: null,
      dealerPhone: null,
      selectedStore: null,
      isSaved:false
    };
  },
  computed: {
    ...mapGetters(["getStoreList"]),
  },
  methods: {
    save() {
      const dealer = {
        dealerName: this.dealerName,
        dealerAddress: this.dealerAddress,
        dealerPhone: this.dealerPhone,
        store: { ...this.selectedStore },
      };
      this.$store.dispatch("saveDealer", dealer);
      this.isSaved= true;
      this.clearData();
    },
    clearData() {
        this.dealerName = null,
        this.dealerAddress = null,
        this.dealerPhone = null,
        this.selectedStore = null
        setTimeout(()=>{
          this.isSaved = false
        },1000)
    },
    quit(){
      this.$router.replace("/home")
    }
  },
  validations: {
    dealerName: { required,  },
    dealerAddress: { required },
    dealerPhone: { required },
  },
};
</script>
  
<style scoped>

</style>