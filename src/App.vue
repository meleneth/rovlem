<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useItemStore } from '@/stores/item'
import { useSkillStore } from '@/stores/skill'
import { useInventoryStore } from '@/stores/inventory'
import HelloWorld from './components/HelloWorld.vue'

const item_store = useItemStore()
const { items } = storeToRefs(item_store)

const inventory_store = useInventoryStore()
const { inventory } = storeToRefs(inventory_store)

const skill_store = useSkillStore()
const { current_skill, current_skill_target } = storeToRefs(skill_store)

var num_ticks = ref(0);

const ticktimer = setInterval(() => {
  num_ticks.value = num_ticks.value + 1;
  if (num_ticks.value > current_skill_target.value.ticks) {
    num_ticks.value -= current_skill_target.value.ticks
    inventory_store.add_items(current_skill_target.value.name, 1)
    skill_store.gain_skill_xp(current_skill.value.name, current_skill_target.value.xp.fishing)
  }
}, 100);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
