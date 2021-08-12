<template lang="pug">
  section#home
    b-loading(:is-full-page="true" v-model="loading" :can-cancel="false")
    .columns.is-multiline.is-centered.is-vcentered.menu
      .column.is-2.container.is-fluid
        LogoComponent
      .column.is-3.is-offset-6.container.is-fluid
        BusquedaComponent
      .column.is-1.container.is-fluid
        CarritoComponent
    .columns.is-multiline.is-centered
      .column.is-2.container.is-fluid
        CategoriasComponent
      .column.is-10.container.is-fluid
        ListadeproductosComponent
</template>

<script>
import BusquedaComponent from '@/components/Menusuperior/BusquedaComponent.vue'
import CarritoComponent from '@/components/Menusuperior/CarritoComponent.vue'
import CategoriasComponent from '@/components/Menulateral/CategoriasComponent.vue'
import LogoComponent from '@/components/Menulateral/LogoComponent.vue'
import ListadeproductosComponent from '@/components/Contenido/ListadeproductosComponent.vue'
import { mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    ListadeproductosComponent,
    BusquedaComponent,
    CarritoComponent,
    CategoriasComponent,
    LogoComponent,
  },
  computed: {
    ...mapState(["loading"]),
    ...mapActions(["getProduct", "getCategoryProduct"])
  },
  created() {
      this.getProduct
      this.getCategoryProduct
  },
}
</script>
<style lang="scss">
#home{
  .menu{
    background-color: #051923;;
  }
}
</style>