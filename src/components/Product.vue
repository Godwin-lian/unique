
<template>
      <div id="product" class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
        <div class="text-4xl font-bold mb-4 flex justify-center">
            <h1>Produk BeliKado</h1>
        </div>
  
        <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          <div v-for="product in products" :key="product.id" class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div class="absolute top-2 right-2 bg-teal-400 text-white py-1 px-2 rounded-full">
          New
        </div>
            <div class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center sm:h-full sm:w-full" />
            </div>
            <div class="flex flex-1 flex-col space-y-2 p-4">
              <h3 class="text-sm font-medium text-gray-900">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="text-sm text-gray-500">{{ product.description }}</p>
              <div class="flex flex-1 flex-col justify-end">
                <p class="text-sm italic text-gray-500">{{ product.options }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup>
  const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    description: 'Dapatkan rangkaian lengkap Basic Tees kami. Miliki kaus segar setiap minggu, dan satu ekstra untuk hari cuci.',
    options: 'Merah, Coklat, Hijau Gelap, Putih, Hitam, Army',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt: 'Delapan kaus tersusun di atas meja dalam warna hitam, zaitun, abu-abu, biru, putih, merah, kuning mustard, dan hijau.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    description: 'Tampil keren dengan kaus klasik kami. Cocok untuk segala kesempatan dan padu padan yang pas dengan segalanya.',
    options: 'Merah, Coklat, Hijau Gelap, Putih, Hitam, Navy, Army',
    imageSrc: '../assets/img/kaus-hijau.png',
    imageAlt: 'Bagian depan kaos hitam polos.',
  },
  {
    id: 3,
    name: 'Mug and Bottle',
    description: 'Tetap terhidrasi dan kafeinasi dengan kombinasi Mug dan Botol kami. Desain ramping dalam warna hijau gelap menambah sentuhan keanggunan pada rutinitas harian Anda.',
    options: 'Hijau Gelap, Putih, Hitam, Cream',
    imageSrc: '../assets/img/mug-and-bottle.jpeg',
    imageAlt: 'Set mug dan botol warna hijau gelap.',
  },
  {
    id: 4,
    name: 'Topi, Ransel, Tote Bag',
    description: 'Adopsi gaya hidup CEO dengan set Topi, Ransel, dan Tote Bag kami. Semuanya dalam warna hitam klasik, sempurna untuk rutinitas harian Anda.',
    options: 'Hitam, Putih, Cream, Navy',
    imageSrc: '../assets/img/cap-backpack-totebag.jpeg',
    imageAlt: 'Set topi, ransel, dan tote bag warna hitam.',
  },
  {
    id: 5,
    name: 'Ransel Kecil',
    description: 'Tunjukkan gaya Anda dengan Ransel Kecil kami yang tersedia dalam warna Hijau Gelap, Putih, Hitam, Navy, dan Army. Kecil dan trendy, ini adalah aksesori yang wajib dimiliki.',
    options: 'Hijau Gelap, Putih, Hitam, Navy, Army',
    imageSrc: '../assets/img/ransel-kecil.jpeg',
    imageAlt: 'Ransel kecil dalam berbagai warna.',
  },
  {
    id: 6,
    name: 'Pulpen Custom',
    description: 'Buat pernyataan dengan Pulpen Custom kami yang elegan dalam warna hitam. Aksesori yang sempurna untuk ruang kerja Anda atau sebagai hadiah yang berpikiran.',
    options: 'Hitam, Putih',
    imageSrc: '../assets/img/pulpen.png',
    imageAlt: 'Pulpen custom dalam warna hitam.',
  },  
  {
    id: 7,
    name: 'Notebook Elegan',
    description: 'Catat ide-ide brilian Anda dalam Notebook Elegan kami. Desainnya yang anggun membuatnya sempurna untuk catatan sehari-hari atau hadiah spesial.',
    options: 'Berbagai pilihan desain',
    imageSrc: '../assets/img/note.png',
    imageAlt: 'Notebook elegan dengan berbagai desain.',
  },
  {
    id: 8,
    name: 'Payung',
    description: 'Lindungi diri Anda dari hujan dengan Payung Anti-Hujan kami. Desain yang kokoh dan tahan angin untuk kenyamanan maksimal.',
    options: 'Berbagai warna',
    imageSrc: '../assets/img/payung.png',
    imageAlt: 'Payung anti-hujan dengan berbagai warna.',
  },
  {
    id: 9,
    name: 'Bingkai Foto',
    description: 'Hiaslah kenangan Anda dengan Bingkai Foto kami. Desain elegan dan berkualitas tinggi untuk memamerkan momen-momen istimewa dalam gaya yang unik.',
    options: 'Berbagai ukuran dan warna',
    imageSrc: '../assets/img/bingkai-foto.png',
    imageAlt: 'Bingkai foto dengan berbagai ukuran dan warna.',
}

];

  </script>