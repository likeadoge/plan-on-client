import IconFont from "./IconFont.vue";
import AsyncButton from "./AsyncButton.vue";
import flex from './flex/index'
import ItemsFlow from './ItemsFlow.vue'
import StyledCard from './StyledCard.vue'
import SimpleSelector from './SimpleSelector.vue'

export default {
    install: function(Vue) {
        Vue.component('IconFont', IconFont)
        Vue.component('AsyncButton', AsyncButton)
        Vue.component('ItemsFlow', ItemsFlow)
        Vue.component('StyledCard', StyledCard)
        Vue.component('SimpleSelector', SimpleSelector)
        Vue.use(flex)
    }
}