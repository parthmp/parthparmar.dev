<template>
    <div class="top-menu">
        
          
        <div class="top-menu__launcher">
            <a href="javascript:;" @click="lateRespond"><i class="fa fa-bars"></i>&nbsp;Menu</a>
        </div>
        <transition name="fade">
            <ul class="top-menu__menu-list" :class="{showMenuClass : showMenu}" :style="{opacity : opacityNum}">
                <li><router-link @click.native="lateRespond" to="/">Home</router-link></li>
                <li><router-link @click.native="lateRespond" to="/resume">Resume</router-link></li>
                <li><router-link @click.native="lateRespond" to="/contact">Contact Me</router-link></li>
            </ul>
        </transition>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';

export default {
    data : function(){
        return {
            showMenu:false,
            opacityNum : 0
        };
    },
    methods : {
        openMenu : function(){
             setTimeout(() => {

                    this.showMenu = true;

                    let opacityVal = setInterval(() => {
                        
                        this.opacityNum += 0.1;

                        if(this.opacityNum >= 1){
                            this.opacityNum = 1;
                            clearInterval(opacityVal);
                        }

                    }, 50);

                    
                    
                }, 100);
        },
        closeMenu : function(){

            setTimeout(() => {

                let opacityVal = setInterval(() => {
                    
                    this.opacityNum -= 0.1;

                    if(this.opacityNum <= 0){
                        clearInterval(opacityVal);
                        this.opacityNum = 0;
                        this.showMenu = false;
                    }

                }, 30);

                
                
            }, 100);

        },
        lateRespond : function(){
           
            if(!this.showMenu){
               
               this.openMenu();

            }else{

                this.closeMenu();
                
            }

            
        }
    }
}
</script>

<style scoped>
    
    @import '../assets/styles/top-menu.css';
    
</style>