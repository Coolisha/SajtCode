<script>
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmarkCircle, faArrowCircleLeft, faCircleArrowUp, faRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import Nav from './Nav.vue'

export default {
    data() {
        return {
            url: "",
            openPopup: false,
            galerijaSelection:[],
            naslov:"",
        }
    },
    components: {
        FontAwesomeIcon,
        Nav,
    },
    methods: {
        getUrl(image) {
            this.url = image.files_imageURL
            this.openPopup = !this.openPopup
            document.querySelector(".top").style.display = "none"
            document.querySelector(".galerijaWrapper").style.filter = "blur(15px) brightness(95%)"
            document.querySelector(".galerijaHeader").style.filter = "blur(15px) brightness(95%)"
            document.querySelector(".nav1").style.filter = "blur(15px) brightness(95%)"
            document.querySelector(".nav2").style.filter = "blur(15px) brightness(95%)"
        },
        noBlur() {
            document.querySelector(".galerijaWrapper").style.filter = "none"
            document.querySelector(".galerijaHeader").style.filter = "none"
            document.querySelector(".top").style.display = "block"
            document.querySelector(".nav1").style.filter = "none"
            document.querySelector(".nav2").style.filter = "none"
        },
        async priprema() {
            let selectedImages = localStorage.getItem('selected');
            let selectedText = localStorage.getItem('selectedText');
            this.naslov=selectedText;
            try {
                let images =await axios.get('https://091v123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: selectedImages
                    }
                })
                this.galerijaSelection = images.data.q
            } catch (error) {
                console.log(error);
            }

        },
    },
    mounted() {
        window.addEventListener("scroll", function () {
            let scrollHeight = this.window.pageYOffset
            if (this.document.querySelector(".toTop")!=null){
            if (!this.openPopup) {
                if (scrollHeight > 50) {
                this.document.querySelector(".toTop").style.display = "block"
            }
            else {
                this.document.querySelector(".toTop").style.display = "none"
            }
            }
        }
        })
        this.priprema();
    },
    created() {
        library.add(faXmarkCircle, faArrowCircleLeft, faCircleArrowUp, faRotate)
    }
}
</script>

<template>
    <Nav />
    <div id="top">
        <div class="galerijaHeader">
            <p>{{naslov}}</p>
        </div>
        <div class="galerijaWrapper">
            <div v-for="image in this.galerijaSelection" @click="getUrl(image)" class="galerijaSekcija">
                <img class="galerijaImg" :src="image.files_imageURL" alt="slike" loading="lazy">
            </div>
        </div>
        <div v-if="this.openPopup" class="galerijaPopup">
            
            <FontAwesomeIcon class="xmark" icon="fa-solid fa-xmark-circle"
                @click="noBlur(); this.openPopup = !this.openPopup"></FontAwesomeIcon>
            <img class="galerijaImgPopup" :src="this.url" alt="slike">
            <p>Zarotirajte telefon <FontAwesomeIcon icon="fa-solid fa-rotate"></FontAwesomeIcon> </p>
        </div>
        <a  class="top" href="#top">
            <FontAwesomeIcon class="toTop" icon="fa-solid fa-circle-arrow-up"></FontAwesomeIcon>
        </a>
    </div>
</template>

<style>
* {
    scroll-behavior: smooth;
}

#top {
    margin: 0;
}

.galerijaHeader {
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0 0.5em;
    position: relative;
}

.backIcon {
    position: absolute;
    left: 1em;
    color: rgb(46, 94, 154);
    cursor: pointer;
}

.galerijaHeader p {
    padding-top: 2%;
}

.galerijaWrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90vw;
    margin: 0 auto;
    position: relative;
}

.galerijaSekcija {
    flex-basis: 31%;
    margin: 1em 0;
}

.galerijaImg {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
}

.galerijaPopup {
    width: 100vw;
    height: 100vh;
    display: flex;
    z-index: 150;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
}

.galerijaPopup p{
    display:none;
    font-size: 1.3em;
    margin-top: 1em;
    font-family: Quicksand;
    font-weight: bolder;
    color: white;
    text-shadow: -2px -2px 0 #000, -2px 2px 0 #000,2px 2px 0 #000;
}

.galerijaImgPopup {
    width: 70%;
    border-radius: 20px;
}

.xmark {
    position: absolute;
    top: 40px;
    right: 40px;
    align-self: flex-start;
    font-size: 3em;
    color: #000;
    cursor: pointer;
}

.toTop {
    font-size: 3em;
    color: rgb(46, 94, 154);
    cursor: pointer;
    position: fixed;
    bottom: 1em;
    right: 0;
    display: none;
}

@media (max-width: 1024px) {
    .galerijaSekcija{
        flex-basis: 48% !important;
    }
    .galerijaImgPopup{
        width: 80%;
        margin:0 auto ;
    }
}

@media (max-width: 480px) {
    .galerijaWrapper{
        justify-content: center;
    }
    .galerijaSekcija{
        flex-basis: 80% !important;
    }
    .galerijaImgPopup{
        width: 90%;
    }
    .galerijaPopup p{
        display: block;
    }
}
@media (orientation: landscape){
    .xmark{
        right: 40px;
        font-size: 2em;
    }    
    .galerijaPopup p{
        display: none;
    }
}
</style>