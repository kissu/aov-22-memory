<script setup>
import { computed, shallowRef, ref, watch, onMounted, nextTick } from 'vue'
import { useTimeout } from '@vueuse/core' // used for some advanced flipping timing, not mandatory

import JSConfetti from 'js-confetti' // when you will beat the game! 🏅

import { xmasIcons } from '@/icons' // all the icons are already set there and exported as an object
import QuestionCard from '@/components/QuestionCard.vue' // generic question card ❓
import XmasCard from '@/components/XmasCard.vue' // dynamic card with a random icon 🎄

const confetti = new JSConfetti()

const cards = ref([])

// - let's start by some `isGameWon` + `totalMoves`, can be hardcoded for now
const isGameWon = computed()
const totalMoves = ref()

//todo #1 let's display something on the page by "fixing" the markup with a viable `cards` state
// - get a working `cards` ref array, starting from the `xmasIcons` object
// - use your favorite array method to have an array with objects like that in it:
// { "id": "deer", "name": "deer", "component": QuestionCard, "paired": false }

//todo #2 - find a way to have a unique `name` key that you could pass to `:key` while `v-for`'ing the cards (hint: palindrome)
// - remember: if we want to have 8 pairs of cards, we will need to have 16 cards in total 😉

//todo #3 - finally, please remember to shuffle them to make it more exciting 🎲
cards.value = [
  /* cool shuffled and properly populated array */
]

//todo #4 - create the toggle function for revealCard: swapping components + adding 1 to totalMoves
function revealCard(card) {}

//todo #5 - let's create a few things to prepare for the actual flipping mechanics
const cardsFlipped = computed(() => {
  // get the amount of XmasCard components in `cards` and which are not `paired`
})
const amountOfCardsFlipped = computed(() => {
  // get the amount of the cards that are flipped
})
function flipCardsBack() {
  // flip all the `cards` back to QuestionCard
}

// todo #6 - hardest part of the game! 🤯
// the main goal is to see what to do once cards are flipped
watch(cardsFlipped, async (newFlippedCards, oldFlippedCards) => {
  // 👇 edge case when 3 cards are flipped without being turned back
  // mostly to fix this behavior: https://user-images.githubusercontent.com/5133074/208330861-7966fb99-f2b0-426f-b305-7051a0d99298.mp4
  if (amountOfCardsFlipped.value > 2) {
    // most difficult, keep it for the end or check hint.js for the whole `watch` block function
    // some code...
    await nextTick() // you will probably need that one at some point, free hint 🎁
    // some code...
  } else if (amountOfCardsFlipped.value === 2) {
    // 👇 matching cards?
    if ('something' === 'something else') {
      // the cards are matched here! ✅
    } else {
      // startTheTimerFromSomewhere? // what to do when cards are not matched? ❌
    }
  }
})

//todo #7 - only isTimeoutReady? needs to be replaced properly here
watch(
  // isTimeoutReady?,
  newState => {
    if (newState) flipCardsBack()
  },
  { immediate: false }
)

// this part is done for you ✅
watch(isGameWon, newState => {
  if (newState) {
    confetti.addConfetti()
  }
})

//todo #8 - one line of pauseTheSetimeout? needs to be replaced here, so that the game doesn't flip cards initially
onMounted(() => {
  // pauseTheSetimeout?
})

function startGame() {
  //todo - create a basic function to reset the whole game (reset counter + shuffle cards)
}
startGame() // time to start the game 🎅
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-full pb-40">
    <fluent-emoji-ribbon class="relative text-5xl sm:text-8xl sm:top-10 top-7" />
    <section
      class="grid max-w-xl p-4 cards bg-slate-600 md:p-8 aspect-square bg-gradient-to-tr from-teal-700 to-emerald-700 rounded-xl"
    >
      <!-- actual card grid -->
      <div v-for="card in cards" :key="card.name">
        <transition name="test" mode="out-in">
          <component class="card" :icon-name="card.id" :is="card.component" />
          <!-- move up ☝️ @click="revealCard(card)" -->
        </transition>
      </div>
    </section>

    <!-- score and reset button -->
    <div class="flex items-center justify-between w-full max-w-xl mt-8">
      <p class="text-2xl">
        {{ isGameWon ? `You won in ${totalMoves} moves! 🎊` : `Total moves ${totalMoves}` }}
      </p>
      <button
        class="flex items-center px-4 py-2 text-2xl transition-colors duration-300 border text-stone-800 bg-emerald-200 hover:bg-emerald-300 rounded-xl"
      >
        <!-- move up 👆 @click="startGame" -->
        Start again
        <fluent-emoji-bell class="inline ml-2 text-xl" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.cards {
  --gap: 1rem;
  /* update 👆 this variable to create more/less distance with elements */
  grid-template-columns: repeat(auto-fit, minmax(auto, calc(25% - var(--gap))));
  /* grid is a perfect fit for our grid, so that it requires the least amount of breakpoints */
  gap: var(--gap);
}

.card {
  @apply w-full h-auto rounded-md border-2;
}

/* below are the flipping animations to make it more immersive ✨ */
.test-enter-active,
.test-leave-active {
  transition: all 0.15s ease-in-out;
  opacity: 1;
}

.test-enter-from,
.test-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}
</style>
