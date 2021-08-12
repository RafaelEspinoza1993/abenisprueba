import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    loading:false,
    detailproduct: null
  },
  mutations: {
    setProduct(state, product){
      state.products = product
    },
    setLoading(state, loading){
      state.loading = loading
    },
    setProductDetail(state, product){
      let result = state.products.find(data => data.id == product)
      state.detailproduct = result
    }
  },
  actions: {
    async getProduct({commit}){
      commit("setLoading", true)   
      axios
      .get('http://sva.talana.com:8000/api/product/?format=json')
        .then(response => {
          commit("setProduct", response.data)      
        }).catch(error => {
          console.log(error)
        })
        commit("setLoading", false)
    },
    getProductDetail({commit}, payload){
      commit("setProductDetail", payload)
    }
  }
})
