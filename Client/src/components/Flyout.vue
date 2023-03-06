<script setup lang="ts">

</script>
<template>
    <div class="flyout">
        Flyout
    </div>
</template>



<style scoped>

    .flyout {
        position: fixed;
        top:52px;
        right: -18rem;
        width: 20rem;
        height: 100vh;
        background-color: white;
        box-shadow: 0 0 5px 0 black;
        transition: right 0.5s;
    }

    .flyout:hover {
        right: 0;
    }

</style>