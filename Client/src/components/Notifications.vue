<script setup lang="ts">
    import {useSession} from '@/model/session';
    import {ref} from 'vue';

    const session = useSession();

    const isActive = ref(false);
</script>

<template>
    <div class = "notifications">
        <button class="button is-primary" @click="$event => isActive = !isActive">
            <span class="icon">
                <i class = "fas fa-bell fa-lg" :class=" {'fa-beat-fade': session.isLoading}"></i>
            </span>

        </button>
        <div class="notification-list" v-show="isActive">
            <div v-for="msg in session.messages" :class="'notification is-light is-${msg.type})'">
                <button class ="delete"></button>
                {{ msg.msg }}

            </div>
        </div>

    </div>
</template>



<style scoped>

.notifications {
    position: relative;
}
.notification-list {
    position: absolute;
    margin-top: 5px;
    width: 300px;
    background-color: white;
    height: 300px;
    
}

</style>