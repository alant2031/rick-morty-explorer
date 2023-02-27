<template>
  <ApolloQuery
    :query="(gql) => gql`
      query GET_CHARACTER_BY_ID ($id: ID!){
        character(id: $id) {
          id
          name
          species
          status
          gender
          image
          episode {
            episode
          }
          location {
            dimension
          }
        }
      }
    `"
    :variables="{ id }"
  >
    <template v-slot="{ result: { loading, error, data } }">

        <!-- Loading -->
        <div v-if="loading" class="loading">Loading...</div>
  
        <!-- Error -->
        <div v-else-if="error" class="error">An error occurred</div>
  
        <!-- Result -->
        <div v-else-if="data" class="result">
          <h1>
            {{ data.character.name }}
          </h1>
          <div class="container">

            <div class="c1">
              <img :src="data.character.image" :alt="data.character.name">
            </div>
            <div class="c2">
              <h3>
                Details:
              </h3>
              <p>
                Name: {{ data.character.name }}
              </p>
              <p>
                Species: {{ data.character.species }}
              </p>
              <p>Gender: {{ data.character.gender }}</p>
              <p>Status: {{ data.character.status }}</p>
              <p>
                Location: {{ data.character.location.dimension }}
              </p>
            </div>
            <div class="c3">
              <h3>
                Episodes:
              </h3>
              <ul>
                <li v-for="(ep, i) in data.character.episode" :key="i">
                  {{ ep.episode }}
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- No result -->
        <div v-else class="no-result">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    }
  },
  created() {
    console.log(this.$route.params)
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>
  .result {
    margin: 20px
  }
  .container {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin: 14px;
  }

  .c1 {
    display: flex;
  }

  .c1 img {
    height: 400px;
  }

  .c2 {
    display: flex;
    flex-direction: column;
  }

  .c3 ul{
    height: 50vh;
    width: 50vw;
    overflow: scroll;
  }
</style>