<template>
  <div>
    <div class="row" style="margin:15px;" v-if="product">
      <div class="col-4">
        <img :src="product.productImage" class="w-100" />
      </div>
      <div class="col-8">
        <h2>{{ product.name }}</h2>
        <p>price $ {{product.price}}</p>
        <h6> <strong>Quantity </strong> {{product.quantity}}</h6>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  methods: {
    addTocart() {
      this.$store.dispatch("AddProductCart", {
        product: this.product,
        quantity: 1,
        ck:this.product.check,
      });
    }
  }
};
</script>

<style></style>
