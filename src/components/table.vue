<!--
 * @Author: your name
 * @Date: 2021-11-08 14:58:53
 * @LastEditTime: 2021-11-08 17:43:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ui-vat-sun\src\components\table.vue
-->
<template>
    <div>
        <table>
            <thead>
                <tr :class="{
                        'border-top':border,
                        'border-left':border,
                        'border-right':border,
                    }">
                    <th
                    :class="{
                        'border-left':border && headerIndex,
                        'border-bottom-zero':border,
                    }"
                     v-for="(headerItem,headerIndex) in header" :key="headerItem.prop">{{headerItem.label}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dataItem,dataIndex) in data" :key="dataItem.prop"
                :class="{
                        'border-top':border && !dataIndex,
                        'border-left':border,
                        'border-right':border,
                    }">
                    <td 
                    :class="{
                        'border-left':border && headerIndex,
                    }"
                    v-for="(headerItem,headerIndex) in header" :key="headerItem.prop">
                        {{dataItem[headerItem.prop]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        border:{
            type:Boolean,
            default:false
        },
        header: {
            type: Array,
            default: ()=>[]
        },
        data: {
            type: Array,
            default: ()=>[]
        },
    },
    data(){
        return {
        }
    }
}
</script>

<style lang='stylus' scoped>
table{
    width: 100%
    margin: 20px 0px
    border-spacing: 0px
    thead{
        tr{
            text-align: left
            display: flex
            th{
                flex: 1
                padding: 10px
                border-bottom: 1px solid #dcdfe6;
                box-sizing: border-box
            }
        }
    }
    tbody{
        tr{
            text-align: left
            display: flex
            td{
                flex: 1
                padding: 10px
                border-bottom: 1px solid #dcdfe6;
                box-sizing: border-box
            }
        }
    }
    .border-top{
        border-top: 1px solid #dcdfe6;
    }
    .border-right{
        border-right: 1px solid #dcdfe6;
    }
    .border-bottom{
        border-bottom: 1px solid #dcdfe6;
    }
    .border-bottom-zero{
        border-bottom: 0px solid #dcdfe6;
    }
    .border-left{
        border-left: 1px solid #dcdfe6;
    }
}
</style>