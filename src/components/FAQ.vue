<template>
      <div id="FAQ" class="mx-auto max-w-8xl px-6 xs:py-10 sm:py-32 lg:px-8 lg:py-20">
        <div class="mx-auto max-w-6xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
  
  const faqs = [
  {
    question: "Apa yang membuat produk kami berbeda?",
    answer:
      "Produk kami dibuat dengan cinta dan perhatian kepada detail. Kami menggunakan bahan berkualitas tinggi dan mengikuti standar kualitas yang ketat. Hasilnya adalah produk yang unik dan berkualitas tinggi.",
  },
  {
    question: "Bagaimana cara melakukan pengembalian produk?",
    answer:
      "Pengembalian produk sangat mudah. Anda hanya perlu menghubungi layanan pelanggan kami, dan mereka akan membantu Anda dengan proses pengembalian. Kami selalu berusaha untuk memberikan kepuasan pelanggan.",
  },
  {
    question: "Apa kebijakan garansi produk?",
    answer:
      "Kami menawarkan garansi satu tahun untuk semua produk kami. Jika ada masalah dengan produk Anda dalam jangka waktu tersebut, kami akan menggantinya atau memperbaikinya tanpa biaya tambahan. Kepuasan pelanggan adalah prioritas kami.",
  },
      // More questions...
];


  </script>