import * as THREE from 'three';
import { TextureLoader } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 1, 0, 0 );
controls.update();


//le sphere
const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const textureL = new THREE.TextureLoader();
const texture = textureL.load('img360.jpg');
const material = new THREE.MeshBasicMaterial( {
    map: texture,
    side: THREE.DoubleSide
 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize( window.innerWidth, window.innerHeight ); 
document.body.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}

animate();