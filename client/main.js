import { Meteor } from 'meteor/meteor'  //server methods

//import 'vue-clicky'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { mapState } from 'vuex'

import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)
Vue.config.meteor.freeze = true

import GrapherVue from 'meteor/herteby:grapher-vue'
Vue.use(GrapherVue)

import lodash from 'lodash'
_ = lodash


const store = new Vuex.Store({
  state: {
    loaded:0,
    fullyLoaded:0,
    TILESETS:{}, FLDS:{}, RECS:{}, APPS:{},
    actualTileSetNO:0, 
    count: 1
  },

  mutations: {
    increment (state) {
      state.count++
    },

    load(state) {
        Meteor.call("tileSets",(err, res) => {
           if (err) {
              alert(err);
           } else {
            state.TILESETS=res
            state.loaded++
           }          
        }) //call
        Meteor.call("flds",(err, res) => {
           if (err) {
              alert(err);
           } else {
            state.FLDS=res
            state.loaded++
           }          
        }) //call
        Meteor.call("recs",(err, res) => {
           if (err) {
              alert(err);
           } else {
            state.RECS=res
            state.loaded++
           }          
        }) //call
        Meteor.call("apps",(err, res) => {
           if (err) {
              alert(err);
           } else {
            state.APPS=res
            state.loaded++
           }          
        }) //call
        // All loads are done state.loaded will typically be >1 
        let timerId = setInterval(() => {if (state.loaded=4)               
state.fullyLoaded=true
clearInterval(timerId)
new Vue({ 
	el:'#app',
    store,                     //inject store in all children components
render: h => h('layout')

})

} , 10);
        

    },

  }, //mutations

  actions: {

  } // actions
}) 

store.commit('load')



//  const MMtileSets new Mongo.Collection(null)
//     state.tilesSets.tileSets.forEach(doc => {
//     MMtileSets.insert(doc)
//   });








//Testing if Vue components can be used in <head>. Turns out they can :D
//	render(h){
//		return h('title','Meteor + Grapher + Vue')
//	}

