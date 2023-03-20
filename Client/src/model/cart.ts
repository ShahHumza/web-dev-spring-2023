import { ref } from "vue";
import type { Product } from "./products";

const cart = ref([] as CartItem[]);

export function useCart() {
    return cart;
}

export interface CartItem {
    productId: number;
    product: Product;
    quantity: number;

}

export function addToCart(product: Product){
    const item = cart.value.find(p) => product.productId === product.id)
    if(item) {
        item.quantity++;
    } else {
        cart.value.push({
            prodcutId: product.id,
            product,
            quanttity: 1,
        });
    }
}

