import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeletone = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="109" y="79" rx="0" ry="0" width="0" height="24" />
    <rect x="109" y="103" rx="0" ry="0" width="0" height="82" />
    <circle cx="135" cy="138" r="125" />
    <rect x="0" y="291" rx="16" ry="16" width="280" height="32" />
    <rect x="0" y="337" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="454" rx="16" ry="16" width="96" height="30" />
    <rect x="123" y="443" rx="16" ry="16" width="152" height="45" />
  </ContentLoader>
);

export default Skeletone;
