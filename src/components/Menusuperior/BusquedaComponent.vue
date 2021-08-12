<template lang="pug">
    #BusquedaComponent
        section
            b-field(style="color: white;")
                <p class="content"><b>Selected:</b> {{ selected }}</p>
                b-autocomplete(rounded v-model='name' :data='filteredDataArray' placeholder='...' icon='magnify' clearable @select='option => selected = option')
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            name: '',
            selected: null
        }
    },
    computed: {
        ...mapState(["categorys"]),
        filteredDataArray() {
            return this.categorys.filter((option) => {
                return option.name.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
            })
        }
    }
}
</script>