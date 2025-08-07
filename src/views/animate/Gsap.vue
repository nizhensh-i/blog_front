<template>
  <div class="container">
    <div class="button-wrapper">
      <button id="chars" class="button" @click="chars">Characters</button>
      <button id="words" class="button" @click="words">Words</button>
      <button id="lines" class="button" @click="lines">Lines</button>
    </div>
    <div class="text">
      Break apart HTML text into characters, words, and/or lines for easy animation.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText);

const split = ref(null)
const animation = ref(null)

const setupSplit = () => {
  split.value && split.value.revert();
  animation.value && animation.value.revert();
  split.value = SplitText.create(".text", { type: "chars,words,lines" });
}

const chars = () => {
  animation.value && animation.value.revert();
  animation.value = gsap.from(split.value.chars, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04
  })
}

const words = () => {
  animation.value && animation.value.revert();
  animation.value = gsap.from(split.value.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7, 
    ease: "back",
    stagger: 0.15
  })
}

const lines = () => {
  animation.value && animation.value.revert();
  animation.value = gsap.from(split.value.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8, 
    ease: "power3",
    stagger: 0.25
  })
}

onMounted(() => {
  setupSplit();
  window.addEventListener("resize", setupSplit);
});
onBeforeUnmount(() => {
  split.value && split.value.revert();
  animation.value && animation.value.revert();
  window.removeEventListener("resize", setupSplit);
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 9px;
  background-color: black;
}

.text {
  color: #dfdcff;
  font-size: clamp(2rem, 12rem, 5vw);
  line-height: 1.2;
  box-sizing: border-box;
  padding: 5%;
  width: 100%;
  text-align: center;
  perspective: 500px;
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
