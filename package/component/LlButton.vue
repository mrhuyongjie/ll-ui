<template>
    <button :disabled="disabled" class="ll-button"  v-bind:class="[type, {circle: circle, disabled: disabled}]" v-on:click="$emit('click')">
        <slot>sumbit</slot>
    </button>
</template>

<script>

export default {
  name: 'LlButton',
  props: {
    type: {
      type: String,
      default: 'plain'
    },
   circle: {
     type: Boolean,
     default: false
   },
   disabled: {
       type: Boolean,
       default: false
   }
  }
}
</script>

<style lang="scss" scoped>
    
     @mixin typeStyle ($color) {
        border-color: $color;
        background-color: $color;
     }

    .ll-button{
      box-sizing: border-box;
        display: inline-block;
        text-align: center;
        padding: 12px 20px;   
        font-size: inherit;
        font-family: inherit;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        line-height: 1;
        cursor: pointer;
        white-space: nowrap;
        user-select: none;
        transition: .1s;
    }


    // isCircle attribute
    .circle{
      border-radius: 50%;
      padding: 12px;
    } 
    
   
    // type attribute

    .primary,.success,.info,.warning,.danger{
        color: $color-light;     
        border-width: 1px;
        border-style: solid;
    }
    .primary{
        @include typeStyle($color : $color-primary);
          &:hover,&:focus{
             @include typeStyle($color: #66b1ff);
          }
          &:active{
                @include typeStyle($color: #3a8ee6);
          }
          &:disabled{
            cursor: not-allowed;
            &,&:active{
              @include typeStyle($color: #66b1ff);
            }
            
          }
    }
        .plain{
        border-color: #dcdfe6;
        background-color: $color-light;
        color: $color-dark;
      
        &:hover,&:focus{
          color: #409eff;
          border-color: #c6e2ff;
          background-color: #ecf5ff;
        }
        &:active{
          color: #fff;
          @include typeStyle($color: #3a8ee6);
        }
        &:disabled{
          cursor: not-allowed;
          &,&:active{
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }
        }
    } 
    .success{
        @include typeStyle($color : $color-success);
        &:hover,&:focus{
           @include typeStyle($color: #85ce61);
        }
        &:active{
          @include typeStyle($color: #5daf34);
        }
          &:disabled{
            cursor: not-allowed;
            &, &:active{
              @include typeStyle($color: #85ce61);
            }
          }
    }
    .info{
        @include typeStyle($color : $color-info);
        &:hover,&:focus{
           @include typeStyle($color: #a6a9ad);
        }
        &:active{
          @include typeStyle($color: #82848a);
        }
         &:disabled{
            cursor: not-allowed;
            &, &:active{
              @include typeStyle($color: #a6a9ad);
            }
          }
    }
    .warning{
        @include typeStyle($color : $color-warning);
        &:hover,&:focus{
           @include typeStyle($color: #ebb563);
        }
        &:active{
          @include typeStyle($color: #cf9236);
        }
        &:disabled{
            cursor: not-allowed;
            &, &:active{
              @include typeStyle($color: #ebb563);
            }
          }
    }
    .danger{
        @include typeStyle($color : $color-danger);
        &:hover,&:focus{
           @include typeStyle($color: #f78989);
        }
        &:active{
          @include typeStyle($color: #dd6161);
        }
         &:disabled{
            cursor: not-allowed;
            &,&:active{
               @include typeStyle($color: #f78989);
            }
          }
    }

   
</style>

















