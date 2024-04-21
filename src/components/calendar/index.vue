<!-- calendar.vue -->
<script>
export default {
    name: "cc-calendar",
}
</script>
<script setup>
import CcButton from "../button";
import { ref, reactive,  watch, onMounted } from "vue";
const dayNameList = [
    {
        chineseFullName: "周日",
        chineseShortName: "日",
        fullName: "Sunday",
        shortName: "Sun",
        dayNumber: 0,
    },
    {
        chineseFullName: "周一",
        chineseShortName: "一",
        fullName: "Monday",
        shortName: "Mon",
        dayNumber: 1,
    },
    {
        chineseFullName: "周二",
        chineseShortName: "二",
        fullName: "Tuesday",
        shortName: "Tue",
        dayNumber: 2,
    },
    {
        chineseFullName: "周三",
        chineseShortName: "三",
        fullName: "Wednesday",
        shortName: "Wed",
        dayNumber: 3,
    },
    {
        chineseFullName: "周四",
        chineseShortName: "四",
        fullName: "Thursday",
        shortName: "Thu",
        dayNumber: 4,
    },
    {
        chineseFullName: "周五",
        chineseShortName: "五",
        fullName: "Friday",
        shortName: "Fri",
        dayNumber: 5,
    },
    {
        chineseFullName: "周六",
        chineseShortName: "六",
        fullName: "Saturday",
        shortName: "Sat",
        dayNumber: 6,
    },
]
const MIN_YEAR = 1900
const MAX_YEAR = 9999
// 目标日期
const props = defineProps({
    modelValue: {
        type: Date,
        default: new Date()
    }
})
const targetDate = ref(props.modelValue)
watch(()=>props.modelValue,()=>{
    targetDate.value = props.modelValue
})
// 日历的属性
const calendarProps = reactive({
    target: {
        year: null,
        month: null,
        date: null,
        day: null,
        monthShortName: null,
        monthFullName: null,
        monthChineseFullName: null,
        firstDay: null,
        firstDayIndex: null,
        totalDays: null,
    },
    previous: {
        totalDays: null,
    },
})
// 用于展现的日历数据
const calendarData = ref([])
// 初始化日历的属性
const initCalendar = () => {
    calendarProps.target.year = targetDate.value.getFullYear()
    calendarProps.target.month = targetDate.value.getMonth()
    calendarProps.target.date = targetDate.value.getDate()
    calendarProps.target.day = targetDate.value.getDay()
    if (
        calendarProps.target.year < MIN_YEAR ||
        calendarProps.target.year > MAX_YEAR
    ) {
        console.error("Invalid date")
        return
    }
  
    // 获取目标月份的第一天是星期几，和在星期几中的索引值
    const targetMonthFirstDay = new Date(
        calendarProps.target.year,
        calendarProps.target.month,
        1
    )
    calendarProps.target.firstDay = targetMonthFirstDay.getDay()
    calendarProps.target.firstDayIndex = dayNameList.findIndex(
        (day) => day.dayNumber === calendarProps.target.firstDay
    )

    // 获取目标月份总共多少天
    const targetMonthLastDay = new Date(
        calendarProps.target.year,
        calendarProps.target.month + 1,
        0
    )
    calendarProps.target.totalDays = targetMonthLastDay.getDate()

    // 获取目标月份的上个月总共多少天
    const previousMonth = new Date(
        calendarProps.target.year,
        calendarProps.target.month,
        0
    )
    calendarProps.previous.totalDays = previousMonth.getDate()
}
// 生成日历数据
function setCalendarData() {
    let i;
    let date = 1;
    const originData = [];
    const firstRow = [];
    // 设置第一行数据
    for (i = 0; i <= 6; i++) {
        // 设置目标月份之前月份的日期数据
        if (i < calendarProps.target.firstDayIndex) {
            const previousDate =
                calendarProps.previous.totalDays -
                calendarProps.target.firstDayIndex +
                (i + 1)
            firstRow.push({
                dateObj: new Date(
                    calendarProps.target.year,
                    calendarProps.target.month - 1,
                    previousDate
                ),
                dateNumber: previousDate,
                dateType: "previous"
            })
        } else {
            // 设置目标月份当月的日期数据
            firstRow.push({
                dateObj: new Date(
                    calendarProps.target.year,
                    calendarProps.target.month,
                    date
                ),
                dateNumber: date,
                dateType: "current"
            })
            date++
        }
    }
    originData.push(firstRow)
    // 设置后面五行的数据
    for (let j = 0; j <= 4; j++) {
        const rowData = [];
        for (let k = 0; k <= 6; k++) {
            // 设置目标月份剩下的日期数据
            if (date <= calendarProps.target.totalDays) {
                rowData.push({
                    dateObj: new Date(
                        calendarProps.target.year,
                        calendarProps.target.month,
                        date
                    ),
                    dateNumber: date,
                    dateType: "current"
                });
            } else {
                // 设置目标月份下个月的日期数据
                const nextDate = date - calendarProps.target.totalDays;
                rowData.push({
                    dateObj: new Date(
                        calendarProps.target.year,
                        calendarProps.target.month + 1,
                        nextDate
                    ),
                    dateNumber: nextDate,
                    dateType: "next"
                })
            }
            date++
        }
        originData.push(rowData)
    }
    calendarData.value = originData
    console.log(calendarData.value)
    console.log(calendarProps.target)
    console.log(targetDate.value.toLocaleDateString())
}

onMounted(() => {
    initCalendar()
    setCalendarData()
})
const emits = defineEmits(["update:modelValue"])
const changeDate = (item)=>{
    targetDate.value = item.dateObj
    initCalendar()
    setCalendarData()
    emits("update:modelValue", targetDate.value)
}
const preMonth = ()=>{
    targetDate.value = new Date(
        calendarProps.target.year,
        calendarProps.target.month - 1,
        1
    )
    initCalendar()
    setCalendarData()   
    emits("update:modelValue", targetDate.value)
}
const nextMonth = ()=>{
    targetDate.value = new Date(
        calendarProps.target.year,
        calendarProps.target.month + 1,
        1
    )
    initCalendar()
    setCalendarData()
    emits("update:modelValue", targetDate.value)
}
</script>
<template>
    <div class="cc-calendar">
        <div class="cc-calendar-header">
            <cc-button class="left" @click="preMonth">Pre</cc-button>
            <div class="title">{{ calendarProps.target.year }}.{{ calendarProps.target.month+1 }}</div>
            <cc-button class="right" @click="nextMonth">Next</cc-button>
        </div>

        <div class="cc-calendar-main">
            <div class="week">
                <div class="week-item">Sun</div>
                <div class="week-item">Mon</div>
                <div class="week-item">Tue</div>
                <div class="week-item">Wed</div>
                <div class="week-item">Thu</div>
                <div class="week-item">Fri</div>
                <div class="week-item">Sat</div>
            </div>
            <!-- 数据 -->
            <div class="data">
                <div class="data-item" v-for="row in calendarData">
                    <div class="item" v-for="item in row" 
                    :class="[{'active':item.dateNumber==calendarProps.target.date&&item.dateType=='current'}]" 
                    :style="item.dateType=='previous'||item.dateType=='next'?{color:'rgba(0,0,0,.2)'}:{}"
                    @click="changeDate(item)"
                    >
                        {{ item.dateNumber }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cc-calendar {
    width: 600px;
    height: 450px;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    padding-top: 20px;

    .cc-calendar-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        height: 10%;

        .left,
        .right {
            cursor: pointer;
        }

        .left {
            margin-left: 10px;
        }

        .right {
            margin-right: 10px;
        }

        .title {
            font-size: 20px;
            color: black;
            font-weight: bold;
        }
    }

    .cc-calendar-main {
        box-sizing: border-box;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;

        .week {
            height: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 17px;
            border-radius: 10px;
            background-color: #e6ebfa;
        }

        .data {
            box-sizing: border-box;
            margin-top: 10px;
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            font-size: 17px;
            background-color: #fff;

            .data-item {
                flex: 1;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 17px;
                border-radius: 10px;
                .item{
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    border-radius: 10px;
                    cursor: pointer;
                    &:hover{
                        background-color: #e6ebfa;
                    }
                }
                .item.active{
                    background-color: #0856ec;
                    color: white;
                }
            }
        }
    }
}
</style>