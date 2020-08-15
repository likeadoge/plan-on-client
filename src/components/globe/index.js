import IconFont from "./IconFont.vue";
import AsyncButton from "./AsyncButton.vue";
import flex from './flex/index'
import ItemsFlow from './ItemsFlow.vue'
import StyledCard from './StyledCard.vue'
import SimpleSelector from './SimpleSelector.vue'
import DashedButton from './DashedButton.vue'

export default {
    install: function(Vue) {
        Vue.component('IconFont', IconFont)
        Vue.component('AsyncButton', AsyncButton)
        Vue.component('ItemsFlow', ItemsFlow)
        Vue.component('StyledCard', StyledCard)
        Vue.component('SimpleSelector', SimpleSelector)
        Vue.component('DashedButton', DashedButton)
        Vue.use(flex)
    }
}