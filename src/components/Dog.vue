<script setup lang="ts">
import { useSeek } from '@tresjs/core';
import { useGLTF } from '@tresjs/cientos';
import { Box3, ShaderMaterial } from 'three';
import vertexShader from "../shaders/vertex.glsl"
import fragmentShader from '../shaders/fragment.glsl'

const { nodes } = await useGLTF('/models/dog.glb', { draco: true })
const model = nodes.Sketchfab_model

const { seekByName } = useSeek()

const outside = seekByName(model, "Object_2");

const bbox = new Box3().setFromObject(model);

outside.material = new ShaderMaterial({
  uniforms: {
    bboxMin: { value: bbox.min },
    bboxMax: { value: bbox.max },
  },
  vertexShader,
  fragmentShader,
})
console.log(outside)
</script>
<template>
  <primitive :object="model" />
</template>