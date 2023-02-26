<template>
  <ApolloQuery
    :query="gql => gql`
      query GET_CHARACTERS ($page: Int!) {
        characters(page: $page) {
          results {
            id
            name
            species
            episode {
              episode
            }
          }
        }
      }
    `"
    :variables="{ page }"
  >
    <template v-slot="{ result: { loading, error, data } }">
    <!-- Loading -->
    <div v-if="loading" class="loading apollo">Loading...</div>

    <!-- Error -->
    <div v-else-if="error" class="error apollo">An error occurred</div>

    <!-- Result -->
    <div v-else-if="data" class="result apollo">
      <ul>
        <li v-for="(char, i) in data.characters.results" :key="i">
          {{ char.name }}
        </li>
      </ul>
    </div>

    <!-- No result -->
    <div v-else class="no-result apollo">No result :(</div>
</template>
  </ApolloQuery>
  <Pagination :page="page" :set-page="setPage" />
</template>

<script>

import Pagination from '../components/Pagination.vue'
export default {
    data() {
        return {
          page: 1
        };
    },
    methods: {
        setPage: function (current) {
          this.page = current;
        }
    },
    watch: {
        page(c) {
          console.log(c);
        }
    },
    components: { Pagination }
}
</script>

<style>

</style>