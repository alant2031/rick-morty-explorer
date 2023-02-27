<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="species" label="Species" />
    <el-table-column prop="episodes" label="Episodes" />
  </el-table>
</template>

<script lang="ts">

export default {

  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tableData: this.list.map((el: any) => {
        return {
        
          id: el.id,
          name: el.name,
          species: el.species,
          episodes: el.episode.length
          
        }
      })
    }
  },
  created() {
    console.log(this.list[0])
  }
}
</script>
