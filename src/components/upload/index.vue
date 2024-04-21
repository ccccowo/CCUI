<!-- upload.vue -->
<script>
export default {
  name: "cc-upload"
}
</script>
<script setup>
import { ref,onMounted } from 'vue'
import CcButton from '../button';
const props = defineProps({
    multiple: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    btnType: {
        type: String,
        default: ''
    },
    drag:{
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['change', 'update:files'])
const inpRef = ref(null)
const fileList = ref([])
const fileChange = () => {
    inpRef.value.click()
}
const inpChange = (e) => {
    fileList.value.unshift(...e.target.files)
    emit('change', fileList.value)
}
// 删除文件
const show = ref(false)
const deleteFile = (file) => {
    show.value = true
    fileList.value.splice(fileList.value.indexOf(file), 1)
    emit('change', fileList.value)
}
// 拖拽文件
const areaRef = ref(null)
onMounted(() => {
    let drag = areaRef.value
    drag.addEventListener('drop',(e)=>{
        // 禁用默认行为和冒泡
        e.stopPropagation()
        e.preventDefault()
        // 加入文件
        fileList.value.unshift(...e.dataTransfer.files)
        emit('change', fileList.value)
        drag.classList.remove('activeArea')
    },false)
    // 进入区域
   drag.addEventListener('dragenter',(e)=>{
        e.stopPropagation()
        e.preventDefault()
        drag.classList.add('activeArea')
    })
    // 经过区域
   drag.addEventListener('dragover',(e)=>{
        e.stopPropagation()
        e.preventDefault()
    })
    // 离开区域
   drag.addEventListener('dragleave',(e)=>{
        e.stopPropagation()
        e.preventDefault()
        drag.classList.remove('activeArea')
    })
})
</script>
<template>
    <div class="cc-upload">
        <input type="file" class="file-input" ref="inpRef" @change="inpChange" :multiple="props.multiple">
        <!-- 按钮 -->
        <cc-button v-show="!drag" :type="props.btnType" @click="fileChange">{{ props.label }}</cc-button>
        <!-- 拖拽框 -->
        <div ref="areaRef" class="area-box" v-show="drag" @click="fileChange">
            <div class="content"> 
                Drop file here or click to upload
            </div>
        </div>
        <div class="fileList-box">
            <div class="li" v-for="(file, index) in fileList" :key="index">
                <span>{{ file.name }}</span>
                <span class="delete" @click="deleteFile(file)">
                 删除
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cc-upload {
    .file-input {
        display: none;
    }

    .fileList-box {
        width: 100%;

        .li {
            max-width: 600px;
            font-size: 14px;
            padding: 5px 0px;
            padding-left: 20px;
            cursor: pointer;

            .cc-button {
                width: 40px;
                height: 20px;
            }

            .delete {
                float: right;
                margin-right: 20px;
                font-size: 14px;
                cursor: pointer;
            }
        }

        .li:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: #0856ec;
        }

        .delete:hover {
            color: red;
        }
    }
    .area-box{
        cursor: pointer;
        box-sizing: border-box;
        border:2px rgba(0, 0, 0, 0.2) dashed;
        width: 400px;
        height: 200px;
        margin-top: 20px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            border-color:  #0856ec;
        }
    }
    .activeArea{
        border-color:  #0856ec;
        background-color: rgb(218, 232, 245);
        border-width: 3px;
    }
}</style>