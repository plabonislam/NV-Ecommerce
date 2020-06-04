    export const cartItemcount = (state)=>{
        return state.cart.length;
    }
    export const cartPrice =(state)=>{
    let  price=0;
     state.cart.map(item=>{
         price+=item.quantity * item.product.price;
     });
     return price;
    }