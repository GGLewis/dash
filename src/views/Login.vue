
<style>
#malogin{
   margin-top: 10%;
}
</style>
<template>
 
  <div class="container">
  <div class="row">
    <div class="col s8 offset-s2" id="malogin">

      <div class="card card-login">
        <div class="card-login-splash">
          <div class="wrapper">
            <h3>ESPACE ADMIN</h3>
 
          </div>

          <img src="../files/img/geometric-cave.jpg" alt="">
        </div>
        <div class="card-content">
          <span class="card-title">CONNEXION</span>
          <form>
            <div class="input-field">
              <input id="username" type="text" class="validate">
              <label for="username">Username</label>
            </div>
            <div class="input-field">
              <input id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>

            <a href="#!">Forgot Password?</a>

            <br><br>
            <div>
              <button class="btn right " type="submit"  @click="login()">LOG IN  </button>
            
            </div>

          </form>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Login',
  data : function(){
    return {
      email: '',
      password : ''
    }

  },
   methods :{
  login : function(){
    this.$router.push({ name: 'dash' });

  }
}

}


</script>