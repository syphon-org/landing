import React from 'react';
import Link from 'next/link';

// Components
import assets from '../../global/assets';

export default () => {
  return (
    <div className="app sans-serif">
      <div className="splash flex flex-grow flex-col justify-center items-center">
        <div className="flex-col justify-center items-center text-center">
          <div className="flex-row justify-center items-center text-center">
            <img className="m-auto" style={{ height: 140 }} src={assets.appIconWhite} />
          </div>
          <div className="pt-8">
            <span className="text-4xl">almost here</span>
          </div>
        </div>
      </div>
    </div>
  );
};
