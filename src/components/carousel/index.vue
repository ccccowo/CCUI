<!-- Carousel.vue -->  
<template>
  <div class="cc-carousel" ref="carouselRef">
    <div class="cc-carousel-images" ref="imagesRef">
      <span class="cc-carousel-image" v-for="(image, index) in processedImages" :key="image.key ? image.key : index">
        <img :class="{ 'active': index !== currentIndex - 1, 'blur': index == currentIndex - 1 }" :ref="setImageRef"
          :src="image.url" :alt="image.alt ? image.alt : ''" />
      </span>
    </div>
    <div class="left" ref="left" :class="[`${props.arrow}`]" @click=""> < </div>
        <div class="right" ref="right" :class="[`${props.arrow}`]" @click="fn(nextImage, props.time)"> > </div>
        <div class="points">
          <div class="point" v-for="(image, index) in images" :key="index"
            :class="{ 'active': index === currentIndex - 1 }">
          </div>
        </div>
    </div>
</template>  
<script>
export default {
  name: "cc-carousel"
}
</script>
<script setup>
import { ref, onMounted, watch } from 'vue';
const props = defineProps({
  images: {
    type: Array,
    default: []
  },
  auto: {
    type: Boolean,
    default: false
  },
  time: {
    type: Number,
    default: 1800
  },
  arrow: {
    type: String,
    default: 'hover'
  },
  width: {
    type: String,
    default: '600px'
  },
  height: {
    type: String,
    default: '300px'
  }
})
const carouselRef = ref(null)
const imagesRef = ref(null)
const imageRefs = ref([])
const left = ref(null)
const right = ref(null)
const setImageRef = (el) => {
  if (el) {
    imageRefs.value.push(el)
  }
}
// 容器宽度
const carouselWidth = ref(0)

// 添加一个处理过的图片数组，用于无缝滚动  
// 复制最后一张图片到第一个，第一张图片到最后一个
const processedImages = ref([])
const initProcessedImages = () => {
  processedImages.value.push(props.images[props.images.length - 1])
  processedImages.value = processedImages.value.concat(props.images)
  processedImages.value.push(props.images[0])
}
initProcessedImages()
const imagesNum = ref(processedImages.value.length)
const currentIndex = ref(1)

// 监听props.images的变化，以更新processedImages  
watch(props.images, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    initProcessedImages()
  }
}, { immediate: true })
// 自动执行动画
let timer = ref(null)
const initAuto = () => {
  timer.value = setInterval(() => {
    fn(nextImage, props.timr)()
  }, props.time)

  const dom = carouselRef.value
  dom.addEventListener('mouseenter', () => {
    console.log("鼠标进入了")
    clearInterval(timer.value)
  })

  dom.addEventListener('mouseleave', () => {
    console.log("鼠标离开了")
    timer.value = setInterval(() => {
      nextImage()
    }, props.time)
  })
}
// 箭头外界传入的auto的变化
watch(props.auto, (newVal, oldVal) => {
  if (newVal)
    initAuto()
  else {
    clearInterval(timer.value)
  }
})
// 左右箭头逻辑
async function animateCarousel(index) {
  return new Promise((resolve) => {
    // 监听动画结束事件  
    const transitionEndHandler =
      imagesRef.value.addEventListener('transitionend', () => {
        imagesRef.value.removeEventListener('transitionend', transitionEndHandler);
        resolve()
      })
    // 开始动画  
    imagesRef.value.style.transform = `translateX(-${index * carouselWidth.value}px)`;
  })
}

// 使用async函数来顺序执行动画  
async function moveCarousel(index, direction) {
  await animateCarousel(index)
  imagesRef.value.style.transition = 'none'
  currentIndex.value = direction
  imagesRef.value.style.transform = `translateX(-${currentIndex.value * carouselWidth.value}px)`
}

const nextImage = async () => {
  // 设置动画时间和效果  
  imagesRef.value.style.transition = 'transform 0.5s ease';
  currentIndex.value++
  // 到达最后一张图片后，无缝切换为实际的第一张
  if (currentIndex.value == imagesNum.value - 1) {
    moveCarousel(currentIndex.value, 1)
  }
  else {
    imagesRef.value.style.transform = `translateX(-${(currentIndex.value) * carouselWidth.value}px)`
  }
}
const prevImage = () => {
  // 设置动画时间和效果  
  imagesRef.value.style.transition = 'transform 0.5s ease'
  currentIndex.value--
  if (currentIndex.value == 0) {
    // 到达第一张图片后，无缝切换为真实的最后一张
    moveCarousel(currentIndex.value, imagesNum.value - 2)
  } else {
    imagesRef.value.style.transform = `translateX(-${(currentIndex.value) * carouselWidth.value}px)`;
  }
}
// 节流函数
const fn = (fn, time) => {
  let timer = null
  return () => {
    if (timer == null) {
      fn()
      timer = 1
      setTimeout(() => {
        timer = null
      }, time)
    }
  }
}
const init = () => {
  carouselRef.value.style.width = props.width
  carouselRef.value.style.height = props.height
  carouselWidth.value = carouselRef.value.clientWidth
  imagesRef.value.style.width = carouselWidth.value * imagesNum.value + 'px'
  imageRefs.value.forEach(imageRef => {
    // imageRef.style.width = carouselWidth.value + 'px'
    imageRef.style.width = '600px'
    console.log(imageRef.style.width)
  })
  imagesRef.value.style.transition = 'none'
  imagesRef.value.style.transform = `translateX(-${(currentIndex.value) * carouselWidth.value}px)`

  // 自动执行动画
  if (props.auto == true) {
    initAuto()
  }
  // 左右箭头
  const leftt = left.value
  const rightt = right.value
  leftt.addEventListener("click", fn(prevImage, 500))
  rightt.addEventListener("click", fn(nextImage, 500))
}
onMounted(() => {
  init()
})
watch(() => [props.width, props.height], () => {
  carouselRef.value.style.width = props.width
  carouselRef.value.style.height = props.height
  carouselWidth.value = carouselRef.value.clientWidth
  imagesRef.value.style.width = carouselWidth.value * imagesNum.value + 'px'
  imageRefs.value.forEach(imageRef => {
    imageRef.style.width = carouselWidth.value + 'px'
  })
  imagesRef.value.style.transition = 'none'
  imagesRef.value.style.transform = `translateX(-${(currentIndex.value) * carouselWidth.value}px)`
}, {
  deep: true,
})
</script>  
  
<style scoped>  .cc-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .cc-carousel-images {
      transition: all 1s;
      display: flex;

      .cc-carousel-image {
        img {
          max-width: none !important;
        }

      }
    }

    &:hover .hover.left {
      opacity: 0.8;
      transform: translateX(10px);
    }

    &:hover .hover.right {
      opacity: 0.8;
      transform: translateX(-10px);
    }

    .hover {
      opacity: 0;
    }

    .always {
      opacity: 0.8;
    }

    .never {
      opacity: 0;
    }

    .left {
      left: 5px;
    }

    .right {
      right: 5px;
    }

    .right,
    .left {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      line-height: 50px;
      background-color: #8b9bb1;
      color: white;
      text-align: center;
      font-size: 25px;
      cursor: pointer;
      transition: all 1s;
    }

    .right:hover,
    .left:hover {
      background-color: #a9b3bf;
    }

    .points {
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      margin: auto;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 5px;

      .point {
        background-color: rgb(159, 159, 162);
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .point.active {
        background-color: #fff;
      }
    }
  }
</style>