<template>
    <div class="">
      <router-view></router-view>
    </div>
  </template>
  
  <script setup lang='ts'>
  import { useUserStore } from '@/stores';
  const user=useUserStore()

  </script>
  
  <style>

  </style>