<template>
  <div class="container">
    <h2
      class="d-flex justify-content-center"
      style="margin-top: 60px; color: #9198e5"
    >
      You can choose process
    </h2>
    <div class="d-flex justify-content-evenly" style="margin-top: 90px">
      <app-card
        class="component"
        v-for="process in processes"
        :key="process.name"
        :process="process"
        @click.native="next(process)"
      ></app-card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    appCard: Card,
  },
  data() {
    return {
      processes: [
        { name: "Customer Order List", path: "/purchaseTable" },
        { name: "Take Order For Customer", path: "/addPurchase" },
        { name: "Delete Order For Customer", path: "/deletePurchase" },
        { name: "Add Dealer", path: "/addDealer" },
        { name: "Log Off"}
      ],
    };
  },
  methods: {
    next(process) {
      if (process.name !== "Log Off") {
        this.$router.replace(process.path);
      } else {
        this.$store.commit("setIsAuthenticated");
        this.$store.commit("deleteToken");
        this.$store.commit("deleteStoreList");
        this.$store.commit("deletePersonList");
        this.$router.replace("/login");
        
      }
    },
  },
};
</script>

<style scoped>
.component:hover{
   cursor:pointer;
}
</style>