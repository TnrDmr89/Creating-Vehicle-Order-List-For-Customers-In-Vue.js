<template>
    <div class="container">
     <h1 class="text-center m-3">Sale List</h1>
     <table class="table table-striped table-bordered border-primary">
        <thead>
           <td><b>Person Name</b></td>
           <td><b>Person Surname</b></td>
           <td><b>Person Age</b></td>
           <td><b>Person TC</b></td>
           <td><b>Person Car</b></td>
           <td><b>Bayii</b></td>
        </thead>
        <tbody>
            <tr v-for="person in getPersonsList" :key="person.tc">
                <td>{{ person.personName }}</td>
                <td>{{ person.personSurname }}</td>
                <td>{{ person.personAge }}</td>
                <td>{{ person.personTC }}</td>
                <td>{{ person.car.brand }}</td>
                <td>{{ person.car.dealer.dealerName }}</td>
            </tr>
        </tbody>
     </table>
     <div class="d-flex justify-content-center">
        <button class="btn btn-warning" @click="quit">
            Quit
        </button>
     </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    computed:{
        ...mapGetters(["getPersonsList"])
    },
    methods:{
       quit(){
      this.$router.replace("/home")
    }
    }

}

</script>

<style>

</style>