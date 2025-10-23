<script>
import { useRuntimeConfig } from 'nuxt/app'
import { useSnackbarStore } from '~/stores/snackbar'

export default {
  data: () => ({
    profile: '',
    fullName: '',
    phone: '',
    selectedSocialMedia: '',
    agreeTerms: [],
    socialMedia: [
      {
        name: 'Facebook',
        value: 'facebook',
      },
      {
        name: 'Instagram',
        value: 'instagram',
      },
      {
        name: 'Twitter',
        value: 'twitter',
      }
    ],
    agreeMsg: [
      { name: 'คุณได้รับ Comment และติด Hashtag แล้ว', value: 'comment' },
      { name: 'คุณได้ Repost หรือ Share โพสต์กิจกรรมแล้ว', value: 'repost' },
      { name: 'คุณได้ติดตาม Facebook,Tiktok,Instagram ของบะหมี่มาเฟีย Kopegfood แล้ว', value: 'follow' },
      { 
        name: 'คุณยอมรับเงื่อนไขกิจกรรม', 
        value: 'terms', 
        link: {
          name: 'เงื่อนไขกิจกรรม',
          url: 'https://google.com'
        }
      },
      { name: 'คุณอนุญาติให้บริษัทนำข้อมูลไปใช้เพื่อทำการตลาดได้', value: 'marketing' },
    ],
  }),
  methods: {
    async handleSubmit() {
      const runtimeConfig = useRuntimeConfig()
      const payload = {
        profile: this.profile,
        fullName: this.fullName,
        phone: this.phone,
        selectedSocialMedia: this.selectedSocialMedia,
        agreeTerms: this.agreeTerms,
      }

      try {
        const response = await fetch(`${runtimeConfig.public.apiUrl}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        console.log(response)
      } catch (error) {
        const snackbarStore = useSnackbarStore()
        snackbarStore.setSnackbar({
          active: true,
          text: 'เกิดข้อผิดพลาด',
          type: 'error'
        })
        console.log(error)
      }
    }, 
    openLink(link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<template>
  <div class="flex justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
    <div class="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
      <!-- Header Section -->
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
        <h1 class="text-2xl font-bold text-white text-center">แบบฟอร์มร่วมกิจกรรม</h1>
      </div>

      <!-- Form Section -->
      <form @submit.prevent="handleSubmit" class="px-8 py-6 space-y-6">
        <!-- Profile Input -->
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">
            โปรไฟล์
          </label>
          <input 
            v-model="profile"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder-gray-400"
            placeholder="กรอกข้อมูลโปรไฟล์"
          >
        </div>

        <!-- Full Name Input -->
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">
            ชื่อนามสกุล
          </label>
          <input 
            v-model="fullName"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder-gray-400"
            placeholder="กรอกชื่อและนามสกุล"
          >
        </div>

        <!-- Phone Input -->
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">
            เบอร์โทรศัพท์
          </label>
          <input 
            v-model="phone"
            type="tel"
            pattern="[0-9]{10}"
            required
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 placeholder-gray-400"
            placeholder="0XX-XXX-XXXX"
          >
        </div>

        <!-- Activity Channel Select -->
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-gray-700">
            คุณได้รับข้อมูลจาก
          </label>
          <select 
            v-model="selectedSocialMedia"
            required
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 text-gray-700 cursor-pointer appearance-none bg-no-repeat bg-right pr-10"
            style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e'); background-size: 1.5em; background-position: right 0.7rem center;"
          >
            <option value="" disabled>เลือก Social Media</option>
            <option 
              v-for="social in socialMedia" 
              :key="social.value"
              :value="social.value"
            >
              {{ social.name }}
            </option>
          </select>
        </div>

        <!-- Checkbox -->
        <div class="space-y-2">
          <div
            v-for="(agree, index) in agreeMsg"
            :key="agree.value"
            class="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            <input 
              type="checkbox"
              :id="'agree-' + index"
              :value="agree.value"
              v-model="agreeTerms"
              class="w-5 h-5 mt-0.5 text-indigo-600 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer flex-shrink-0"
            >
            <label 
              :for="'agree-' + index" 
              class="text-sm text-gray-700 cursor-pointer select-none leading-relaxed flex-1"
            >
              {{ agree.name }} 
              <a 
                v-if="agree.link"
                :href="agree.link.url"
                target="_blank"
                @click.stop
                class="text-indigo-600 hover:text-indigo-800 font-medium underline ml-1"
              >
                {{ agree.link.name }}
              </a>
            </label>
          </div>

        </div>
        

        <!-- Submit Button -->
        <div class="pt-4">
          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            ส่งข้อมูล
          </button>
        </div>
      </form>
    </div>
  </div>
</template>