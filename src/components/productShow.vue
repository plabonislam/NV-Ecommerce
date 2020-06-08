<template>
  <div class="div">
        <div class="row" style="margin:15px;" >
      <div class="col-md-3 offset-md-2">
        <img :src="product.productImage" class="w-100" />
      </div>
      <div class="col-md-3 offset-md-1 ">
        <h2>{{ product.name }}</h2>
        <p>price $ {{product.price}}</p>
        <h6>
          <strong>Quantity</strong>
          {{product.quantity}}
          <a
            href="#"
            style="backgroundColor:#5f2b2c;float:right;padding:6px;borderRadius:30%"
            @click.prevent="addTocart()"
            v-if="!ck"
          >{{ product.check}}</a>
          <a
            href="#"
            style="backgroundColor:#5f2b2c;float:right;padding:6px;borderRadius:30%"
            @click.prevent="addTocart()"
            v-if="ck"
          >{{ product.check}}</a>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    ck:Boolean,
  
  },

 methods: {
addTocart() {
    
      this.$store.dispatch("AddProductCart", {
        product: this.product,
        quantity: 1,
        call:"product"
      });
    },
    
  }
};
</script>

<style>
</style>