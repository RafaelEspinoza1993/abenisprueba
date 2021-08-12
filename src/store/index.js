import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    categorys: [],
    loading:false,
    detailproduct: {
      product:null,
      selected: null
    },
    categoryselect: null,
    bolsa:[],
    numerodeproducto: 0,
  },
  mutations: {
    setProduct(state, product){
      state.products = product
    },
    setCategoryProduct(state, category){
      state.categorys = category
    },
    setLoading(state, loading){
      state.loading = loading
    },
    setProductDetail(state, product){
      let result = state.products.find(data => data.id == product.product)
      state.detailproduct.product = result
      state.detailproduct.selected = product.selected
    },
    setSelectCategory(state, category){
      console.log(category);
      let result = state.categorys.find(data => data.id == category)
      console.log(result);
      state.categoryselect = result
    },
    SetBolsa(state, selected){
      state.bolsa.push({
        id: state.numerodeproducto++,
        product: selected.product,
        stock: selected.stock
      })
    },
    SetUnsetBolsa(state, selected){
      let position = state.bolsa.findIndex( data => data.id == selected)
      state.bolsa.splice(position,1)
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
    async getCategoryProduct({commit}){
      commit("setLoading", true)   
      axios
      .get('http://sva.talana.com:8000/api/product-category/?format=json')
        .then(response => {
          commit("setCategoryProduct", response.data)      
        }).catch(error => {
          console.log(error)
        })
        commit("setLoading", false)
    },
    getProductDetail({commit}, payload){
      commit("setProductDetail", payload)
    },
    getSelectCategory({commit}, payload){
      commit("setSelectCategory", payload)
    },
    getBolsa({commit}, payload){
      commit("SetBolsa", payload)
    },
    getUnsetBolsa({commit}, payload){
      commit("SetUnsetBolsa", payload);
    }
  }
})
