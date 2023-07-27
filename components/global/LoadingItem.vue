<template>
  <div class="absolute bottom-0 left-0 right-0 top-0 z-50 h-screen w-full bg-black bg-opacity-30">
    <div class="flex h-full items-center justify-center gap-10">
      <img src="/logo.png" alt="logo" class="spin w-[30px]" />
      <div class="text-primary-dark">
        <div class="flex">
          <p class="font-bold">LOADGING</p>
          <div class="flex">
            <span class="loading1 text-4xl-plus font-bold">.</span>
            <span class="loading2 text-4xl-plus font-bold">.</span>
            <span class="loading3 text-4xl-plus font-bold">.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.spin {
  animation: spin 1.5s linear infinite;
}
.loading1 {
  animation: loading1 2s linear infinite;
}
.loading2 {
  animation: loading1 2s linear infinite;
  animation-delay: 0.5s;
}
.loading3 {
  animation: loading1 2s linear infinite;
  animation-delay: 1s;
}
@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes loading1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loading2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loading3 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
