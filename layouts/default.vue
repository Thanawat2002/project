<script setup>

</script>

<template>
  <div class="w-full relative">
    <SnackBar />

    <main class="min-h-[100dvh]">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: rgb(174, 174, 183);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
input {
  border-radius: 0;
}
textarea {
  border-radius: 0;
}
</style>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  left: -100%;
  opacity: 0;
}

@media (min-width: 768px) {
  .slide-enter-from,
  .slide-leave-to {
    left: -28rem;
    opacity: 0;
  }
}
</style>