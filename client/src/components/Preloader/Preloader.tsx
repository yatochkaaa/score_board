import React from 'react';
import './Preloader.scss';
import preloader from '../../images/preloader.svg';

export const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <h2 className="preloader__title">No players available</h2>

      <object
        type="image/svg+xml"
        data={preloader}
      >
        svg-animation
      </object>
    </div>
  );
};
