<script setup lang="ts">
import { useSession, login } from '@/model/session';
import { ref } from 'vue';


const session = useSession();

</script>

<template>
    
        <div class="navbar-item" v-if="session == null">
            Welcome, {{ session.user.name }}
            (<a @click="$event => session.user = null">logout</a>)
              <a class="button is-primary" @click="login">
                <span class="icon">
                  <i class="fas fa-user">

                  </i>
                </span>
                <strong> Sign Up</strong>
    
              </a>
            </div>
            <div class="navbar-item" v-else>
              <a class="button is-light">
                <span class="icon">
                  <i class="fas fa-user">

                  </i>
                </span>
                <strong> Login In</strong>
    
              </a>
            </div>
    
</template>



<style scoped>

</style>