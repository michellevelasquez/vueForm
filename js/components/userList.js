export default {
    props:["index","nombre",
    "apellido",
    "edad"],
   

  /*  template:`<tr><th scope="row" > {{index}}</th> 
    <td>{{nombre}}</td> 
    <td>{{apellido}}</td>
    <td>{{edad}}</td>
    </tr>`,*/

    
    template:`<tr><th scope="row" > {{index}}</th> 
    <td>{{nombre}}</td> 
    <td>{{apellido}}</td>
    <td>{{edad}}</td>
    <td><button class="delBtn" v-on:click="$emit('user-deleted',index)"> X </button></td>
    </tr>`,
};