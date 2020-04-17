<template>
  <v-container grid-list-md text-xs-center shaped>
    <v-layout row wrap>
      <v-flex  >
          <v-toolbar dense dark>
            <v-toolbar-title>S'enregister</v-toolbar-title>
          </v-toolbar>

          <v-col
           align="center"
           no-gutters >  
            <v-text-field

              class="mx-auto col-6"
               
              label="Solo"
              placeholder="email"
              solo
              type="text" name="email" v-model="email"
            ></v-text-field>
          </v-col>

          <v-col
           align="center"
           no-gutters >
            <v-text-field
              class="mx-auto col-6"
              label="Solo"
              placeholder="password"
              solo
              type="password" name="password" v-model="password"
            ></v-text-field>
          </v-col>

          <div class="error pl-4 pr-4 pt-2 pb-2" v-html="error" />
          
          <v-btn
            class="black"
            @click="register"
          >Enregistrer</v-btn>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthentificationService.register({
          email: this.email,
          password: this.password
        });
        console.log(response.data);
      } catch (err) {
        // axios va retourner error.response.data et on
        //  accède à error qu'on a créer dasn server
        console.log(err.response.data.error);
        this.error = err.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
