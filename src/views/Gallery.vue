<template>
  <div class="gallery">
    <h1>This is an gallery page</h1>
    <div>
      <router-link to="/gallery/a">A</router-link> |
      <router-link to="/gallery/b">B</router-link> |
      <router-link to="/gallery/c">C</router-link>
    </div>
    <router-view/>
  </div>
</template>
