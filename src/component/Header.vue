<template>
  <div>
    <nav class="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="navbar-brand">Customer</div>
        <router-link class="nav-item" tag="div" style="color: wheat; margin-left: 10px" to="/addPurchase">
          <a class="nav-link">Vehicle Order</a>
        </router-link>
        <router-link class="nav-item" tag="div" style="color: wheat; margin-left: 10px" to="/purchaseTable">
          <a class="nav-link">Sales List</a>
        </router-link>
        <router-link
          class="nav-item"
          tag="div"
          style="color: wheat; margin-left: 10px"
          to="/addDealer"
        >
          <a class="nav-link">Add Dealer</a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto">
            <li>
              <div v-if="control">
                <font-awesome-icon
                  icon="sign-out-alt"
                  class="nav-link"
                  @click="logout"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.commit("setIsAuthenticated");
      this.$store.commit("deleteToken")
      this.$store.commit("deleteStoreList")
      this.$store.commit("deletePersonList")
      if (this.$route.path != "/login") {
        this.$router.replace("/login");
      }
    },
  },
  computed: {
    control() {
      if (this.$store.state.auth.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>