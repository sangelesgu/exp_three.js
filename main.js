
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


// Variables globales
    
let container; 
let sceneWidth, sceneHeight;
let scene;
let renderer; 
let camera; 
let controls; 

init (); 

function init() {

    createScene();
    update();

}


function createScene(){

    sceneWidth = window.innerWidth;
    sceneWidth = window.innerHeight;

    // Escena
    scene = THREE.Scene();
    scene.background = new THREE.Color( 0x0D0112 )

    // Render

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setPixelRatio(window.devicePixelRatio); 
    renderer.setSize(sceneWidth, sceneHeight);

    // Canvas
    container = document.getElementById('container')
    container.appendChild(renderer.domElement);

    // Camara

    camera = new THREE.PerspectiveCamera (60, sceneWidth / sceneHeight, 1, 1000);
    camera.position.set(0, 50, 500);

    // Luces

    let light = new THREE.DirectionalLight(0x3A1EC9);
    light.position.set(0, 0, 0); 

    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Creando cubo

    let cubeGeo = new THREE.BoxGeometry(10, 10, 10);
    let cubeMaterial = new THREE.MeshLambertMaterial({color : 0xee1122});
    let mesh = new THREE.Mesh(cubeGeo, cubeMaterial);
    scene.add(mesh);

}

function update(){

}

function render(){

    

}