<script setup>
import { ref, computed } from 'vue'
import { skills as allSkills, categories } from './data/skills'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import CategoryNav from './components/CategoryNav.vue'
import SkillCard from './components/SkillCard.vue'
import FooterSection from './components/FooterSection.vue'

const activeCategory = ref('all')

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return allSkills
  return allSkills.filter(s => s.category === activeCategory.value)
})

const categoryTitle = computed(() => {
  if (activeCategory.value === 'all') return '全部技能'
  const cat = categories.find(c => c.id === activeCategory.value)
  return cat ? cat.name + ' 技能' : '技能列表'
})

function onSelectCategory(id) {
  activeCategory.value = id
}
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <HeroSection />
    <CategoryNav :active-category="activeCategory" @select="onSelectCategory" />

    <!-- Skills Grid -->
    <section class="pb-16 sm:pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section header -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-800">
              {{ categoryTitle }}
            </h2>
            <p class="text-sm text-slate-400 mt-1">共 {{ filteredSkills.length }} 个课程</p>
          </div>
        </div>

        <!-- Grid -->
        <div
          v-if="filteredSkills.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <div
            v-for="(skill, index) in filteredSkills"
            :key="skill.id"
            class="animate-fade-in"
            :style="{ animationDelay: `${(index % 8) * 0.06}s` }"
          >
            <SkillCard :skill="skill" />
          </div>
        </div>

        <!-- Empty state -->
        <div v-else class="text-center py-20">
          <span class="text-5xl mb-4 block">🔍</span>
          <p class="text-lg font-medium text-slate-600">暂无该分类下的技能</p>
          <p class="text-sm text-slate-400 mt-1">试试选择其他分类</p>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>
