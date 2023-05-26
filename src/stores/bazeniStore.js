import { defineStore } from 'pinia'
import axios from 'axios'

export const useBazeniStore = defineStore('bazeni', {
  state: () => {
    return{
      galerijaSelection: [],
      wrongInfo: "",
      isAdmin: 0,
      sid: "",
    }
  },
  actions: {
    setLocalStorageSelection(selectedImages) {
      localStorage.setItem('selected',selectedImages);
      let selectedText;
      switch (selectedImages){
        
        case 'javniS' :
        selectedText = 'Javni bazeni'
        break;
        case 'privatni' :
        selectedText = 'Privatni bazeni'
        break;
        case 'fontane' :
        selectedText = 'Fontane'
        break;
        case 'saune' :
        selectedText = 'Saune'
        break;
        

    }  
    localStorage.setItem('selectedText',selectedText);
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    async login(username, password) {
      this.wrongInfo = null
      try {
        let res = await axios.post('https://091v123.mars2.mars-hosting.com/API/auth/login' , {username, password})
      console.log(res);
      this.sid = res.data.sid
      document.cookie = `sid=${this.sid};expires=1200000;`
      this.isAdmin = res.data.sessionUser.isAdmin
      // console.log(res);
      // console.log(this.sid);
      } catch (error) {
        if(error.response.data.error == 'User login details are incorrect'){
          this.wrongInfo = error.response.data.error
        }
        // this.wrongInfo = error.response.data.error
        console.log(this.wrongInfo);
      }
    },
  }
})
