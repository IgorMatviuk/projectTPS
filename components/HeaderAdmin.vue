<template>
  <div>
    <h1>header admin</h1>
    <div v-on:click="logout()">Выйти</div>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
          this.$router.push('/')
    }
  }
}
</script>

<style>

</style>