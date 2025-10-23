<script>
export default {
  data: () => ({
    statusCode: 400,
    message: 'BAD REQUEST'
  })
}
</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen bg-[#01081999]">
    <div class="flex flex-col justify-center text-center  p-8 bg-white w-full h-full md:w-[500px] md:rounded-lg shadow-lg">
      <h1 class="text-6xl font-bold text-gray-800">{{ statusCode }}</h1>
      <p class="mt-4 text-2xl font-bold text-gray-700">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
