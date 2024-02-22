<template>
  <div id="clustering" class="bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl sm:text-center">
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pilih paket yang sesuai untuk Anda</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Kami menawarkan berbagai paket yang memberikan berbagai benefit pada tingkatan yang berbeda kepada anda. Penjelasan lengkap tentang layanan kami.
      </p>
      <div class="mt-20 flow-root">
        <div class="isolate grid max-w-sm grid-cols-1 gap-y-16 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 xl:-mx-4">
          <div v-for="tier in tiers" :class="tier.class" :key="tier.id" class="hover:scale-[1.05] hover:border-slate-700 transition rounded-xl mx-2 lg:px-8 xl:px-14">
            <h3 :id="tier.id" class="pt-4  text-center text-base font-semibold leading-7 text-gray-900">{{ tier.name }}</h3>
            <div class="mt-6 flex mx-4 items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.price.monthly }}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">{{ tier.price.interval }}</span>
            </div>
            <p class="mt-3 mx-4 text-sm leading-6 text-slate-800 font-bold">{{ tier.description }}</p>
            <a :href="tier.href" :aria-describedby="tier.id" class="mt-10 mx-4 block rounded-md bg-slate-700 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-50 hover:text-slate-600 transition hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">Beli paket</a>
            <p class="mt-10 mx-4 text-sm font-semibold leading-6 text-gray-900">{{ tier.benefits }}</p>
            <ul role="list" class="pb-5 mx-4 mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <CheckCircleIcon class="h-6 w-5 flex-none text-slate-50" aria-hidden="true" />
                <p class="text-slate-900">{{ feature }}</p>
              </li>
            </ul>
          </div>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Atau, buat kado sendiri sesuai keinginanmu!</p>
        

<!-- custom part -->
<div class="lg:mt-20 xs:mt-10 flex justify-center">
          <div class="flex justify-center gap-y-16 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 xl:-mx-4">
            <div :class="customTier.class" :key="customTier.id" class="hover:scale-[1.05] hover:border-slate-700 lg:w-8/12 sm:w-10/12 transition rounded-xl mx-2 lg:px-4">
            <h3 :id="customTier.id" class="pt-4  text-center text-base font-semibold leading-7 text-gray-900">{{ customTier.name }}</h3>
            <div class="mt-2 mx-4 flex items-baseline gap-x-1">
              <span class="text-4xl font-bold tracking-tight text-gray-800">Produk dengan harga disesuaikan.</span>
            </div>
            <p class="mt-3 mx-4 text-sm leading-6 text-slate-800 font-bold">{{ customTier.description }}</p>
            <a :href="customTier.href" :aria-describedby="customTier.id" class="mt-10 mx-4 block rounded-md bg-slate-700 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-50 hover:text-slate-600 transition hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">Beli paket</a>
            <p class="mt-10 text-sm mx-4 font-semibold leading-6 text-gray-900">{{ customTier.benefits }}</p>
            <ul role="list" class="mx-4 pb-5 mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li v-for="feature in customTier.features" :key="feature" class="flex gap-x-3">
                <CheckCircleIcon class="h-6 w-5 flex-none text-slate-70" aria-hidden="true" />
                <p class="text-slate-900">{{ feature }}</p>
              </li>
            </ul>
          </div>
        </div>
        </div>
<!-- custom part -->

      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Silver',
    id: 'tier-silver',
    class: 'bg-gradient-to-r from-slate-400 to-slate-200 shadow-lg',
    href: 'https://api.whatsapp.com/send?phone=6281281818775&text=%20Halo%20Kak%20Ali,%20saya%20tertarik%20dengan%20paket%20Silver%20dari%20Unix.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20dan%20rekomendasi%20untuk%20pilihan%20souvenir%20terbaik?',
    price: { monthly: '50 - 99', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Paket ideal untuk hadiah yang penuh perhatian dengan anggaran terbatas.',
    benefits: 'Pilih hingga 5 item dari koleksi hadiah kami.',
    features: ['Pengiriman cepat', 'Dukungan pelanggan', 'Kustomisasi terbatas'],
  },
  {
    name: 'Gold',
    id: 'tier-gold',
    class: 'bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-500 shadow-lg',
    href: 'https://api.whatsapp.com/send?phone=6281281818775&text=%20Halo%20Kak%20Ali,%20saya%20tertarik%20dengan%20paket%20Gold%20dari%20Unix.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20dan%20rekomendasi%20untuk%20pilihan%20souvenir%20terbaik?',
    price: { monthly: '100 - 249', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Tingkatkan pengalaman memberikan hadiah Anda dengan lebih banyak pilihan.',
    benefits: 'Pilih hingga 10 item dari koleksi hadiah kami.',
    features: ['Pengiriman cepat', 'Dukungan pelanggan', 'Opsi kustomisasi', 'Hadiah premium'],
  },
  {
    name: 'Platinum',
    id: 'tier-platinum',
    class: 'bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 shadow-xl',
    href: 'https://api.whatsapp.com/send?phone=6281281818775&text=%20Halo%20Kak%20Ali,%20saya%20tertarik%20dengan%20paket%20Platinum%20dari%20Unix.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20dan%20rekomendasi%20untuk%20pilihan%20souvenir%20terbaik?',
    price: { monthly: '250+', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Pengalaman memberikan hadiah tertinggi untuk orang yang Anda cintai.',
    benefits: 'Pilihan hadiah dan opsi kustomisasi tak terbatas.',
    features: ['Pengiriman prioritas', 'Dukungan pelanggan premium 24/7', 'Hadiah eksklusif dan personal', 'Kustomisasi tak terbatas'],
  },
]

const customTier = {
    name: 'My Style Paket',
    id: 'tier-platinum',
    class: 'bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 shadow-lg',
    href: 'https://api.whatsapp.com/send?phone=6281281818775&text=%20Halo%20Kak%20Ali,%20saya%20tertarik%20dengan%20paket%20Custom%20dari%20Unix.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut%20dan%20rekomendasi%20untuk%20pilihan%20souvenir%20terbaik?',
    price: { monthly: '', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Buat paket hadiah pribadi Anda dengan pilihan tak terbatas.',
    benefits: 'Pilih dari berbagai pilihan hadiah dan kustomisasi.',
    features: ['Pengiriman express', 'Dukungan pelanggan premium 24/7', 'Hadiah eksklusif dan personal', 'Kustomisasi tak terbatas', 'Estimasikan Souvenir Anda Secara Pribadi', 'Nego Harga'],
}
</script>
