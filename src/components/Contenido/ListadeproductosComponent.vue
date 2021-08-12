<template lang="pug">
    #ListadeproductosComponent
        .title.is-size-4.has-text-left Category
        .subtitle.is-size-5.has-text-left Home > Products
        .columns.is-multiline
            .column.is-3(v-for="product in products")
                .card
                    .card-image.boxprincipal(@click="DetailProduct(product.id)")
                        figure.image.is-4by3
                            img(:src='product.photo')
                        p.is-size-5.boxhijo {{ product.stock > 0 ? "Disponible" : "Sin Stock"}}
                    .card-content
                        .has-text-left
                            p.is-size-6 {{ product.name}}
                            p.is-size-6 {{ product.price}}
                    .card-content
                        .columns.is-centered.is-vcentered.is-gapless
                            .column.is-5
                                b-numberinput(expanded controls-position="compact")
                            .column
                                b-button(icon-right="cart-plus" expanded)
        b-modal(v-model="ModalActive" trap-focus :width="640")
            DetalledeproductoComponent
</template>
<script>
import DetalledeproductoComponent from '@/components/Contenido/DetalledeproductoComponent.vue'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        DetalledeproductoComponent,
    },
    data() {
        return {
            ModalActive: false,
        }
    },
    computed: {
        ...mapState(["products"]),
        ...mapActions(["getProduct", "getProductDetail"])
    },
    mounted() {
        this.getProduct
    },
    methods:{
        DetailProduct(product){
            this.getProductDetail(product)
            this.ModalActive = true
        }
    }
}
</script>
<style lang="scss">
    .boxprincipal{
        position: relative;
    }
    .boxhijo{
        position: absolute;
        left: 0;
        bottom: 0;
        background: gray;
        padding: 5px;
        color: white;
    }
</style>