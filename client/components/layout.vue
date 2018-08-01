<template>
<div>
   <div v-if="dataLoaded && dataLded" v-for="tile in tiles" :style="tile.style">
          {{ tile.zone }}
   </div> 
</div> 
</template> 

<script>
import {Meteor} from 'meteor/meteor'
export default {

data() {return {
   dataLoaded:false,
   tiles:{},
   wt: document.documentElement.clientWidth-418,
   ht: document.documentElement.clientHeight-98
   }
},
//here
computed: {
      dataLded() {if (this.$store.state.fullyLoaded && (typeof(this.$store.state.TILESETS) !=='undefined') 
             && this.$store.state.count) {
             this.tiles=this.$store.state.TILESETS[this.$store.state.actualTileSetNO].tiles
             this.dataLoaded=true 
             return true}
      },  
        // return this.$store.state.fullyLoaded && typeof(this.$store.state.TILESETS) !=='undefined'},

//   tiles() { if (this.dataLoaded) {return }
//            else {return null} 
//   },

},  //computed 

methods: {


   winResize (event) {
      this.wt = document.documentElement.clientWidth-418
      this.ht = document.documentElement.clientHeight-98
   }

}, //methods

mounted: function () {
 //  let timerId = setInterval(() => {this.dataLded} , 100);
 // setTimeout(() => { clearInterval(timerId)}, 5000);

  window.addEventListener('resize', this.winResize)
},
beforeDestroy: function () {
  window.removeEventListener('resize', this.winResize)
}

}  //export    
</script>


