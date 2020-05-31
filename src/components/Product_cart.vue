<template>
  <div>
    <div class="col-2 mt-4">
      <div class="card" style="width: 14rem; display:'inline-block'">
        <div style="position:relative">
          <div>
            <img
              class="card-img-top"
              style="height:200px"
              :src="item.productImage"
              alt="Card image cap"
            />
          </div>
          <div style="position: absolute;top:5px;right:2px;z-index=10">
            <a
              href="#"
              style="backgroundColor:#5f2b2c;padding:5px;borderRadius:50%"
            >
              <i
                class="fa fa-heart"
                aria-hidden="true"
                style="color:#C0C0C0"
              ></i>
            </a>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            {{
                item.name.length > 17
                  ? item.name.substring(0, 17) + "..."
                  : item.name || NULL
              }}
          </h5>



<!-- 
          <h5 class="card-title">
            <router-link
              :to="{ name: 'product', params: { id: item._id } }"
              style="color:#000000;"
              >{{
                item.name.length > 17
                  ? item.name.substring(0, 17) + "..."
                  : item.name || NULL
              }}</router-link
            >
          </h5> -->

          <p>Price ${{ item.price || NULL }}</p>
          <p>
            Quantity {{ item.quantity }}kg
            <a
              href="#"
              style="backgroundColor:#5f2b2c;float:right;padding:6px;borderRadius:30%"
              @click.prevent="addTocart()"
              v-if="!ck"
            >
              <font-awesome-icon style="color:#ffffff80" :icon="['fas', 'cart-plus']" />
            </a>
            <a
              href="#"
              style="backgroundColor:#5f2b2c;float:right;padding:6px;borderRadius:30%"
              @click.prevent="addTocart()"
              v-if="ck"
            >
              <font-awesome-icon
                style="color:#ffffff80"
                :icon="['fas', 'check']"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    ck: Boolean,
  },
  methods: {
    addTocart() {
      console.log(this.ck);

      this.$store.dispatch("AddProductCart", {
        product: this.item,
        quantity: 1,
        ck: this.ck,
      });
    },
  },
};
</script>

<style></style>
