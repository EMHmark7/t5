// test for rec
<template>
<div>rec
      <component :is="tx"></component>
</div> 
</template> 

<script>

export default {

data() {return {
   }
},

computed: {

},  //computed 

methods: {
tx() {'tx'}    
}, //methods


}  //export    
</script>
