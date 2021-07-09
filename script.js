
//Create a scene
const scene = new THREE.Scene();

// create red cube:
//the geometry of the object
const geometry = new THREE.BoxGeometry(1, 1, 1,);
//the color / aterial of the object
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
//the full object
const mesh = new THREE.Mesh(geometry, material);
//add the object to the scene
scene.add(mesh);

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
// .1 arg = the field of view (vertical vision angle) also called 'fov'
// .2 arg = the aspect ratio, the width of the render devided by the height of the render
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height);
camera.position.z = 3;
setInterval(() => {}, 1000)
camera.position.x = 1;
scene.add(camera);

//Canvas
const canvas = document.querySelector('.webgl');

// create rendere
const renderer = new THREE.WebGLRenderer({
canvas:canvas
});

//change renderer size
renderer.setSize(sizes.width, sizes.height);

// rendering sence and camera
renderer.render(scene,camera);



