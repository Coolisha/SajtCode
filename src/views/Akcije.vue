<script>
import Nav from './Nav.vue'
import axios from 'axios';
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmarkCircle, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
    data() {
        return {
            akcNov: "",
            akcije: "",
            novosti: "",
            sid: "",
            imgId: "",
            openPopup: false,
            url: "",
            date: "",
        }
    },
    components: {
        Nav,
        FontAwesomeIcon
    },
    methods: {
        ...mapActions(useBazeniStore, ['getCookie']),
        getUrl(image) {
            this.url = image.akcije_novosti_imageURL
            this.imgId = image.akc_id
            this.openPopup = !this.openPopup
            document.querySelector(".top").style.display = "none"
            document.querySelector(".akcijeHeader").style.filter = "blur(20px)"
            document.querySelector(".akcNovWrapper").style.filter = "blur(20px)"
            document.querySelector(".novostiHeader").style.filter = "blur(20px)"
            document.querySelector(".akc").style.filter = "blur(20px)"
            document.querySelector(".akcijeText").style.filter = "blur(20px)"
        },
        noBlur() {
            document.querySelector(".akcijeHeader").style.filter = "none"
            document.querySelector(".akcNovWrapper").style.filter = "none"
            document.querySelector(".novostiHeader").style.filter = "none"
            document.querySelector(".akc").style.filter = "none"
            document.querySelector(".top").style.display = "block"
        },
        brisanjeAkcije(id) {
            let sid = this.getCookie("sid")
            let brisanje = axios.delete('https://091v123.mars2.mars-hosting.com/API/admin/adminAkcije', {params: {
                sid: sid,
                deleteId: id
            }})
            this.openPopup = !this.openPopup
        },
        getDate(isoDate) {
            const dateObj = new Date(isoDate);
            const day = dateObj.getDate().toString().padStart(2, '0'); 
            const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
            const year = dateObj.getFullYear(); 
            this.date =` ${day}-${month}-${year}`;
            return this.date
        }
    },
    async mounted() {
        this.sid = this.getCookie("sid")
        try {
            let akcijeNovosti = await axios.get('https://091v123.mars2.mars-hosting.com/API/akcijeNovosti')
            this.akcNov = akcijeNovosti.data.q;
        } catch (error) {
            console.log(error);
        }
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
    },
    created() {
        library.add(faCircleArrowUp, faXmarkCircle)
    }
}
</script>

<template>
    <Nav />
<div class="akcije">
    <div class="akcijeHeader">
        Akcije
    </div>
    <div v-for="akcija in this.akcNov" class="akc">
        <div class="akcNovWrapper" v-if="akcija.akc_type == 'akcije'">
            <div class="akcNov">
                <img :src="akcija.akcije_novosti_imageURL" alt="akcije_slika">
                <p class="akcijeText">{{ akcija.akc_text }}</p>
                <p class="akcijeDatum">Datum objave: {{ getDate(akcija.akc_date) }}</p>
            </div>
            <button class="brisanjeAkcijeBtn" @click="getUrl(akcija)" v-if="this.sid">Obriši akciju</button>
        </div>
    </div>
    <div class="novostiHeader">
        Novosti
    </div>
    <div v-for="akcija in this.akcNov" class="akc">
        <div class="akcNovWrapper" v-if="akcija.akc_type == 'novosti'">
            <div class="akcNov">
                <img :src="akcija.akcije_novosti_imageURL" alt="novosti_slika">
                <p class="akcijeText">{{ akcija.akc_text }}</p>
                <p class="akcijeDatum">Datum objave: {{ getDate(akcija.akc_date) }}</p>
            </div>
            <button class="brisanjeAkcijeBtn" @click="getUrl(akcija)" v-if="this.sid">Obriši novost</button>
        </div>
    </div>
    <div v-if="this.openPopup"  class="galerijaAdminPopup">
        <FontAwesomeIcon class="xmark" icon="fa-solid fa-xmark-circle"
        @click="noBlur(); this.openPopup = !this.openPopup"></FontAwesomeIcon>
        <img class="akcImgPopup" :src="this.url" alt="slike">
        <p>Da li ste sigurni da želite da obrišete ovu akciju/novost ?</p>
        <div class="popupBtns">
            <button class="yesBtn" @click="brisanjeAkcije(this.imgId); noBlur()">Da</button>
            <button class="noBtn" @click="noBlur();this.openPopup = !this.openPopup">Ne</button>
        </div>
    </div>
    <a  class="top" href="#top">
        <FontAwesomeIcon class="toTop" icon="fa-solid fa-circle-arrow-up"></FontAwesomeIcon>
    </a>
</div>
</template>

<style>
.akcijeHeader, .novostiHeader{
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0.5em;
}
.akcijeText{
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 1.5em;
}
.akcijeDatum{
    font-family: Quicksand;
    margin-bottom: 1em;
    font-size: 0.8em;
}
.akcNov{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
}
.akcNov img{
    width:85%;
    margin-bottom: 1em;
}
.akcNovWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.akcijeText{
    flex-basis: 50%;
    font-family: Comfortaa;
    line-height: 1.5em;
}
.brisanjeAkcijeBtn{
    background-color: transparent;
    border: 2px solid rgb(206, 19, 19);
    padding: 10px;
    font-family: Quicksand;
    cursor: pointer;
}
.akcImgPopup {
    width: 30%;
    border-radius: 20px;
}

@media (max-width: 800px) {
    .akcImgPopup{
        width: 90%;
    }
}
@media (max-width:480px){
    .akcNov img{
    width:95%;
    
}
}
</style>