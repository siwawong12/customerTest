<script setup>
import Grader from "./components/grader.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid ms-5">
      <a class="navbar-brand" href="#">
        <p class="h3 text-uppercase">Similan Web exam</p>
      </a>
      <div class="navbar-collapse">
        <div class="navbar-nav">
          <a class="nav-item text-decoration-none" ><router-link class="nav-link fw-bold text-uppercase" to="/">Grader</router-link></a>
          <a class="nav-item text-decoration-none" ><router-link class="nav-link fw-bold text-uppercase" to="/calculator">Calculator</router-link></a>
          <a class="nav-item text-decoration-none" ><router-link class="nav-link fw-bold text-uppercase" to="/crud">crud</router-link></a>
        </div>
      </div>
    </div>
  </nav>
  <router-view  v-slot="{ Component, route }">
    <transition name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
  </router-view>
</template>
