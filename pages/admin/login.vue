<template>
    <div>
        <form @submit="onSubmit">
            <input 
                type="text"
                placeholder="Введите логин"
                v-model="loginForm.login"
                >
            <input 
                type="text" 
                placeholder="Введите пароль"
                v-model="loginForm.password"
                >
            <button
                type="submit" 
                variant="primary"
            >
            Войти
            </button>
        </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          login: '',
          password: ''
        },
      }
    },
    mounted(){
      const {message} = this.$route.query

      if (message === 'login') {
        console.log('водите в панель администратора')  
      }
    },
    methods: {
     async onSubmit(event) {
        event.preventDefault()
        const formData = {
          login: this.loginForm.login,
          password: this.loginForm.password
        }
        console.log(formData)
        await this.$store.dispatch('auth/loginAdmin', formData) 
        this.$router.push('/admin') 
     }
    }
  }
</script>

<style>

</style>