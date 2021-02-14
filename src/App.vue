<template>
  <div id="app">
    <div class="container-sm">
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Acima Dos 11</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
    <Map/>
  </div>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Map
  }
}
</script>

<style>

</style>
