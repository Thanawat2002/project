<script>
export default {
  data: () => ({
    urlCurrent: {},
    storeId: '',
    route: useRoute(),
    config: useRuntimeConfig(),
    brandName: ['Gentlewoman', 'Matter Makers', 'Gentlelitllewoman', 'Gentlewoman Universe'],
     isErrorQuery: false
  }),
  computed: {
    shareFeedbackUrl() {
      if (this.storeId === this.config.public.storeKeyGW) {
        return this.config.public.shareFeedbackGWUrl
      } else if (this.storeId === this.config.public.storeKeyMM) {
        return this.config.public.shareFeedbackMMUrl
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.getQueryFromUrl()
    if (!this.isErrorQuery) {
      setTimeout(() => {
        this.handleShareFeedback()
      }, 1000)
    }
  },
  methods: {
    getQueryFromUrl() {
      this.urlCurrent = this.route.query

      if (!this.urlCurrent.token || !this.urlCurrent.label || !this.urlCurrent.branch_code || !this.urlCurrent.store_id || !this.urlCurrent.sellerId || !this.urlCurrent.date) {
        this.isErrorQuery = true
        return navigateTo('/400')
      }

      if (!this.urlCurrent.brand || !this.brandName.includes(this.urlCurrent.brand)) {
        this.isErrorQuery = true
        return navigateTo('/400')
      }

      if (this.urlCurrent.store_id === this.config.public.storeKeyMM || this.urlCurrent.store_id === this.config.public.storeKeyGW) {
        this.storeId = this.urlCurrent.store_id
      } else {
        this.isErrorQuery = true
        return navigateTo('/400')
      }
    },
    async handleShareFeedback() {
      const feedbackUrl = `${this.shareFeedbackUrl}?prefill_Branch=${this.urlCurrent.branch_code}&hide_Branch=1&prefill_Invoice=${this.urlCurrent.label}&hide_Invoice=1`
      window.location.replace(feedbackUrl)
    }
  }
}
</script>

<template>
  <div class="flex justify-center min-h-screen bg-[#01081999]">
    <div class="bg-white w-full min-h-screen md:w-[500px] md:rounded-lg shadow-lg">
      <div
        class="justify-center items-center h-[100vh]">
        <div class="flex flex-col w-full h-[100vh] justify-center items-center text-center p-2">
          <p class="text-sm text-stone-800 mb-2">กำลังไปยังหน้าสำหรับแสดงความคิดเห็นเกี่ยวกับร้านของเรา</p>
          <p class="text-sm text-stone-800">REDIRECTING TO SHARE FEEDBACK.</p>
        </div>
      </div>
    </div>
  </div>
</template>