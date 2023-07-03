<template>
  <div>
    <transition name="fade" mode="out-in">
      <app-header v-if="isAuthenticated"></app-header>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./component/Header.vue";
import Dealer from "./component/Dealer.vue";
export default {
  components: {
    appHeader: Header,
    appDealer: Dealer,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
  },
  created() {
    if (this.$route.path != "/login") {
      this.$router.push("/login");
    }
  },
};
</script>


<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
  opacity: 0;
}
</style>
