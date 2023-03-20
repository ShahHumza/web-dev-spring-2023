<script setup lang="ts">
import { ref } from "vue";
import { getProducts, type Product } from "../model/products"
import { addToCart } from '../model/cart';

const products = ref(getProducts());

</script>

<template>
    <div>
        <h1 class ="title">
            These will be the products
        </h1>
        <h2 class ="subjects">
            These will be the subjects
        </h2>
<!-- double {{}} for pritning a output -->
        <div class="product-list">
            <div class= "product" v-for="product in products" :key="product.id">
                <img :src="product.thumbnail" alt="product.title" />
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <p>
                     <span>$</span>
                     <i class="price">
                         {{ product.price }}
                     </i>
                   
                </p>
                <button class="button is-primary">+</button>

            </div>
        </div>


    </div>
</template>



<style scoped>

    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: rgb(103, 192, 230);
    }

    .product {
        width: 10rem;
        padding: 1rem;
        margin: 1rem;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 5px 0 rgba(0,0);
    }

</style>