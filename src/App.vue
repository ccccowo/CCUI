<script setup>
import { ref, watch } from 'vue'
const visible1 = ref(false)
const username = ref('输入文字')
const active = ref(true)
const gender = ref(1)
const age = ref(1)
const checkbox1 = ref(true)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkboxList1 = ref(['A', 'C'])
const number = ref(0)
const data = ref(
    {
        title: 'parent 1',
        expand: true,
        children: [
            {
                title: 'parent 1-1',
                expand: true,
                children: [
                    {
                        title: 'leaf 1-1-1'
                    },
                    {
                        title: 'leaf 1-1-2'
                    }
                ]
            },
            {
                title: 'parent 1-2',
                children: [
                    {
                        title: 'leaf 1-2-1'
                    },
                    {
                        title: 'leaf 1-2-1'
                    }
                ]
            }
        ]
    }
)
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const selectValue = ref('Option2')
watch(() => selectValue.value, () => {
    console.log("selectValue改变啦")
    console.log(selectValue.value)
})
const change = (files) => {
    console.log("上传的文件改变了")
}
const arr = [10, 10]
const imgList = [
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0',
        key: 1,
        alt: '风景'
    },
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.0173a09b9c2ba6da89cfd89c492cae5b?rik=rmrp5VZYz2BTgQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f78%2f78_9.jpg&ehk=1T8b3FMg14%2bqrb1H9CaROVxQVIhp2vvDyfGbMjzzTKA%3d&risl=&pid=ImgRaw&r=0',
        key: 2,
        alt: '风景'
    },
    {
        url: 'https://img.zcool.cn/community/0122a15d22b574a801213763e36eba.jpg@2o.jpg',
        key: 3,
        alt: '风景'
    }
]
const menu = ref([
    { path: '/home', text: '首页' },
    { path: '/about', text: "关于我们" },
    { path: '/users', text: '我的' }
])
const tableHeader = ref([
    {
        value: 'id',
        label: 'ID',
    },
    {
        value: 'name',
        label: '姓名',
    },
    {
        value: 'age',
        label: '年龄',
    },
    {
        value: 'gender',
        label: '性别',
    },
    {
        value: 'address',
        label: '住址',
    }
])
const tableData = ref([
    {
        id: 1,
        name: 'Tom',
        age: 18,
        gender: '男',
        address: 'New York No. 1 Lake Park',
    },
    {
        id: 2,
        name: 'Jerry',
        age: 20,
        gender: '女',
        address: 'London No. 1 Lake Park',
    },
    {
        id: 3,
        name: 'Lucy',
        age: 22,
        gender: '女',
        address: 'Sidney No. 1 Lake Park',
    }
])
const date = ref()
watch(() => date.value, () => {
    console.log("date改变啦")
    console.log(date.value)
})
const popShow = ref(false)
const value1 = ref(false)
const value2 = ref(true)
</script>

<template>
     <cc-table :data="tableData" :columns="tableHeader" width="800px" stript> </cc-table>
    <!-- 开关 -->
    <cc-space class="switch">
        <cc-switch size="small" v-model="value1"></cc-switch>
        <cc-switch v-model="value2"></cc-switch>
        <cc-switch active-color="red" inactive-color="pink" size="large" v-model="active"></cc-switch>
    </cc-space>

    <div class="box1" v-if="false">
        <!-- popover 气泡卡片 -->
        <div class="popover">
            <cc-popover content="我是hover触发的pop" title="hover" direction="right">
                <cc-button>right</cc-button>
            </cc-popover>
            <br><br><br>
            <cc-popover trigger="click" content="我是click触发的pop" direction="right">
                <cc-button type="primary">click</cc-button>
            </cc-popover>
            <cc-popover content="我是hover触发的pop" title="hover" direction="left">
                <cc-button>left</cc-button>
            </cc-popover>
            <cc-popover content="我是hover触发的pop" title="hover" direction="top" :visible="popShow">
                <cc-button>top</cc-button>
            </cc-popover>
            <cc-popover title="hover" direction="bottom" width="400px">
                <cc-button>right</cc-button>
                <template #content>
                    <div>
                        <cc-button type="primary">确定</cc-button>
                        <cc-button>取消</cc-button>
                    </div>
                </template>
            </cc-popover>
        </div>
        <!-- 按钮 -->
        <div class="button">
            <div>
                <cc-button size="large" @click="console.log(123)">按钮6</cc-button>
                <cc-button size="medium" type="primary">按钮1</cc-button>
                <cc-button size="small" type="warning">按钮2</cc-button>
                <cc-button type="danger">按钮3</cc-button>
                <cc-button type="success">按钮4</cc-button>
                <cc-button type="info">按钮5</cc-button>
            </div>
            <div>
                <cc-button disabled>按钮6</cc-button>
                <cc-button disabled type="primary">按钮1</cc-button>
                <cc-button disabled type="warning">按钮2</cc-button>
                <cc-button disabled type="danger">按钮3</cc-button>
                <cc-button disabled type="success">按钮4</cc-button>
                <cc-button disabled type="info">按钮5</cc-button>
            </div>
            <div>
                <cc-button plain>按钮6</cc-button>
                <cc-button plain type="primary">按钮1</cc-button>
                <cc-button plain type="warning">按钮2</cc-button>
                <cc-button plain type="danger">按钮3</cc-button>
                <cc-button plain type="success">按钮4</cc-button>
                <cc-button plain type="info">按钮5</cc-button>
            </div>
            <div>
                <cc-button plain size="small" round>按钮6</cc-button>
                <cc-button plain round type="primary">按钮1</cc-button>
                <cc-button plain size="large" round type="warning">按钮2</cc-button>
                <cc-button plain round type="danger">按钮3</cc-button>
                <cc-button plain round type="success">按钮4</cc-button>
                <cc-button plain round type="info">按钮5</cc-button>
            </div>
            <div>
                <cc-button size="small" plain circle>拆</cc-button>
                <cc-button plain circle type="primary">好</cc-button>
                <cc-button size="large" plain circle type="warning">不</cc-button>
                <cc-button plain circle type="danger">和</cc-button>
                <cc-button plain circle type="success">耶</cc-button>
                <cc-button plain circle type="info">哦</cc-button>
            </div>
        </div>
        <!-- 弹窗 -->
        <cc-button @click="visible1 = true">打开</cc-button>
        <cc-dialog title="温馨提示" top="300px" width="25%" v-model:visible="visible1">
            <template #title>
                <div style="color:rgb(18, 83, 93)">
                    温馨提示
                </div>
            </template>
            这是一条信息
            <template #footer>
                <cc-button type="primary">确定</cc-button>
                <cc-button>取消</cc-button>
            </template>
        </cc-dialog>
        <!-- 输入框 -->
        <div class="input">
            <cc-input placeholder="请输入密码" type="text" name="name" v-model="username"></cc-input>
            <cc-input placeholder="请输入密码" type="password" name="name" disabled='true'></cc-input>
        </div>
        <!-- 开关 -->
        <div class="switch">
            <cc-switch size="small" v-model="active"></cc-switch>
            <cc-switch v-model="active"></cc-switch>
            <cc-switch active-color="red" inactive-color="pink" size="large" v-model="active"></cc-switch>
        </div>
        <!-- 单选框 -->
        <div class="radio">
            <cc-radio v-model="gender" label="0">男</cc-radio>
            <cc-radio v-model="gender" label="1">女</cc-radio>

            <cc-radio-group v-model="age">
                <cc-radio label="1"></cc-radio>
                <cc-radio label="2"></cc-radio>
            </cc-radio-group>
        </div>
        <!-- 多选框 -->
        <div class="checkbox">
            <cc-checkbox v-model="checkbox1"></cc-checkbox>
            <cc-checkbox v-model="checkbox2" disabled></cc-checkbox>
            <cc-checkbox v-model="checkbox3"></cc-checkbox>
            <cc-checkbox></cc-checkbox>

            <cc-checkbox-group v-model="checkboxList1">
                <cc-checkbox value="A" lable="AAA"></cc-checkbox>
                <cc-checkbox value="B" label="BBB" disabled></cc-checkbox>
                <cc-checkbox value="C" label="CCC"></cc-checkbox>
            </cc-checkbox-group>
        </div>
        <!-- 卡片 -->
        <cc-card line="true" width="30vw">
            <template #title>
                <div style="color:rgb(18, 83, 93)">
                    卡片标题
                </div>
            </template>
            <template #extra>
                <cc-button type="primary" plain>按钮</cc-button>
            </template>
            芜湖，起飞~
            <template #footer>
                <cc-button type="primary">确定</cc-button>
                <cc-button>取消</cc-button>
            </template>
        </cc-card>
        <!-- 弹窗组件 -->
        <cc-button @click="onClick">开开开</cc-button>
        <!-- 头像 -->
        <cc-avatar size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar square label="user" size="100"></cc-avatar>
        <!-- 日历 -->
        <cc-calendar v-model="date"></cc-calendar>
        <!-- 菜单 -->
        <cc-menu :data="menu" textColor="pink" menuBackgroundColor="black" activeTextColor="black"
            activeBackgroundColor="pink"></cc-menu>
        <!-- 进度条 -->
        <cc-progress :percentage="80" text="80%" textColor="pink" width="100" height="40"></cc-progress>
        <cc-progress :percentage="90" text="90%" textInside></cc-progress>
        <!-- 表格 -->
        <cc-table :data="tableData" :columns="tableHeader" width="800px"> </cc-table>
        <!-- 轮播图 -->
        <cc-carousel :images="imgList" arrow="always" time="1800" auto="false">
        </cc-carousel>
        <!-- 间隔 -->
        <cc-space :size="arr" direction="vertical" warp="true">
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
            <cc-button type="primary">测试Button</cc-button>
        </cc-space>
        <!-- 上传 -->
        <cc-upload drag multiple @change="change" label="嘟嘟嘟" btnType="primary"></cc-upload>
        <!-- 选择器 -->
        <cc-select v-model="selectValue">
            <cc-option v-for="option in options" :label="option.label" :value="option.value"></cc-option>
        </cc-select>
    </div>
</template>

<style scoped lang="scss"></style>
