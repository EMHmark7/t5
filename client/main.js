import { Meteor } from 'meteor/meteor'  //server methods

//import 'vue-clicky'
import Vue from 'vue'
import Vuex from 'vuex'
import { mapState, mapGetters } from 'vuex'
Vue.use(Vuex)

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
    TILESETS:[], FLDS:{}, RECS:{}, APPS:{},
    actualTileSetNO:0, 
    count: 1
  },

  mutations: {

    recievedTileSets (state, res) {
      state.TILESETS = res;
    },

    recievedFlds (state, res) {
      state.FLDS = res;
    },

    recievedRecs (state, res) {
      state.RECS = res;
    },

    recievedApps (state, res) {
      state.APPS = res;
    },

  }, //mutations

  actions: {

   loadTileSets ({ commit }) {
      return new Promise((resolve, reject) => {
        Meteor.call("tileSets",(err, res) => {
          if (err) return reject(err);

          commit('recievedTileSets', res);
          resolve();
        })
      })
    },

    loadFlds ({ commit }) {
      return new Promise((resolve, reject) => {
        Meteor.call("flds",(err, res) => {
           if (err) return reject(err);

           commit('recievedFlds', res);    
           resolve();
        })
      })
    },

    loadRecs ({ commit }) {
      return new Promise((resolve, reject) => {
        Meteor.call("recs",(err, res) => {
           if (err) return reject(err);

           commit('recievedRecs', res);  
           resolve();      
        })
      })
    },

    loadApps ({ commit }) {
      return new Promise((resolve, reject) => {
        Meteor.call("apps",(err, res) => {
           if (err) return reject(err);

           commit('recievedApps', res);   
           resolve(); 
        })
      })
    }
  }, // actions

  getters: {
    tiles (state) {
      return state.TILESETS[state.actualTileSetNO][tiles]  //got more precise with index and [tiles]
    }
  }

}) 

new Vue({ 
	el:'#app',
    store,                    
render: h => h('layout')

})


