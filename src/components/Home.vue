<template>
    <div>
        <div class="container">
            
            <app-top-menu></app-top-menu>
            <br />
            <br />
            <br />
            <br />
            <router-view></router-view>

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
    
</style>