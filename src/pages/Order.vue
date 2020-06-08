<template>
  <div>
    <div class="container" style="padding-top:100px;">

            <h2 style="text-align:center; padding-bottom:40px;">Order Infromation </h2>
      <form @submit.prevent="submitFrom">

        <p v-if="errors.length">
    
    <ul>
         <div class="form-row">
          <div class="col-md-6 mb-3 offset-md-4">
      <li v-for="(error,index) in errors " :key='index' class="text-danger">{{ error }}</li>
          </div>
         </div>
    </ul>
  </p>



        <div class="form-row">
          <div class="col-md-6 mb-3 offset-md-4">
            <label for="userName">Username</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="appuserName">*</span>
              </div>
              <input
                type="text"
                class="form-control"
                id="userName"
                v-model="userName"
                placeholder="Username"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>


<div class="form-row">
          <div class="col-md-6 mb-3 offset-md-4">
            <label for="contact">Phone Number</label>
            <input
              type="text"
              class="form-control"
              id="contact"
              v-model="contact"
              placeholder="contact"
              value="Mark"
              required
            />
          </div>
        
        </div>

        <div class="form-row">
          <div class="col-md-6 mb-3 offset-md-4 ">
            <label for="Email">Email</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="appuserName">*</span>
              </div>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="email"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-6 mb-3 offset-md-4">
            <label for="city">City</label>
            <input
              type="text"
              class="form-control"
              id="city"
              v-model="city"
              placeholder="City"
              required
            />
          </div>
        </div>


        <div class="form-row">
          <div class="col-md-6 mb-3 offset-md-4">
            <label for="postalCode">Zip</label>
            <input
              type="text"
              class="form-control"
              id="postalCode"
              v-model="postalCode"
              placeholder="Zip"
              required
            />
          </div>
        </div>
<div class="form-row">
<div class="col-md-3 mb-3 offset-md-6">
        <button class="btn btn-primary" type="submit" v-bind:class="info">Submit form</button>
</div>
</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      errors: [],
      contact:"",
      userName: "",
      email: "",
      city: "",
      postalCode: "",
      info:'',
      formData:new FormData(),
    };
  },
  computed: {
    cartItemcount() {
      return this.$store.getters.cartItemcount;
    }
  },
  methods: {
    submitFrom() {
      if(this.info==='disabled'){
        return;
      }
      let p = localStorage.getItem("cartItem");
        console.log(this.formData,"formData");
      this.errors = [];
      
      this.info='disabled';

      if (this.cartItemcount < 1) {
        this.errors.push("cart required.");
        alert("No item Found In Cart");
        return ;
      }


      if (!this.userName || this.userName.trim().length==0 ) {
        
        this.errors.push("UserName required.");
      }

      if (this.email === null) {
        this.errors.push("Email required.");
      }

      if (!this.city || this.city.trim().length==0 ) {
        
        this.errors.push("City required.");
      }
      if (!this.postalCode || this.postalCode.trim().length==0) {
        this.errors.push("Post-code required.");
      }
      if (!this.contact || this.contact.trim().length==0) {
        this.errors.push("Contact required.");
      }
      if (this.errors.length > 0){
        alert("Order Failed");
        return;
      }
      // localStorage.removeItem("cartItem");


      axios
        .post("http://127.0.0.1:3000/orders", {
          userName: this.userName,
          email: this.email,
          city: this.city,
          postalCode: this.postalCode,
          contact:this.contact,
          cart: p,
        })
        .then(response => {
          console.log(response);

          alert("Order Submitted");
         
          this.userName="";
          this.contact="";
          this.email="";
          this.city="";
          this.postalCode="";
          //localStorage.removeItem("cartItem");
            this.$store.dispatch("clearCart");
        })
        .catch(err => {
          console.log(err);
          alert("Order Failed");
        });
    }
  }
};
</script>

<style></style>
