<template>
<div class="d-flex align-items-stretch flex-wrap">
  
<productCart v-for="item in products" :key="item._id" :item="item" />


</div>
</template>

<script>

import ProductCart from "./Product_cart.vue";

export default {
components:{
  ProductCart
},
computed:{
  products(){

  return this.$store.state.products;
}
},
 mounted(){
  
  this.$store.dispatch('getPr');
  console.log("NOPEEEEE");
   
}


}


</script>

<style>

</style>