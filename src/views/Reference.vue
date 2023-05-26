<script>
import Nav from './Nav.vue'

export default {
    components: {
        Nav,
    }
}
</script>

<template>
    <Nav />
<div class="reference">
    <div class="referenceHeader">
        <p>Reference</p>
    </div>
    <div class="referenceWrapper">
        <div class="referenca">
            <span class="godinaReference">
                2002.
            </span>
            <p>Kopaonik - Hotel Ozon</p>
            <p>Unutrašnji bazen: 5 x 3 x 1.5 m (skimerski)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2003.
            </span>
            <p>Dedinje - Ekonomsko poslanstvo Narodne Republike Kine</p>
            <p>Unutrašnji bazen: 9.92 x 4.54 x 1.26-2.04 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2004.
            </span>
            <p>Petrovac Na Moru - Hotel Montecasa ( 4. jul )</p>
            <p>Spoljni bazen: 17 x 7 x 1.1-1.7 m (prelivni)</p>
            <p>Unutrašnji bazen: 25 x 12 x 1.5 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2004.
            </span>
            <p>Meljine - Vojna bolnica</p>
            <p>Unutrašnji bazen: 10 x 4 x 1.1-1.2 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2005.
            </span>
            <p>Bulbuderska terasa</p>
            <p>Unutrašnji bazen: 10 x 5 x 1.5 m (skimerski)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2006.
            </span>
            <p>Rožaje - Hotel Rožaje</p>
            <p>Unutrašnji: 12 x 6 x 1.45 m  (skimerski)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2008.
            </span>
            <p>Batajnica - Škola plivanja</p>
            <p>Unutrašnji bazen: 15 x 7 x 0.8-1.1 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2008.
            </span>
            <p>Sveti Stefan - hotel</p>
            <p>Spoljašnji bazen: 12 x 6 x 1.5 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2008.
            </span>
            <p>Beograd, Banovo Brdo - MB poslovno stambena kula</p>
            <p>Unutrašnji bazen: 10.43 x 4.3 x 1.5 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2010/2011.
            </span>
            <p>Aqualand Banovci - Aqualand</p>
            <p>Spoljašnji bazen: 30 x 15 x 1.4 m (prelivni)</p>
            <p>Spoljašnji bazen za tobogane: 6 x 6 x 1 m (prelivni)</p>
            <p>Spoljašnji bazen za decu: 9 x 6 x 0.4 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2015.
            </span>
            <p>Avala hotel 1000 Ruža</p>
            <p>Spoljašnji bazen: 15 x 15 x 1.5 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2016.
            </span>
            <p>Zlatibor Apartmani</p>
            <p>Spoljašnji bazen: 12 x 6 x 1.5 m (prelivni)</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2016.
            </span>
            <p>Vrnjačka Banja - Projekat bazena Hotel Slavija</p>
            <p>Kompleks bazena za plivanje</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2017.
            </span>
            <p>Kopaonik - Hotel Putnik </p>
            <p>Unutrašnji bazen: 20 x 4 x 1.5 m (prelivni)</p>
            <p>Unutrašnji bazen za malu decu</p>
            <p>Jakuzzi kada za 6 osoba </p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2018.
            </span>
            <p>Stara Pazova - Javna fontana</p>
            <p>Fontana: 15 x 1.5 m</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2019.
            </span>
            <p>Crna Gora - Bečići projekat hotelskih bazena</p>
            <p>Kompleks 6 bazena za plivanje</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2020.
            </span>
            <p>Pazova - Rezidencijalni otvoreni bazen</p>
            <p>Spoljašnji bazen: 16 x 4.5 m</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2021.
            </span>
            <p>Beograd Diplomatsko naselje - Rezidencijalni otvoreni bazen</p>
            <p>Spoljašnji bazen: 9 x 4.5 m</p>
        </div>
        <div class="referenca">
            <span class="godinaReference">
                2022.
            </span>
            <p>Valjevo - Rezidencijalni otvoreni bazen</p>
            <p>Spoljašnji bazen: 12 x 5 m</p>
        </div>
    </div>
    
</div>
</template>

<style>
.referenceHeader{
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0.5em;
}
.referenceWrapper{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 130vh;
    width: 95vw;
    margin: 0 auto;
}
.referenca{
    font-family: Comfortaa;
    margin-bottom: 1em;
    padding: 0 5px;
    line-height: 1.5em;
    width: 30%;
}
.referenca span{
    font-weight: bold;
}
@media (max-width: 1200px) {
    .referenca{
        width: 33%;
        
    }
}
@media (max-width: 1000px) {
    .referenceWrapper{
        font-size: 0.8em;
    }
}
@media (max-width: 610px) {
    .referenca{
        width: 45%;
    }
    .referenceWrapper{
        height: 200vh;
    }
}

@media (max-width: 480px) {
    .referenca{
        width: 100%;
    }
    .referenceWrapper{
        height: 350vh;
    }
}
</style>