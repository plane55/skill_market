<script setup>
import { categories } from '../data/skills'

defineProps({ activeCategory: { type: String, default: 'all' } })
const emit = defineEmits(['select'])
</script>

<template>
  <section class="py-6 sm:py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center gap-2 sm:gap-3">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="emit('select', cat.id)"
          class="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none"
          :class="activeCategory === cat.id
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200/40 scale-105'
            : 'bg-white text-slate-600 border border-slate-200/70 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm active:scale-95'"
        >
          <span class="text-base sm:text-lg">{{ cat.icon }}</span>
          <span>{{ cat.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
