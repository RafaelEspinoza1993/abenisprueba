<template lang="pug">
    #CategoriasComponent
        b-collapse.card(animation='slide' v-for='(category, index) of categorys' :key='index' :open='isOpen == index' @open='isOpen = index' )
            template(#trigger='props')
                .card-header(role='button' @click='SelectCategory(category.id)')
                    p.card-header-title
                        | {{ category.name }}
                    a.card-header-icon
                        b-icon(:icon="props.open ? 'menu-right' : 'dog'")
</template>
<script>
import { mapState,mapActions } from 'vuex'
export default {
    data() {
        return {
            isOpen: 0,
        }
    },
    computed: {
        ...mapState(["categorys"]),
    },
    methods:{
        ...mapActions(["getSelectCategory"]),
        SelectCategory(category){
            this.getSelectCategory(category)
        }
    }
}
</script>