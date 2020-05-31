<template>
  <div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- <a class="navbar-brand" href="#">Home</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item active">
        <a class="nav-link" href="#">
           <router-link :to="{name: 'home'} " style="color:#ffffff80">Home</router-link>
          </a>
       
     </li>
   
    </ul>
    <ul class="navbar-nav mr-right pp">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle cart" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cart {{cartItemcount}}
        </a>
        <div @click="$event.stopPropagation()">
        <Min_Cart/>
        </div>
      </li>
      
    </ul>
    
  </div>
</nav>
  </div>
</template>

<script>
import Min_Cart from './Min_Cart'
export default {
  components:{
    Min_Cart,
  },
  computed:{
    cartItemcount(){
      return this.$store.getters.cartItemcount;
    }
  }
};
</script>

<style>
.pp{
  padding-right:105px;
}

</style>