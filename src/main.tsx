import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import myProfileWithBlackbackground3 from './myProfileWithBlackbackground3.jpg';
import './index.css';

// Function to create a rounded favicon
const createRoundedFavicon = (imageSrc: string) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  
  const img = new Image();
  img.src = imageSrc;
  img.onload = () => {
    const size = 64; // Set favicon size
    canvas.width = size;
    canvas.height = size;

    if (ctx) {
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, 0, 0, size, size);

      // Set the generated favicon
      const faviconLink = document.querySelector("link[rel~='icon']") || document.createElement("link");
      faviconLink.setAttribute("rel", "icon");
      faviconLink.setAttribute("type", "image/png");
      faviconLink.setAttribute("href", canvas.toDataURL("image/png"));

      document.head.appendChild(faviconLink);
    }
  };
};

// Call the function to create a rounded favicon
createRoundedFavicon(myProfileWithBlackbackground3);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
