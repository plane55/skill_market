<script setup>
import { computed } from 'vue'
import { categories } from '../data/skills'

const props = defineProps({ skill: Object })

const categoryName = computed(() => {
  const cat = categories.find(c => c.id === props.skill.category)
  return cat ? cat.name : ''
})

const categoryColors = {
  ai: 'bg-violet-100 text-violet-700',
  programming: 'bg-blue-100 text-blue-700',
  design: 'bg-pink-100 text-pink-700',
  writing: 'bg-orange-100 text-orange-700',
  marketing: 'bg-green-100 text-green-700',
  management: 'bg-cyan-100 text-cyan-700',
  data: 'bg-yellow-100 text-yellow-700',
  language: 'bg-teal-100 text-teal-700',
  growth: 'bg-rose-100 text-rose-700',
}

const difficultyMap = {
  1: { label: '初级', class: 'text-emerald-600 bg-emerald-50' },
  2: { label: '中级', class: 'text-amber-600 bg-amber-50' },
  3: { label: '高级', class: 'text-rose-600 bg-rose-50' },
}
</script>

<template>
  <div
    class="group glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60 cursor-pointer"
  >
    <!-- Featured badge -->
    <div v-if="skill.featured" class="flex items-center justify-between mb-3">
      <span class="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-amber-600 bg-amber-50 rounded-full">
        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        精选推荐
      </span>
      <span class="text-2xl sm:text-3xl">{{ skill.icon }}</span>
    </div>
    <div v-else class="flex items-start justify-between mb-3">
      <span class="text-2xl sm:text-3xl">{{ skill.icon }}</span>
    </div>

    <!-- Title -->
    <h3 class="text-base sm:text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
      {{ skill.name }}
    </h3>

    <!-- Description -->
    <p class="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
      {{ skill.description }}
    </p>

    <!-- Tags row -->
    <div class="flex items-center gap-2 mb-4 flex-wrap">
      <span class="px-2.5 py-0.5 text-xs font-medium rounded-full" :class="categoryColors[skill.category] || 'bg-slate-100 text-slate-600'">
        {{ categoryName }}
      </span>
      <span class="px-2.5 py-0.5 text-xs font-medium rounded-full" :class="difficultyMap[skill.difficulty]?.class || difficultyMap[1].class">
        {{ difficultyMap[skill.difficulty]?.label || difficultyMap[1].label }}
      </span>
    </div>

    <!-- Rating -->
    <div class="flex items-center gap-1.5 mb-4">
      <div class="flex items-center">
        <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5" :class="i <= Math.round(skill.rating) ? 'text-amber-400' : 'text-slate-200'" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <span class="text-sm font-semibold text-slate-700">{{ skill.rating }}</span>
      <span class="text-xs text-slate-400">({{ skill.reviewCount }} 评)</span>
    </div>

    <!-- Author bar -->
    <div class="flex items-center justify-between pt-4 border-t border-slate-100">
      <div class="flex items-center gap-2.5">
        <div
          class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold text-white ring-2 ring-white shadow-sm"
          :class="skill.author.color"
        >
          {{ skill.author.avatar }}
        </div>
        <span class="text-sm text-slate-600 font-medium">{{ skill.author.name }}</span>
      </div>
      <div class="flex items-center gap-1 text-xs text-slate-400">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span>{{ skill.enrolledCount >= 1000 ? (skill.enrolledCount / 1000).toFixed(1) + 'k' : skill.enrolledCount }}</span>
      </div>
    </div>
  </div>
</template>
