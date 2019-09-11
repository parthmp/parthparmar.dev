<template>
    <div class="leftPadding rightPadding topDeskMargin">
        <div class="row">
            
            <div class="col col-9">
                <div>
                    <h1>{{ first_heading }}<span v-if="showFirstCursor" class="cursor_blink">|</span></h1>
                    <h2>{{ second_heading }}<span v-if="showSecondCursor" class="cursor_blink2">|</span></h2>
                </div>
                <br>
                <br>
            </div>
            <div class="col col-3">
                <div class="center" v-if="showContent"><img src="../assets/images/me.jpg" class="img img-rounded img-border-green img-myface" alt="Parth Parmar"></div>
            </div>
        </div>
        <br />
        <transition name="fade" mode="out-in">
        <div class="content" v-if="showContent">
            <h3>What i do</h3>
            <p>I'm developing softwares since around 2011-12. My first encounter of computer or a programming language in general was with <a href="https://en.wikipedia.org/wiki/Logo_(programming_language)" target="_blank">Logo (programming language)</a>.</p>
            <br>
            <p>Because of my curiousity, I was curious about how computers work and how softwares were made. As days passed i became passioned about it and eventually became a self taught computer programmer, Programming became my hobby and then the profession itself.</p>
            <br>
            <p>Nowadays, I work with web programming languages such as <a href="https://en.wikipedia.org/wiki/PHP" target="_blank">PHP</a> and <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> most of times for the work (See <router-link to="/resume">Resume</router-link>), But it doesn't limit me, I also can and able to work with languages such as, <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a>, <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">Java</a>, <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://en.wikipedia.org/wiki/Visual_Basic" target="_blank">Visual Basic</a> and <a href="https://en.wikipedia.org/wiki/Perl" target="_blank">Perl</a>. I am able to create Web applications, Desktop applications and Android applications as well.</p>
            <br>
            <p>I have worked from old lagacy systems to new cutting edge programming technologies with complex applications and systems which required good planning and quality code. Being a programmer means having a new problem to solve each day which excites me, Programming is about thinking and solving problems. Speaking of my working method, I prefer to work remotely. It is digital age and programmers can work from anywhere in the world with just a computer and good internet connection, It also provides the time flexibility and allows you to work in pajamas :)</p>
            <br>
            <br>
            <br>
            <h3>Whom i have worked with</h3>
            <p>As being an indian, I have worked with local indian companies but most of times i have worked on outsourced projects from foreign companies and individuals mostly from United States and Canada. I have worked with people from different 21 countries so far. The projects varied from simple web sites to large complex projects.</p>
            <br>
            <p>Most of my work is not open source / Not visible, Because of agreements i can not show the projects nor code to anyone, However in <router-link to="/resume">resume</router-link> i have mentioned my all job history.</p>
            <br>
            <br>
            <br>
            <h3>My Hobbies</h3>
            <p>Except programming, I love music and movies, There won't be a day when i don't listen music, I also listen music while working and it helps me to concentrate better as it doesn't allow me to hear conversations of other people. For movies, I look up details for movie before i watch, to make sure i don't spend 2 hours for nothing :)</p>
            <br>
            <br>
            <br>
            <h3>Some of the reviews clients gave me on <a href="https://www.upwork.com/freelancers/~01bed55ae9935fc4d2" target="_blank">upwork</a></h3>
            <p><i>Great job again! Very skilled freelancer with great communication and work ethic.<br />~Niki Singh , Nationstores LLC (TX, USA)</i></p>
            <br>
            <br>
            <p><i>Parth was extremely professional from A to Z. Recommended. Thanks Parth!<br />~Kieran Duffey , (Brisbane, Australia)</i></p>
            <br>
            <br>
            <p><i>It was simply great from beginning to end. Parth was very good at keeping me in the loop. He even did more than was asked of him. I was very very glad with his work. Strongly recommend to anyone.<br />~Michael Laplume , (Mansonville, Canada)</i></p>
            <br>
            <br>
            <p><i>Job was done in timely manner with high quality. Thank you!<br />~Andrew Mar , (Chicago, USA)</i></p>
            <br>
            <br>
            <p><i>I appreciate Parth's hard work and quick turnaround! Looking forward to the next project<br />~John Verd , (USA)</i></p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
        </transition>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';

    export default{
        
        data : function(){
            return {
                first_heading : '',
                first_heading_completed : 'My name is Parth,',
                second_heading: '',
                second_heading_completed : 'And i am a programmer.',
                min : 200,
                max : 100,
                showFirstCursor:true,
                showSecondCursor:false,
                showContent:false,
                alreadyLoaded : false
            };
        },
        methods : {
            runSecondHeading : function(){
                let milies = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;
                let ray = this.second_heading_completed.split("");
                ray.push('.');
                let counter = 0;
                let stopme = setInterval(() => {
                    this.second_heading += ray[counter];
                    counter++;
                    if((counter+1) >= ray.length){
                        clearInterval(stopme);
                        this.showSecondCursor = false;
                        this.showContent = true;
                        this.$store.commit('changeLoaded', true);

                    }
                }, milies);
            }
        },
        created : function(){
            this.alreadyLoaded = this.$store.getters.getLoaded;

            if(this.alreadyLoaded){
                this.showFirstCursor = false;
                this.showSecondCursor = true;
                this.showSecondCursor = false;
                this.showContent = true;
                this.first_heading = this.first_heading_completed;
                this.second_heading = this.second_heading_completed;
            }else{
                let milies = Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;
                let ray = this.first_heading_completed.split("");
                ray.push(',');
                let counter = 0;
                let stopme = setInterval(() => {
                    this.first_heading += ray[counter];
                    counter++;
                    if((counter+1) >= ray.length){
                        clearInterval(stopme);
                        this.showFirstCursor = false;
                        this.showSecondCursor = true;
                        this.runSecondHeading();
                    }
                }, milies);
            }

            
        }

    }

</script>

<style scoped>
   @import '../assets/styles/common.css';
   @import '../assets/styles/grids.css';
   @import '../assets/styles/HomePage.css';
  
    .center{
        width:250px;
        margin:auto;
    }
   .cursor_blink{

        position: absolute;
       
        font-size: 6rem;
        z-index: 9999;
        animation:blinkingText 0.9s infinite;

        @mixin isMedium{
            font-size: 10rem;
        }

   }

   .cursor_blink2{

        position: absolute;
       
        font-size: 6rem;
        z-index: 9999;
        animation:blinkingText 0.9s infinite;

        @mixin isMedium{
            font-size: 5rem;
            //bottom:17.5rem;
        }

   }

    @keyframes blinkingText{
        0%{
            color: #36dd03;
        }
        49%{
            color: transparent;
        }
        50%{
            color: transparent;
        }
        99%{
            color:transparent;
        }
        100%{
            color: #36dd03;
        }
    }
    h3{
        
        font-size: 1.4rem;
        margin-bottom:0.5rem;
    }
    .fade-enter-active, .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>