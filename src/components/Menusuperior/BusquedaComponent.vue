<template lang="pug">
    #BusquedaComponent
        section
            b-field(style="color: white;")
                b-autocomplete(rounded v-model='name' :data='filteredDataArray' placeholder='...' icon='magnify' clearable @select='option => getSelectCategory(option.id)')
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            selected: null,
            name: '',
        }
    },
    computed: {
        ...mapState(["categorys"]),
        filteredDataArray() {
            return this.categorys.filter((option) => {
                return option.name.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
            })
        }
    },
    methods:{
        ...mapActions(["getSelectCategory"]),
    }
}
</script>