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
  mounted () {
    this.getQueryFromUrl()
    if (!this.isErrorQuery) {
      setTimeout(() => {
        this.handleRequestVatRefund()
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

    async handleRequestVatRefund() {
      const reqVatARefUrl = this.config.public.reqVatARefUrl

      const vatRefundUrl = `${reqVatARefUrl}/#/request?sellerId=${this.urlCurrent.sellerId}&token=${this.urlCurrent.token}&label=${this.urlCurrent.label}`
      window.location.replace(vatRefundUrl)
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
          <p class="text-sm text-stone-800">REDIRECTING TO REQUEST A VAT REFUND</p>
        </div>
      </div>
    </div>
  </div>
</template>
