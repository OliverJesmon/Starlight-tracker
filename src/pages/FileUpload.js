import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import * as THREE from 'three';
import '../components/style.css'

const FileUpload = () => {
  const [videoStream, setVideoStream] = useState(null);
  const cameraRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const openCamera = () => {
    const video = cameraRef.current;
    if (!video) return;

    video.style.display = 'block';

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        setVideoStream(stream);
      })
      .catch((error) => {
        console.error('Error accessing camera: ', error);
        alert('Could not access the camera. Please try again or check permissions.');
      });
  };

  const capturePhoto = () => {
    const video = cameraRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      const file = new File([blob], 'captured_photo.png', { type: 'image/png' });

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;

      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
      video.style.display = 'none';
    });
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000); // Set background to black

    // Create a star field
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000; // X position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z position
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.001; // Rotate stars for a twinkling effect
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="content">
      <h1>Constellation Identifier</h1>
      <form
        id="upload-form"
        action="https://80c0-34-106-54-224.ngrok-free.app/predict"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="file" ref={fileInputRef} accept="image/*" required />
        <h2>Or</h2>
        <button type="button" className='btn mx-1 btn-success' onClick={openCamera}>
          Open Camera
        </button>
        <button type="button" className='btn mx-1 btn-success' onClick={capturePhoto}>
          Capture Photo
        </button>

        <video id="camera" ref={cameraRef} width="300" height="300" autoPlay style={{ display: 'none' }} />
        <canvas id="canvas" ref={canvasRef} width="300" height="300" />

        <button type="submit" className='btn btn-success mx-1'>Upload Image</button>
      </form>
    </div>
  );
};

export default FileUpload;
