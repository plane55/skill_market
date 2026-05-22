<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 20
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-indigo-200">
            S
          </div>
          <span class="text-xl font-bold gradient-text hidden sm:block">SkillMarket</span>
        </div>

        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">发现技能</a>
          <a href="#" class="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">关于我们</a>
        </div>

        <!-- CTA -->
        <button class="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-indigo-200/50 transition-all duration-300 hover:scale-105 active:scale-95">
          开始探索
        </button>
      </div>
    </div>
  </nav>
</template>
