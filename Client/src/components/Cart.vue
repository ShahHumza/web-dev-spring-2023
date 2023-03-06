<script setup lang="ts">
import { useCart }from '@/model/cart';

const cart = useCart();


</script>

<template>
    <div class="cart">
        <h1> Cart</h1>
        <p>{{ cart.length }}</p>
        <div class="cart-item" v-for="item in cart">
            <p>{{ item.Product.title }}</p>
            <p>{{ item.Product.price }}</p>
            <p>{{ item.quantity }}</p>

        </div>

    </div>
</template>



<style scoped>

</style>