<template>
      <!-- Testimonials section -->
    <div id="testimonials" class="relative isolate mt-20 sm:mt-20 sm:pt-20">
        <svg class="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block" aria-hidden="true">
          <defs>
            <pattern id="55d3d46d-692e-45f2-becd-d8bdc9344f45" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="0" class="overflow-visible fill-gray-50">
            <path d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" />
        </svg>

          <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
            <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#f0e908] to-[#f29202]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
          </div>
          <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end" aria-hidden="true">
            <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#18a5f7] to-[#42f40c] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-xl sm:text-center">
              <h2 class="text-lg font-semibold leading-8 tracking-tight text-sky-600">Testimonials</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hear what our Unix users have to say</p>
            </div>

            <div class="mx-auto mt-16 grid max-w-2xl gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4  ">

                <div v-for="(item, index) in testimonials" :key="index" class="hover:-translate-y-2 duration-300 transition space-y-8 xl:row-span-2">
                  <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote class="text-gray-900">
                      <p>{{ item.text }}</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                      <img loading="lazy" class="h-10 w-10 rounded-full bg-gray-50" :src="item.image" :alt="item.author">
                      <div>
                        <div class="font-semibold">{{ item.author }}</div>
                        <div class="text-gray-600">@{{ item.username }}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>

            </div>

        </div>
      </div>
</template>

<script setup>
import Hero from './Hero.vue';

const testimonials = [
  {
    text: "Unix is a game-changer. The variety of products is astonishing, and I've saved a lot of money. Highly recommended!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Dewi Kartini",
    username: "Dewi",
  },
  {
    text: "Unix is a game-changer. The variety of products is astonishing, and I've saved a lot of money. Highly recommended!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Dewi Kartini",
    username: "Dewi",
  },
  {
    text: "Unix is a game-changer. The variety of products is astonishing, and I've saved a lot of money. Highly recommended!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Dewi Kartini",
    username: "Dewi",
  },
  {
    text: "Unix is a game-changer. The variety of products is astonishing, and I've saved a lot of money. Highly recommended!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Dewi Kartini",
    username: "Dewi",
  },
  // Add more testimonials as needed
];
</script>

