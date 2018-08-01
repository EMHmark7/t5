// test for app2  -  populates an app 
<template>
<div :style="style">
allo allo
</div>        
</template> 

<script>

export default {
props: {
  appName: String,
},

data() {return {
   }
},

computed: {
style() {return this.$store.state.APPS[this.appName].style}

},  //computed 

methods: {
    
}, //methods


}  //export    
</script>
