<template>
  <div class="grid grid-cols-2" style="gap: 36px">
    <div>
      <UpdatePersonalInfo />
      <UpdatePersonalBrief />
      <UpdateStyle />
    </div>
    <div>
      <UpdateStudioInfo />
      <UpdateTime />
    </div>
  </div>
</template>
<script setup>
import UpdatePersonalInfo from '~/components/artist/UpdatePersonalInfo.vue'
import UpdateStudioInfo from '~/components/artist/UpdateStudioInfo.vue'
import UpdateTime from '~/components/artist/UpdateTime.vue'
import UpdatePersonalBrief from '~/components/artist/UpdatePersonalBrief.vue'
import UpdateStyle from '~/components/artist/UpdateStyle.vue'
</script>
<style scoped></style>
