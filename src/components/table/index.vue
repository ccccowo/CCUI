<!-- table.vue -->
<script>
export default {
    name: "cc-table"
}
</script>
<script setup>
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    columns: {
        type: Array,
        default: () => []
    },
    width: {
        type: String,
        default: '600px'
    },
    stript: {
        type: Boolean,
        default: false
    }
})
// 处理数据
const columnsValues = ref([])
columnsValues.value = props.columns.map(column => column.value)
watch(() => props.columns, () => {
    columnsValues.value = props.columns.map(column => column.value)
})
const tableRef = ref(null)
onMounted(() => {
    tableRef.value.style.width = props.width
    tableRef.value.style.height = props.height
})
console.log(props.stript)
</script>
<template>
    <table class="cc-table" ref="tableRef">
        <thead>
            <tr>
                <th v-for="(column, index) in columns" :key="index">
                    <span>{{ column.label || column.value }}</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="tr" v-for="(item, index) in data" :key="index" 
            :style="(index%2!=0&&props.stript)? {
                'background-color': '#f5f7fa'
            } : {'background-color': '#fff'}"
            >
                <td v-for="value in columnsValues">
                    {{ item[value] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table.cc-table {
    margin: 0;
    border:none;
    display: table;
    padding: 20px 20px;
    border-spacing: 0;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    thead {
        tr {
            border:none;
            background-color: #f6fafc;
            th {
                border:none;
                padding-top: 10px;
                box-sizing: border-box;
                padding-bottom: 10px;
                border: none;
                color: rgb(160, 158, 158);
                text-align: left;
                font-size: 17px;
                padding-left: 10px;
                width: 1px;

            }
        }

    }

    tbody {
        tr.tr {
            border:none;
            cursor: pointer;

            &:hover {
                background-color: #f5f7fa !important;
            }

            td {
                border:none;
                box-sizing: border-box;
                padding: 10px 0px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                text-align: left;
                color: rgb(160, 158, 158);
                font-size: 15px;
                padding-left: 10px;
                border: none;
            }
        }
    }
}
</style>