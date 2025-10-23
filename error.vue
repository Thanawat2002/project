<script>
export default {
  props: {
    error: {
      type: [Object, String],
      required: true
    }
  },
  computed: {
    errorCode () {
      return this.error.statusCode || 999
    },
    errorMessage () {
      switch (this.errorCode) {
        case 404: return 'PAGE NOT FOUND'
        default: return this.error?.message?.toUpperCase() || 'AN ERROR OCCURRED'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      clearError({ redirect: '/404' })
    }, 5000)
  }
}
</script>

<template>
  <div class="flex justify-center items-center w-screen h-screen bg-[#01081999]">
    <div class="flex flex-col justify-center text-center p-8 bg-white w-full h-full md:w-[500px] md:rounded-lg shadow-lg">
      <h1 class="text-6xl font-bold text-gray-800">{{ errorCode }}</h1>
      <p class="mt-4 text-2xl font-bold text-gray-700">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
