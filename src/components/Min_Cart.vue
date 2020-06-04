<template>
  <div
    class="dropdown-menu"
    style="min-width:430px; right:0;left:auto"
    aria-labelledby="navbarDropdown"
  >
    <div class="row" style="margin-left:7px;padding:5px;">
      <div class="col-md-5"> <strong> Your Cart </strong></div>
      <div class="col-md-5">
        <a @click.prevent="clearCart()">
          <i class="fa fa-trash" aria-hidden="true"></i>

          <strong>Clear</strong>
        </a>
      </div>
    </div>
    <hr />
    <div v-for="(item, index) in cart" :key="index">
      <div class="row">
        <div
          class="col-xs-2 col-sm-2 col-md-2 col-lg-2"
          style="margin-left:10px;"
        >
          <img
            :src="item.product.productImage"
            height="50px"
            width="50px"
            alt
          />
        </div>

        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-4" style>
          <!--     
           <router-link :to="{name: 'product', params:{id:item.product._id}} ">
             {{ item.product.name || NULL }}
          </router-link>-->
          {{ item.product.name || NULL }}
          <br />
          {{ item.quantity || NULL }} kg
        </div>

        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style>
          <p>
            <span
              style="padding-left:6px;"
              @click.prevent="IncreaseQuant(item)"
            >
            <i class="fa fa-plus-circle" aria-hidden="true"></i>

            </span>
            <br />
            <span
              style="width:300px;
               height:20px;
               backgroundColor:#C0C0C0;
               padding:8px;"
              >{{ item.quantity }}</span
            >
            <br />

            <span
              style="padding-left:6px;"
              @click.prevent="decreaseQuant(item)"
            >
              <i class="fa fa-minus-circle" aria-hidden="true"></i>
            </span>
            <br />
          </p>
        </div>

        <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1" style>
          {{ item.quantity * item.product.price  }}$
        </div>

        <div
          class="col-xs-2 col-sm-2 col-md-1 col-lg-1"
          style="margin-left:38px;"
        >
          <span @click.prevent="RemoveProductCart(item)">
            <i class="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <br />
    </div>
    <div class="row" style="margin-left:7px;padding:15px;">
      <div class="col-md-5">
        <strong> Grant Total </strong> {{ totalCartPrice }}$
      </div>
      <div class="col-md-5">
        <a class="btn btn-info" role="button"  style="backgroundColor:#ffffff" v-bind:class="[cart.length <1 ? activeClass : '']">
          <router-link :to="{ name: 'order' }">Place Order </router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
return{
  activeClass:'disabled'
}

  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalCartPrice() {
      return this.$store.getters.cartPrice;
    },
  },
  mounted() {
    if (localStorage.getItem("cartItem")) {
      console.log("yeeeeeeeeeeeeeeeeeeeeeeeeeeeeee Min-cart",);
      let p = localStorage.getItem("cartItem");

      this.$store.dispatch("getCartItems", JSON.parse(p));
    }
  },
  methods: {
    RemoveProductCart(item) {
      this.$store.dispatch("removeCart", item);
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
    IncreaseQuant(item) {
      this.$store.dispatch("increase", item);
    },
    decreaseQuant(item) {
      this.$store.dispatch("decrease", item);
    },
  },
};
</script>

<style></style>
