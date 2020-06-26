import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import userList from "./components/userList.js"

Vue.component("user-list", userList)
var app = new Vue({
    el:'#app',
    data:{
        message:"Hello Vue",
        newName:"Name",
        newLastName:"Lastname",
        newAge:"18",
        users:[
            {
                nombre:"John",
                apellido:"Doe",
                edad:"25"
            },
            {
                nombre:"Mary",
                apellido:"Doe",
                edad:"22"
            },
        ]
    },
    methods:{
        addUser(){
            const nombre = this.newName;
            const apellido=this.newLastName;
            const edad =this.newAge;
            const newUser={
                nombre: nombre,
                apellido: apellido,
                edad: edad,
            };
            this.users.push(newUser);

        },
     removeUser(index){
        this.users.splice(index-1,1);
     },
     checkSwitch(){
        // Get the checkbox
        var checkBox = document.getElementById("customSwitch1");
        var table = document.querySelector("#tableDiv");
        if (checkBox.checked == true){
          table.classList.remove("Hide");
          table.classList.add("Show");
        
        } else {
            table.classList.remove("Show");
            table.classList.add("Hide");
            
        }
      }
      
    }
})