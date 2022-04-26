<template>
 <div class="ll-input" @mouseenter="dealIconVisible" @mouseleave="isBeHidden = true">
    <input :type="baseType" :disabled="disabled" v-model:value="baseValue" @input="dealInput" :placeholder="placeholder">
    <span v-if="clear" :class="['close', 'll-icon-close', {hidden: isBeHidden}]" v-on:click="clearValue()"></span>
    <span v-if="visible" :class="['visible', 'll-icon-visible', {hidden: isBeHidden}]" @click="dateType" ></span>
 </div>
  
   
</template>

<script>

export default {
    name: 'LlInput',
    props: {
        value: null,
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clear: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text',
        }
    },
    data() {
        return {
            baseValue: this.value,
            baseType: this.type,
            isBeHidden: true,   
        }
    },
    methods: {
        clearValue() {
            this.baseValue = null;
            this.$emit('input', '');
            this.isBeHidden = true;
        },
        dateType() {
            this.baseType = this.baseType == 'password' ? 'text' : 'password'; 
        },
        dealIconVisible() {
            if(!this.baseValue) {
                this.isBeHidden = true;
            }else {
                this.isBeHidden = false;
            }
        },
        dealInput(event) {
            this.$emit('input', event.target.value);
            this.dealIconVisible();
        }
    }
    
}
</script>

<style lang="scss">

 
   .ll-input{
        line-height: 40px;
        display: inline-block;
        color: #636660; 
        border-radius: 5px;
        position: relative;
        cursor: pointer;   
        input{
            // box-sizing: border-box;
            outline: none;
            cursor: pointer;
            border-radius: 5px;
            height: 40px;
            line-height: 40px;
            padding: 0px 15px;
            border: 1px solid #dcdfe6;
            &::placeholder{
                color: #bcbec3;
            }
            &:focus{
                border: 1px solid;
                border-color: $color-primary;
            }
            &:disabled{
                cursor: not-allowed;
                background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            }
        }
        .close,.visible {
            position: absolute;
            right: 0;
            top: 0;
            width: 40px;
            text-align: center;
        }
   }
   

</style>