<template lang="pug">
    #CategoriasComponent
        b-collapse.card(animation='slide' v-for='(collapse, index) of collapses' :key='index' :open='isOpen == index' @open='isOpen = index')
            template(#trigger='props')
                .card-header(role='button')
                    p.card-header-title
                        | {{ collapse.title }}
                    a.card-header-icon
                        b-icon(:icon="props.open ? 'menu-down' : 'menu-up'")
            .card-content
                .content
                    | {{ collapse.text }}
</template>
<script>
export default {
    data() {
        return {
            isOpen: 0,
            collapses: [
            {
                title: 'Title 1',
                text: 'Text 1'
            },
            {
                title: 'Title 2',
                text: 'Text 2'
            },
            {
                title: 'Title 3',
                text: 'Text 3'
            }
            ]
        }
    }
}
</script>