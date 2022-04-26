import "./scss/index.scss";
import LlButton from "./component/LlButton.vue";
import LlInput from "./component/LlInput";


const ComArr = [LlButton, LlInput];

function install(Vue) {
    ComArr.forEach((ele) => {
        Vue.component(ele.name, ele); 
    })
}

export default {
    install
}