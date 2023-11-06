<script setup>
import { resolveAB } from '@wlk/utils';
import numIndex from '@wlk/apis';
import {num} from '@wlk/apis/userApi/user.js'
const res = resolveAB(1,4);
</script>

<template>
  <div>
    monorepo-vue
    <hr>
    {{ res }}-- {{ numIndex }} -- {{ num }}
  </div>
</template>

<style scoped>
</style>
