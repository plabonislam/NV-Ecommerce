<template>
  <div v-if="product">
    <prductShow  :product="product" :ck="product.check" />
  </div>
</template>

<script>
import prductShow from "../components/productShow.vue";
export default {
  props: ["id"],
  components: {
  prductShow
  },
  
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
    //  this.checkItem();
  }
};
</script>

<style></style>
