<template>
  <div id="textExample">


  <table class="table table-bordered">
			<thead>
				<tr>
					<th> id</th>
					<th> Position</th>
					<th> nom du modele</th>
					<th> Nom de la phase</th>
					<th> Date mise à jour</th>
				</tr>
			</thead>
			<tr v-for="phase in phases">
        <td >{{phase.id}}</td>
        <td >{{ phase.id }}</td>
    <td >{{ phase.linenumber }}</td>
    <td >{{ phase.modelename }}</td>
   <td > {{ phase.phasename }}</td>
    <td >{{ phase.updatedAt }}</td>

			</tr>
		</table>
</div>
</template>

<script>
import PhaseService from "@/services/PhaseService";
export default {
  data() {
    return {
      phases: {},
      
    };
  },

  async mounted ()
     {
       console.log('on rentre dans le composant Phase')
      try {
        const response = await PhaseService.selectAll();
        this.phases = response.data;
        console.log(this.phases);
        console.log('data')
      } catch (err) {
        // axios va retourner error.response.data et on
        //  accède à error qu'on a créer dasn server
        console.log(err.response.data.error);
        this.error = err.response.data.error;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
