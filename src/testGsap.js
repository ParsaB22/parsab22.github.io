import gsap from 'gsap';

let timeline = gsap.timeline();
timeline
.to(".green", {width: "50%",height:"100px", duration: 2,ease: "none", opacity: 1,})
// .to(".green", {height:"50%", duration:2 ,ease: "none", opacity: 1,})
.to(".green", {y:500, duration:4})



gsap.from(".purple", {rotation: -360, x: -100, duration: 2, repeat:0});
gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 2, repeat:0});



// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const loader = new GLTFLoader();


// const scene = new THREE.Scene();
// // scene.background().Color
// scene.background = new THREE.Color(0x333333);
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// // const dirLight = new THREE.DirectionalLight(0xffffff, 10);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// // renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
// // {color: Math.random() * 0xffffff}
// const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// // scene.add( dirLight );
// let model;
// loader.load( './models/Spider.glb', function ( gltf ) {
//     model = gltf.scene;
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

// camera.position.z = 50;

// function animate() {
//     requestAnimationFrame( animate );
//     if(model){
//         model.rotation.x = 0;
//         model.rotation.y = 1;
//         // model.rotation.z = 0.5;


//     }
// 	cube.rotation.x = 0.5;
// 	cube.rotation.y = 0.5;
// 	cube.rotation.z = 0.5;
// 	// cube.rotation.z += 0.05;

//     // cube.position.z -= 

// 	renderer.render( scene, camera );

// }
// animate();