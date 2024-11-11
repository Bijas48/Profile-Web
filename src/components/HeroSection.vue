<script setup>
import { ref, onMounted } from 'vue'

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
  <section class="relative mx-auto h-[80vh] lg:h-screen bg-slate-50 p-16 w-full">
    <div class="flex flex-col lg:flex-row justify-center items-center w-full h-full">
      <div class="w-full flex flex-row justify-center items-center">
        <div class="flex flex-col justify-center items-center mt-5">
          <div class="h-8 w-8 rounded-full bg-slate-800"></div>
          <div class="w-1 h-40 bg-gradient-to-b from-slate-800 via-slate-600 to-slate-50"></div>
        </div>
        <div>
          <h1 class="text-4xl font-bold text-slate-600">
            Hi, I’m <span class="text-4xl font-bold text-slate-800">{{ typewriter }}</span
            ><span class="blinking-cursor">|</span>
          </h1>
          <p class="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit vero molestiae, ab
            quisquam provident inventore praesentium ullam voluptatem nihil, vitae soluta laborum
            omnis ea quam maxime at dolorem itaque.
          </p>
        </div>
      </div>

      <div class="w-full">test 2</div>
      <canvas id="particleCanvas" class="canvas w-full" :class="{ 'is-masked': masked }"></canvas>
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
