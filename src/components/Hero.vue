<template>
 <!-- Hero section -->
  <div 
  v-motion
  :initial="{ opacity: 0}"
  :enter="{opacity: 1}"
  >
        <svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        
        <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
           
          </div>
          <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end" aria-hidden="true">
            <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#18a5f7] to-[#42f40c] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
          </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 lg:pb-32 sm:pt-60 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Beli souvenir buat 
                  <br>
                  <span v-for="(charData, index) in displayText" :key="index" :style="{ color: charData.color }">
                    {{ charData.char }}
                  </span>?
                  <br>
                  hanya di <span class="text-blue-800">Beli</span><span class="text-blue-500">Kado</span> 
                </h3>
                <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Jangan lewatkan penawaran istimewa dari kami untuk souvenir berkualitas yang kami produksi sendiri dengan harga terjangkau. Mulai dari <b class="text-green-500">50 ribu</b> rupiah, anda sudah bisa mendapatkan produk istimewa dari vendor souvenir tangan pertama dan berbagi kebahagiaan kepada orang yang anda cintai ataupun rekan bisnis.</p>
              </div>
              <div class="xs:pt-10">

              </div>
              <Carousels/>

            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Carousels from "./Carousels.vue";

const props = defineProps({
  title: String,
  speed: {
    type: Number,
    default: 500,
  },
  deleteSpeed: {
    type: Number,
    default: 166,
  },
  words: {
    type: Array,
    default: () => ["Pacar", "Teman", "Acara Kantor", "Acara Nikahan", "Keluarga", "Sahabat"],
  },
});

const displayText = ref([]);
const currentWord = ref('');
let wordIdx = ref(0);

const TYPE_SPEED = props.speed;
const DELETE_SPEED = props.deleteSpeed;
const timeoutSpeed = ref(TYPE_SPEED * 0.8);

const start = () => {
  if (props.words.length > 0) {
    currentWord.value = {
      word: props.words[wordIdx.value],
      color: getRandomColor(),
    };
    wordIdx.value++;
    type();
  }
};

const type = () => {
  if (currentWord.value.word.length > 0) {
    displayText.value.push({
      char: currentWord.value.word[0],
      color: currentWord.value.color,
    });
    currentWord.value.word = currentWord.value.word.slice(1);
  } else if (currentWord.value.word.length === 0 && displayText.value.length > 0) {
    timeoutSpeed.value = DELETE_SPEED;
    displayText.value.pop();
  } else if (currentWord.value.word.length === 0 && displayText.value.length === 0) {
    if (wordIdx.value < props.words.length) {
      currentWord.value = {
        word: props.words[wordIdx.value],
        color: getRandomColor(),
      };
      wordIdx.value++;
      timeoutSpeed.value = TYPE_SPEED;
      displayText.value.push({
        char: currentWord.value.word[0],
        color: currentWord.value.color,
      });
      currentWord.value.word = currentWord.value.word.slice(1);
    } else {
      wordIdx.value = 0;
      currentWord.value = {
        word: props.words[wordIdx.value],
        color: getRandomColor(),
      };
      displayText.value.push({
        char: currentWord.value.word[0],
        color: currentWord.value.color,
      });
      currentWord.value.word = currentWord.value.word.slice(1);
    }
  }
  setTimeout(type, timeoutSpeed.value);
};

const getRandomColor = () => {
  // Return a random color value (you can customize this logic)
  const colors = ["#990000", "#007700", "#000099", "#770077", "#999900", "#007777"];
  return colors[Math.floor(Math.random() * colors.length)];
};

onMounted(() => {
  start();
});
</script>
