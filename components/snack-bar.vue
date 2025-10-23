<script>
import { useSnackbarStore } from '@/stores/snackbar'

export default {
  data: () => ({
    snackbarStore: useSnackbarStore()
  }),
  computed: {
    snackbar: {
      get () {
        return this.snackbarStore.snackbar
      },
      set (val) {
        this.snackbarStore.setSnackbar(val)
      }
    }
  },
  watch: {
    'snackbar.active': {
      handler (val) {
        if (val) {
          setTimeout(() => {
            this.snackbar.active = false
          }, 3000)
        }
      },
      deep: true
    }
  }
}
</script>

<template>
  <Transition name="fade">
    <div
      v-show="snackbar.active"
      key="1"
      class="fixed z-50 px-3 py-1 right-2 top-[62px] bg-white text-black">
      <span class="text-xs md:text-sm">
        {{ snackbar.text }}
      </span>
      <div class="loading-bar" />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.loading-bar {
  background-color: black;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  /* width: 100%; */
  animation: loading 3s ease-out;
}
@keyframes loading {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
