<template lang="pug">
    #ListadeproductosComponent
        .title.is-size-4.has-text-left Category
        .subtitle.is-size-5.has-text-left Home > {{ categoryselect.name }}
        .columns.is-multiline
            .column.is-3(v-for="product in products")
                .card(v-if="product.category.id == categoryselect.id ? true : false")
                    .card-image.boxprincipal(@click="DetailProduct(product.id)")
                        figure.image.is-square
                            img(:src='product.photo')
                        p.is-size-5.boxhijo {{ product.stock > 0 ? "Disponible" : "Sin Stock"}}
                    .card-content
                        .has-text-left
                            p.is-size-6 {{ product.name}}
                            p.is-size-6 Precio: {{ product.price}}$
                        .columns.is-centered.is-vcentered.is-gapless
                            .column.is-5
                                b-numberinput( type="is-success" :editable="false" :disabled="product.stock <= 0" v-model="selectedproduct[product.id]" controls-position="compact" min="0")
                            .column
                                b-button(v-if="product.stock > 0" icon-right="cart-plus" expanded @click="DetailProduct(product.id, selectedproduct[product.id])")
                                .subtitle.is-size-6(v-else) No stock
        b-modal(v-model="ModalActive" trap-focus :width="640")
            #DetalledeproductoComponent(v-if="ModalActive")
                .card
                    .card-content
                        .columns.is-multiline.is-centered
                            .column.is-12
                                .content
                                    .title.is-size-4.has-text-left.bord-bottom Producto Agregado
                            .column.is-6
                                .content
                                    figure.image.is-square.box
                                        img(:src='detailproduct.product.photo')
                            .column.is-6.has-text-left
                                .content
                                    b-field
                                        p.subtitle.is-4 {{detailproduct.product.name}}
                                .content
                                    b-field
                                        p.subtitle.is-4 Codigo: {{detailproduct.product.code}}
                                .content
                                    b-field
                                        p.subtitle.is-4 Precio: {{detailproduct.product.price}}$
                                .content 
                                    b-field
                                        .columns.is-multiline.is-centered.is-vcentered
                                            .column.is-5
                                                p.subtitle.is-4 Cantidad: 
                                            .column.is-7
                                                b-numberinput( type="is-success" v-model="detailproduct.selected" controls-position="compact" min="0")
                                .content
                                    b-field
                                        p.subtitle.is-4 Sub-total: {{ sumproduct(detailproduct.selected, detailproduct.product.price) }}
                            .column.is-12.has-text-justified.box
                                .content
                                    p.subtitle.is-6 {{ detailproduct.product.description }}
                            .column.is-6
                                b-button(expanded @click="ModalActive = false") Seguir Comprando
                            .column.is-6
                                b-button(type="dark" expanded @click="SetBolsa(detailproduct.product, detailproduct.selected)") Agregar al Carro
</template>
<script>
import {  mapActions,mapState } from 'vuex'
export default {
    data() {
        return {
            ModalActive: false,
            selectedproduct:{}
        }
    },
    computed:{
        ...mapState(["products", "categoryselect", "detailproduct"])
    },
    methods:{
        ...mapActions(["getProductDetail", "getBolsa"]),
        DetailProduct(product, selected){
            let payload = {
                product: product,
                selected: selected
            }
            this.getProductDetail(payload)
            this.ModalActive = true
        },
        sumproduct(stock, price){
            return price*stock
        },
        SetBolsa(product, stock){
            let payload = {
                product: product,
                stock: stock
            }
            this.getBolsa(payload)
            this.ModalActive = false
            this.$buefy.toast.open('Producto agregado')
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