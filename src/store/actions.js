import  axios from "axios" ;

export const getPr=({commit})=>{
    console.log("yesssssss");
axios.get("http://127.0.0.1:3000/products").then((respnse) => {
  commit("Data_Updated", respnse.data);
});

}

export const getProduct=({commit},productId)=>{
 axios.post(`http://127.0.0.1:3000/products/${productId}`).then((response)=>{
console.log(response.data);  
 commit("Show_Product",response.data);
 })

}
export const AddProductCart=({commit}, {product,quantity,ck})=>{
  console.log(quantity,"yesssssssssspppppppppppppppppppp");
commit("Update_cart",{product,quantity,ck});

}
export const getCartItems=({commit},cartItem)=>{
  
  commit("Set_cart", cartItem);
}
export const removeCart=({commit},item)=>{
  console.log("Remove Item",item);
  commit("Remove_Item",item);
}
export const clearCart=({commit})=>{
  commit("Clear_Item");
}
export const increase=({commit},item)=>{
  commit("Update_quant",item);
}
    
export const decrease=({commit},item)=>{
  commit("Decrease_quant",item);
}