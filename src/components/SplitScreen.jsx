import React from 'react';
import { Link } from 'react-router-dom';
import './SplitScreen.css';

const SplitScreen = () => (
  <div className="split-screen">
    <div className="left">
      <h1>🍥 Anime World</h1>
      <img src="https://wallpapers.com/images/hd/sukuna-red-aura-profile-picture-nc4ts22f1xnbo1hg.jpg" alt="anime" className="image" />
      <Link to="/anime" className="button">Enter →</Link>
    </div>
    <div className="right">
      <h1>🚗 Car Universe</h1>
      <img src="https://www.drivencarguide.co.nz/media/wgklq1q2/lamborghini-revuelto-opera-unica-china-1-2048x1366.webp" alt="cars" className="image" />
      <Link to="/cars" className="button">Enter →</Link>
    </div>
  </div>
);

export default SplitScreen;
