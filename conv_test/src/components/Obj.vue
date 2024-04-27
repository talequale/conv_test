<script setup>
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	'assets/obj/minicity.obj',
	// called when resource is loaded
	function ( object ) {

		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
</script>

<template>
  <div class="obj">
    
  </div>
</template>

<style scoped>

</style>
