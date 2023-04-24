<!--
 * @Author: g05047
 * @Date: 2023-04-12 17:00:29
 * @LastEditors: g05047
 * @LastEditTime: 2023-04-24 15:27:24
 * @Description: file content
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
    <div>
        <router-view></router-view>
        <HelloWorld msg="Vite + Vue"></HelloWorld>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #4b4f9faa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
