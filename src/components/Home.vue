<template>
    <div>
        <div class="container">
            
            <app-top-menu></app-top-menu>
            <br />
            <br />
            <br />
            <br />
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>

import TopMenu from './TopMenu';

export default {
    components : {
        appTopMenu : TopMenu
    }
}
</script>

<style>
   
    @import '../assets/styles/common.css';
    
    .fade-enter-active, .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>