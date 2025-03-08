const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add Soft Glowing Particles
const particles = [];
const particleGeometry = new THREE.SphereGeometry(0.1, 16, 16);
const particleMaterial = new THREE.MeshStandardMaterial({ color: 0xff6600, emissive: 0xff6600 });

for (let i = 0; i < 200; i++) {
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
    scene.add(particle);
    particles.push(particle);
}

// Animate Particles
function animateParticles() {
    particles.forEach(particle => {
        particle.position.y -= 0.02;
        if (particle.position.y < -10) particle.position.y = 10;
    });
}

function animate() {
    requestAnimationFrame(animate);
    animateParticles();
    renderer.render(scene, camera);
}

animate();
