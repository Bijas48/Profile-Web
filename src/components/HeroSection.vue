<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import imageSaya from '/images/iniguehehe.jpg'
import resume from '/pdf/resume.pdf'

const words = ['Adrian Kusuma', 'Backend Developer', 'Cloud Engineer', 'Software Developer']
let i = 0
let j = 0
let isDeleting = false
const typewriter = ref('')

function type() {
  const currentWord = words[i]
  const typingSpeed = isDeleting ? 50 : 150
  const pauseDuration = 3000

  if (isDeleting) {
    typewriter.value = currentWord.substring(0, j - 1)
    j--
    if (j === 0) {
      isDeleting = false
      i++
      if (i === words.length) i = 0
    }
  } else {
    typewriter.value = currentWord.substring(0, j + 1)
    j++
    if (j === currentWord.length) {
      isDeleting = true
      setTimeout(type, pauseDuration)
      return
    }
  }
  setTimeout(type, typingSpeed)
}

const particles = ref([])
const settings = {
  cursorRadius: 70,
  dotsColor: '#636363',
  dotsRadius: 1,
  xSpacing: 25,
  ySpacing: 25,
}
const masked = ref(true)
const mouse = ref({ x: 0, y: 0 })

function drawParticles(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  particles.value.forEach((particle) => {
    context.beginPath()
    context.fillStyle = particle.color
    context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2)
    context.fill()

    const dx = mouse.value.x - particle.x
    const dy = mouse.value.y - particle.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < settings.cursorRadius) {
      particle.x -= dx / 5
      particle.y -= dy / 5
    }

    particle.x -= (particle.x - particle.xo) / 15
    particle.y -= (particle.y - particle.yo) / 15
  })
}

function initParticles(canvas) {
  particles.value = []
  for (let x = 0; x < canvas.width / settings.xSpacing; x++) {
    for (let y = 0; y < canvas.height / settings.ySpacing; y++) {
      particles.value.push({
        x: x * settings.xSpacing,
        y: y * settings.ySpacing,
        xo: x * settings.xSpacing,
        yo: y * settings.ySpacing,
        r: settings.dotsRadius,
        color: settings.dotsColor,
      })
    }
  }
}

onMounted(() => {
  const canvas = document.getElementById('particleCanvas')
  const context = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  initParticles(canvas)

  window.addEventListener('mousemove', (event) => {
    mouse.value.x = event.clientX
    mouse.value.y = event.clientY
  })

  function animate() {
    drawParticles(context)
    requestAnimationFrame(animate)
  }
  animate()
  type()
})
</script>

<template>
  <section class="relative mx-auto lg:h-screen bg-inherit p-24 w-full">
    <div class="flex flex-col lg:flex-row justify-center items-center w-full h-full">
      <div
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0 }"
        :variants="{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
        class="w-full flex flex-row justify-center items-center h-1/2 lg:pl-7"
      >
        <div class="flex flex-col justify-center items-center mt-5">
          <div class="h-8 w-8 rounded-full bg-slate-800"></div>
          <div class="w-1 h-80 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-50"></div>
        </div>
        <div>
          <h1 class="text-base sm:text-2xl lg:text-4xl font-bold text-slate-600 mb-4">
            Hi, I’m
            <span class="text-base sm:text-2xl lg:text-4xl font-bold text-slate-800">{{
              typewriter
            }}</span
            ><span class="blinking-cursor">|</span>
          </h1>
          <p class="font-semibold text-xs sm:text-base">
            Just a curious person with an adventurous spirit, always eager to learn and grow. I
            embrace challenges and believe every experience makes me stronger and more capable. If
            there's a chance to try, why not? Just send it and keep hustling!
          </p>
          <div class="flex flex-row gap-4 items-center justify-start mt-8">
            <a
              :href="resume"
              class="bg-slate-600 w-50 lg:w-60 p-3 lg:p-5 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
            >
              <div class="flex flex-row items-center justify-between text-slate-50">
                <p class="hidden sm:block text-sm lg:text-lg font-semibold">Here is my CV</p>
                <Icon class="h-8 w-8 sm:h-10 sm:w-10" icon="line-md:text-box" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/adriankusumawk/"
              class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
            >
              <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 p-2" icon="line-md:linkedin" />
            </a>
            <a
              href="https://github.com/bijas48/"
              class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
            >
              <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" icon="line-md:github-loop" />
            </a>
            <a
              href="https://www.instagram.com/adrian_k.w/"
              class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
            >
              <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" icon="line-md:instagram" />
            </a>
            <a
              href="mailto:adriankusumawk@gmail.com"
              class="text-slate-600 rounded-xl scale-90 hover:scale-100 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gray-400"
            >
              <Icon class="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14" icon="line-md:email-twotone" />
            </a>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0 }"
        :variants="{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }"
        :visible="{ opacity: 1, x: 0 }"
        :duration="800"
        class="relative flex flex-col justify-center items-center p-8 lg:p-16 w-[20rem] h-[30rem] lg:w-[50rem] lg:h-[40rem]"
      >
        <div
          class="absolute top-16 lg:top-9 left-10 lg:left-14 flex flex-col items-center gap-6 z-10"
        >
          <div class="h-36 lg:h-48 w-6 lg:w-10 bg-slate-800 rounded-full"></div>
          <div class="h-10 lg:h-14 w-6 lg:w-10 bg-slate-500 rounded-full"></div>
        </div>
        <img
          class="h-[18rem] lg:h-fit shadow-md relative z-0 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-400"
          :src="imageSaya"
          alt="Ini Saya"
        />
        <div
          class="absolute bg-slate-300 bottom-10 right-15 lg:right-7 w-fit h-15 px-10 lg:h-20 lg:px-20 py-1 text-center rounded-2xl font-semibold shadow-md scale-90 hover:scale-100 duration-300 transition-all hover:shadow-lg hover:shadow-gray-400"
        >
          <div class="flex flex-col items-center justify-center py-2">
            <p class="text-xs md:text-sm lg:text-base">Currently as</p>
            <span class="font-bold text-base md:text-lg lg:text-xl">Student</span>
          </div>
        </div>
      </div>

      <canvas
        id="particleCanvas"
        class="canvas w-full bg-slate-50 -z-10"
        :class="{ 'is-masked': masked }"
      ></canvas>
    </div>
  </section>
</template>

<style scoped>
.blinking-cursor {
  display: inline-block;
  width: 3px;
  background-color: currentColor;
  margin-left: 2px;
  animation: blink 0.8s steps(2, start) infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.is-masked {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
</style>
