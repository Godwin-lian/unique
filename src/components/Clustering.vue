<template>
  <div id="clustering" class="bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl sm:text-center">
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pilih paket yang sesuai untuk Anda</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Kami menawarkan berbagai paket yang memberikan berbagai benefit pada tingkatan yang berbeda kepada anda. Penjelasan lengkap tentang layanan kami.
      </p>
      <div class="mt-20 flow-root">
        <div class="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
          <div v-for="tier in tiers" :class="tier.class" :key="tier.id" class="hover:scale-[1.05] hover:border-slate-700 transition rounded-xl mx-2 pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 :id="tier.id" class="pt-4  text-center text-base font-semibold leading-7 text-gray-900">{{ tier.name }}</h3>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-5xl font-bold tracking-tight text-gray-900">{{ tier.price.monthly }}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">{{ tier.price.interval }}</span>
            </p>
            <p class="mt-3 text-sm leading-6 text-slate-800 font-bold">{{ tier.description }}</p>
            <a :href="tier.href" :aria-describedby="tier.id" class="mt-10 block rounded-md bg-slate-700 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-50 hover:text-slate-600 transition hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">Beli paket</a>
            <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">{{ tier.benefits }}</p>
            <ul role="list" class="pb-5 mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <CheckCircleIcon class="h-6 w-5 flex-none text-slate-50" aria-hidden="true" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Atau, buat kado sendiri sesuai keinginanmu!</p>
        

<!-- custom part -->
<div class="mt-20 flex justify-center">
<div class=" -mt-16 max-w-sm gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
<div :class="customTier.class" :key="customTier.id" class="hover:scale-[1.05] hover:border-slate-700 transition rounded-xl mx-2 pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 :id="customTier.id" class="pt-4  text-center text-base font-semibold leading-7 text-gray-900">{{ customTier.name }}</h3>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-7xl font-bold tracking-tight text-gray-900">{{ customTier.price.monthly }}&#8734</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">{{ customTier.price.interval }}</span>
            </p>
            <p class="mt-3 text-sm leading-6 text-slate-800 font-bold">{{ customTier.description }}</p>
            <a :href="customTier.href" :aria-describedby="customTier.id" class="mt-10 block rounded-md bg-slate-700 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-50 hover:text-slate-600 transition hover:scale-105 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">Beli paket</a>
            <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">{{ customTier.benefits }}</p>
            <ul role="list" class="pb-5 mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li v-for="feature in customTier.features" :key="feature" class="flex gap-x-3">
                <CheckCircleIcon class="h-6 w-5 flex-none text-slate-70" aria-hidden="true" />
                {{ feature }}
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
    class: 'bg-gradient-to-r from-slate-300 to-slate-200',
    href: '#',
    price: { monthly: '50 - 99', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Paket ideal untuk hadiah yang penuh perhatian dengan anggaran terbatas.',
    benefits: 'Pilih hingga 5 item dari koleksi hadiah kami.',
    features: ['Pengiriman cepat', 'Dukungan pelanggan', 'Kustomisasi terbatas'],
  },
  {
    name: 'Gold',
    id: 'tier-gold',
    class: 'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600',
    href: '#',
    price: { monthly: '100 - 249', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Tingkatkan pengalaman memberikan hadiah Anda dengan lebih banyak pilihan.',
    benefits: 'Pilih hingga 10 item dari koleksi hadiah kami.',
    features: ['Pengiriman cepat', 'Dukungan pelanggan', 'Opsi kustomisasi', 'Hadiah premium'],
  },
  {
    name: 'Platinum',
    id: 'tier-platinum',
    class: 'bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500',
    href: '#',
    price: { monthly: '250+', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Pengalaman memberikan hadiah tertinggi untuk orang yang Anda cintai.',
    benefits: 'Pilihan hadiah dan opsi kustomisasi tak terbatas.',
    features: ['Pengiriman prioritas', 'Dukungan pelanggan premium 24/7', 'Hadiah eksklusif dan personal', 'Kustomisasi tak terbatas'],
  },
]

const customTier = {
    name: 'My Style Paket',
    id: 'tier-platinum',
    class: 'bg-gradient-to-r from-slate-100 shadow-lg via-slate-200 to-slate-100',
    href: '#',
    price: { monthly: '', interval: 'ribu rupiah', annually: 'Kustom' },
    description: 'Buat paket hadiah pribadi Anda dengan pilihan tak terbatas.',
    benefits: 'Pilih dari berbagai pilihan hadiah dan kustomisasi.',
    features: ['Pengiriman express', 'Dukungan pelanggan premium 24/7', 'Hadiah eksklusif dan personal', 'Kustomisasi tak terbatas', 'Estimasikan Souvenir Anda Secara Pribadi'],
}
</script>
