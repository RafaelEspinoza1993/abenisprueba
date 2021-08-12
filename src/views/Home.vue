<template lang="pug">
  section#home
    b-loading(:is-full-page="true" v-model="loading" :can-cancel="false")
    .columns.is-multiline.is-centered.is-vcentered.bord-bottom
      .column.is-2.bord-right
        LogoComponent
      .column.is-3.is-offset-6
        BusquedaComponent
      .column.is-1
        CarritoComponent
    .columns.is-multiline.is-centered
      .column.bord-right.is-2
        CategoriasComponent
      .column.is-10
        .container.is-fluid
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
  mounted() {
      this.getProduct
      this.getCategoryProduct
  },
}
</script>
<style lang="scss">
  .bord-bottom{
    border-bottom: 1px solid black;
  }
  .bord-right{
    border-right: 1px solid black;
  }
</style>