<template lang="pug">
    #CarritoComponent
        b-collapse(:open='false' aria-id='contentIdForA11y1')
            template(#trigger='')
                .shopping
                    b-icon(icon='dog' size='is-large')
                    .number.numberedit.is-size-7 {{ bolsa.length }}
            .notification.box
                .content
                    h3.subtitle.is-size-6.has-text-left Resumen de Compra
                    .columns.is-multiline.is-centered.is-vcentered(v-for="item in bolsa")
                        .column
                            b-button(icon-left="delete" type="is-danger" @click="getUnsetBolsa(item.id)")
                        .column
                            .has-text-left
                                p.is-size-6 {{ item.product.name}}
                                p.is-size-6 Precio: {{ item.product.price}}$
                        .column
                            b-numberinput(type="is-success" v-model="item.stock" controls-position="compact" min="0")
                        .column
                            .subtitle.is-size-6 Sub-total: {{ item.product.price * item.stock}}$
                    .columns.is-multiline.is-centered.is-vcentered
                        .column
                            .subtitle.is-size-6 Sub-total
                        .column
                            .subtitle.is-size-6 {{ bolsa.length > 0 ? sumtotal() : 0 }}$

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed:{
        ...mapState(["bolsa"])
    },
    methods:{
        ...mapActions(["getUnsetBolsa"]),
        sumtotal(){
            let suma = []
            const reducer = (accumulator, curr) => accumulator + curr;
            this.bolsa.forEach(element => {
                suma.push(element.product.price * element.stock)
            });
            return suma.reduce(reducer)
        }
    }
}
</script>
<style lang="scss">
#CarritoComponent{
    .collapse-content{
        z-index: 5;
        position: fixed;
        width: 600px;
        right: 50px;
        .notification{
            background: #fff;
        }
    }
    .shopping{
        position:relative;
    }
    .numberedit{
        position:absolute;
        background-color: red;
        color: #fff;
        bottom: 0;
        right: -10px;
    }
}
</style>