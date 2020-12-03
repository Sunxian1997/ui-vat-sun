<template>
  <div v-click-outside>
    <input type="text" :value="formatDate" />
    <div class="pannel" v-if="isVisible">
      <div class="pannel-nav">
        <span @click="prevYear"> &lt;</span>
        <span @click="prevMonth"> &lt; &lt;</span>
        <span> {{ time.year }}年</span>
        <span> {{ time.month + 1 }}月</span>
        <span @click="nextMonth"> &gt; &gt;</span>
        <span @click="nextYear"> &gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <!-- 渲染出周几标题 -->
          <span v-for="i in 7" :key="i" class="cell cell-day">
            {{ weekDays[i - 1] }}
          </span>
          <!-- 六行七列的一个表格 -->
          <div v-for="i in 6" :key="'_' + i">
            <!-- 不是当月就变灰 -->
            <span
              :class="[
                {
                  notCurrentMonth: !isCurrentMonth(
                    visibeDays[(i - 1) * 7 + (j - 1)]
                  ),
                },
                {
                  today: isToday(visibeDays[(i - 1) * 7 + (j - 1)]),
                },
                {
                  select: isSelect(visibeDays[(i - 1) * 7 + (j - 1)]),
                },
              ]"
              class="cell"
              v-for="j in 7"
              :key="j"
              @click="chooseDate(visibeDays[(i - 1) * 7 + (j - 1)])"
            >
              {{ visibeDays[(i - 1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-footer">今天</div>
    </div>
  </div>
</template>

<script>
import * as utils from '../utils/index'
export default {
  name: 'vat-date-picker',
  props: {
    value: {
      type: Date,
      default: () => {
        return new Date()
      }
    }
  },
  data () {
    let { year, month } = utils.getYearMonthDay(this.value)
    return {
      time: { year, month },
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      isVisible: false
    }
  },
  methods: {
    // 选择今天日期
    chooseDate (date) {
      // 发送完之后 还要跟新time标题里面的年月
      this.time.year = utils.getYearMonthDay(date).year
      this.time.month = utils.getYearMonthDay(date).month
      this.$emit('input', date)
    },
    // 检测是不是当天
    isToday (date) {
      let { year, month, day } = utils.getYearMonthDay(new Date())
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    // 检测是不是选中的日期
    isSelect (date) {
      // 传入的年月日和用户的年月日一样不一样
      let { year, month, day } = utils.getYearMonthDay(this.value)
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date)
      return year === y && month === m && day === d
    },
    // 检测是不是当月
    isCurrentMonth (date) {
      //通过对比this.value的年和月对比是不是当月
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
      let { year: y, month: m } = utils.getYearMonthDay(date)
      return year === y && month === m
    },
    prevMonth () {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() - 1)
      this.time = utils.getYearMonthDay(d)
    },
    nextMonth () {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setMonth(d.getMonth() + 1)
      this.time = utils.getYearMonthDay(d)
    },
    prevYear () {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setFullYear(d.getFullYear() - 1)
      this.time = utils.getYearMonthDay(d)
    },
    nextYear () {
      let d = utils.getDate(this.time.year, this.time.month, 1)
      d.setFullYear(d.getFullYear() + 1)
      this.time = utils.getYearMonthDay(d)
    },
    blur () {
      this.isVisible = false
    },
    focus () {
      this.isVisible = true
    }
  },
  computed: {
    visibeDays () {
      // 获取当前是周几
      const { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1))
      // 获取当前月份第一天 new
      let currentFirstDay = utils.getDate(year, month, 1)
      // 先生成一个当前日期
      // 获取当前周几把天数迁移几天
      let week = currentFirstDay.getDay()
      // 当前开始天数
      let startDay = currentFirstDay - week * 60 * 60 * 24 * 1000
      // 循环42天
      let arr = []
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 24 * 1000))
      }
      return arr
    },
    formatDate () {
      const { year, month, day } = utils.getYearMonthDay(this.value)
      return `${year}-${month + 1}-${day}`
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.pannel {
  width: 32 * 7px;
  position: absolute;
  background: white;
  clear: both;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;

  .pannel-nav {
    display: flex;
    justify-content: space-around;
    height: 30px;

    span {
      cursor: pointer;
      user-select: none;
    }
  }

  .pannel-content {
    .cell {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      font-weight: bold;
    }

    .cell:hover, .select {
      border: 1px solid blue;
      box-sizing: border-box;
    }

    .cell-day:hover {
      border: 0px solid blue;
    }
  }

  .pannel-footer {
    height: 30px;
  }
}

.notCurrentMonth {
  color: gray;
}

.today {
  background: hotpink;
  border-radius: 4px;
  color: #fff;
}
</style>