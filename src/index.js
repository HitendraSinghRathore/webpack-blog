import './style.scss';
import myImage from './pexels-dtanpt-1329711.jpg';
console.log('Hello Webpack with CSS!');


const img = document.createElement('img');
img.src = myImage;
document.body.appendChild(img);


document.getElementById('loadFeature').addEventListener('click', async () => {
    const { default: feature } = await import('./feature.js');
    feature();
  });

// cross env variable access
  console.log('API URL:', process.env.API_URL);