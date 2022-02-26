import Cart_ItemResolver from "./cart_item/cart_item.resolver";
import DiscountResolver from "./discount/discount.resolver";
import Order_DetailsResolver from "./order_details/order_details.resolver";
import Order_ItemsResolver from "./order_items/order_items.resolver";
import Payment_DetailsResolver from "./payment_details/payment_details.resolver";
import ProductResolver from "./product/product.resolver";
import Product_CategoryResolver from "./product_category/product_category.resolver";
import Product_InvetoryResolver from "./product_inventory/product_inventory.resolver";
import Shopping_SessionResolver from "./shopping_session/shopping_session.resolver";
import UserResolver from "./user/user.resolver";
import User_AddressResolver from "./user_address/user_address.resolver";
import User_PaymentResolver from "./user_payment/user_paymente.resolver";
// Important: Add all your module's resolver in this
export const resolvers: [Function, ...Function[]] = [
  UserResolver,
  Cart_ItemResolver,
  DiscountResolver,
  Order_DetailsResolver,
  Order_ItemsResolver,
  Payment_DetailsResolver,
  ProductResolver,
  Product_CategoryResolver,
  Product_InvetoryResolver,
  Shopping_SessionResolver,
  User_PaymentResolver,
  User_AddressResolver
];