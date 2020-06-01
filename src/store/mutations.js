export const Data_Updated = (state, data) => {
  console.log("yeap", data.products);
  data.products.map(it=>{
    it.check=false;
     state.cart.map((citem) => {
       console.log("goruuuuuuuu");
       if (it._id == citem.product._id) {
         it.check = true;
       }
     });

  });
  

 


  state.products = data.products;
};
export const Show_Product = (state, data) => {
  state.product = data;
  state.product.check=false;
  state.products.map(it=>{
    if(it._id === data._id){
        state.product.check= it.check;
    }
  })
};

export const Update_cart = (state, { product, quantity,ck }) => {
  
  let test = 1;
  //let index=state.products.indexOf(product);
  
  product.check=true;
  if(ck==false)
  ck=true;
  
  
  state.cart.map((item) => {
    if (item.product._id === product._id) {
      test++;
      console.log(test, "uuuuuuuuuuuuuuu");
      return ;
      //return item.quantity++;
    }
  });
  if (test > 1) {
    localStorage.setItem("cartItem", JSON.stringify(state.cart));

    return;
  }
  state.cart.push({
    product: product,
    quantity: quantity,
  });
  localStorage.setItem("cartItem", JSON.stringify(state.cart));
};

export const Set_cart = (state, cartItem) => {
  state.cart = cartItem;
  
  
};

export const Remove_Item = (state, item) => {
  console.log(state.cart);
  var n = state.cart.indexOf(item);
  state.cart.splice(n, 1);
  //item.product.check=false;
  for (let it of state.products) {
  if(it._id === item.product._id){
    it.check=false;
  }
  }
  localStorage.setItem("cartItem", JSON.stringify(state.cart));
  
};

export const Clear_Item=(state)=>{
  
  state.products.map(it=>{
    it.check=false;
  })
  state.cart=[];
  localStorage.removeItem("cartItem");
}

export const Update_quant=(state,item)=>{
state.cart.map(it=>{
  if(it.product._id=== item.product._id){
    it.quantity++;
  }
});
 localStorage.setItem("cartItem", JSON.stringify(state.cart));

}
export const Decrease_quant=(state,item)=>{
  state.cart.map((it) => {
    if (it.product._id === item.product._id && it.quantity >1) {
      it.quantity--;
    }
  });
  localStorage.setItem("cartItem", JSON.stringify(state.cart));
}