<template lang="pug">
    #DetalledeproductoComponent
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
                                        b-numberinput(v-model="detailproduct.selected" controls-position="compact" min="0")
                        .content
                            b-field
                                p.subtitle.is-4 Sub-total: {{ sumproduct(detailproduct.selected, detailproduct.product.price) }}
                    .column.is-12.has-text-justified.box
                        .content
                            p.subtitle.is-6 {{ detailproduct.product.description }}
                    .column.is-6
                        b-button(expanded) Seguir Comprando
                    .column.is-6
                        b-button(type="dark" expanded @click="SetBolsa(detailproduct.product, detailproduct.selected)") Agregar al Carro

</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return{
            totalsum:0,
        }
    },
    computed: {
        ...mapState(["detailproduct"]),
    },
    methods: {
        ...mapActions(["getBolsa"]),
        sumproduct(stock, price){
            return price*stock
        },
        SetBolsa(product, stock){
            let payload = {
                product: product,
                stock: stock
            }
            this.getBolsa(payload)
            this.$buefy.toast.open('Producto agregado')
        }
    }
}
</script>