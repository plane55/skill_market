<script setup>
import { categories } from '../data/skills'
</script>

<template>
  <footer class="bg-slate-900 text-slate-400 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
        <!-- Brand -->
        <div class="col-span-2 sm:col-span-1">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">S</div>
            <span class="text-lg font-bold text-white">Skill市场</span>
          </div>
          <p class="text-sm leading-relaxed text-slate-500">
            汇聚各领域专家的实战技能课程，<br />助你发现属于你的下一个技能。
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">快速链接</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">发现技能</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">关于我们</a></li>
            <li><a href="#" class="text-sm hover:text-indigo-400 transition-colors">帮助中心</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">热门分类</h4>
          <ul class="space-y-2.5">
            <li v-for="cat in categories.slice(1, 7)" :key="cat.id">
              <a href="#" class="text-sm hover:text-indigo-400 transition-colors">{{ cat.icon }} {{ cat.name }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 SkillMarket. All rights reserved.</p>
          <div class="flex items-center gap-4">
            <a href="#" class="hover:text-indigo-400 transition-colors">隐私政策</a>
            <a href="#" class="hover:text-indigo-400 transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
