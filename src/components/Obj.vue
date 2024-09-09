<script>
import * as Three from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

export default {
  name: 'ThreeModelViewer',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      //publicPath: process.env.BASE_URL,
      loader: null,
      loader2: null,
    };
  },
  methods: {
    init() {
      const container = document.getElementById('container');

      // Set up camera
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10);
      this.camera.position.z = 1;

      // Create scene
      this.scene = new Three.Scene();

      // Load .obj file
      this.loader = new OBJLoader();
      this.loader.load(`../assets/obj/minicity.obj`, (loadedObject) => {
        this.scene.add(loadedObject);
        console.log(loadedObject);
      });

      // Load .mtl file
      this.loader2 = new MTLLoader();
      this.loader2.load(`../assets/obj/minicity.mtl`, (loadedObject) => {
        this.scene.add(loadedObject);
        console.log(loadedObject);
      });

      // Set up renderer
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  height: 400px;
  max-width: 100%;
  max-height: 90vh;
  background-color: red;
}
</style>
