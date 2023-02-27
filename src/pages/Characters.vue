<template>
  <ApolloQuery
    :query="(gql: any) => gql`
      query GET_CHARACTERS ($page: Int!) {
        characters(page: $page, filter: { name: ${filter.name} }) {
          results {
            id
            name
          }
        }
      }
    `"
    :variables="{ page }"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result">
        <div class="search-bar">

          <el-input v-model="input" placeholder="Search character" style="height: 55px; font-size: xx-large;" />
        </div>
        <ul class="items">
          <li class="item" v-for="char in data.characters.results" :key="char.id" @click="navigate(`characters/${char.id}`)">
            {{ char.id }} - {{ char.name }}
          </li>
        </ul>
      </div>

      <!-- No result -->
      <div v-else class="no-result">No result :(</div>
    </template>
  </ApolloQuery>
  <div class="pagination">

    <Pagination :page="page" :set-page="setPage" />
  </div>
</template>

<script lang="ts">
import { RouteLocationRaw } from 'vue-router';
import Pagination from '../components/Pagination.vue'
import Table from '../components/Table.vue';
const test = "morty"
export default {
  data() {
    return {
      page: 1,
      input: "",
      filter: {
        name: `""`
      }
      
    };
  },
  methods: {
    setPage: function (current: number) {
      this.page = current;
    },
    filterChar: function () {
    },
    navigate(path: RouteLocationRaw) { this.$router.push(path) }
  },
  watch: {
    input(c) {
      this.filter.name = `"${c}"`
    }
  },
  components: { Pagination, Table }
}
</script>

<style>
  .item:hover {
    cursor: pointer;
    color: blue;
  }
  .items {
    margin: 10px;
  }
  .search-bar {
    display: flex;
    justify-content: center;
    padding: 10px 90px;
  }

  .pagination {
    display: flex;
    justify-content: center;
  }
</style>