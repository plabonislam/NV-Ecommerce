import Home from "./pages/Home.vue"
import Product from "./pages/Product.vue"
import Order  from "./pages/Order.vue"
export default [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/product/:id",
    component: Product,
    name: "product",
    props: true,
  },
  {
    path: "/order",
    component: Order,
    name: "order",

  },
];