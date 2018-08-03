<template>
<div>hello
   <div v-if="tiles.length" v-for="tile in tiles" :style="tiles.style">
          {{ tiles.zone }}
   </div> 
</div> 
</template> 

<script>
// can also try in template: v-if="typeof(tiles) !=='undefined'"

import {Meteor} from 'meteor/meteor'           
import { mapActions, mapGetters } from 'vuex'  //added from 'vuex'

export default {

data() {return {
   }
}, // data

computed: {                                 
    ...mapGetters([
        'tiles'
    ]) 
}, //computed 

methods: {
      ...mapActions([
        'loadTileSets',
        'loadFlds',
        'loadRecs',
        'loadApps'
      ]),
}, //methods

created () {
   const tileSets = this.loadTileSets();
   const flds = this.loadFlds();
   const recs = this.loadRecs();
   const apps = this.loadApps();

      Promise
        .all([tileSets, flds, recs, apps])
        .then(() => {
          // If you had a loading animation, this is a when you would disable it
        })
    }, //created
}  //export    
</script>


