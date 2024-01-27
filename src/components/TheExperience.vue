<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, Stars } from '@tresjs/cientos';
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three';
import Dog from "./Dog.vue"

const gl = {
  clearColor: "#181C3E",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColosSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
</script>
<template>
  <div class="tres-container">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[0, 0, 10]" :look-at="[0, 1, 0]" />
      <!-- <TresMesh>
        <TresSphereGeometry :args="[1, 32, 32]" />
        <TresMeshNormalMaterial />
      </TresMesh> -->
      <Stars />
      <OrbitControls />
      <Suspense>
        <Dog />
      </Suspense>
      <TresAmbientLight :color="0xffffff" :intensity="1" />
      <TresDirectionalLight :color="0xffffff" :intensity="1"
        :position="[0, 0, 5]" />
    </TresCanvas>
  </div>
</template>

<style>
.tres-container {
  width: 100%;
  height: 400px;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>