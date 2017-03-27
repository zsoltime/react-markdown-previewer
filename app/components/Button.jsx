/* eslint-disable max-len */
import React, { PropTypes } from 'react';

const Button = ({ type, onClickEvent }) => {
  const button = (btn) => {
    switch (btn) {
      case 'h1':
      case 'h2':
      case 'h3':
        return btn;

      case 'b':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.395 181.395" height="16" width="16">
            <path d="m20.618,181.395v-181.395h62.293c22.506,0 40.074,4.174 52.699,12.521 12.623,8.346 18.936,20.785 18.936,37.313 0,8.639-2.033,16.318-6.104,23.049-4.07,6.729-10.34,11.795-18.813,15.199 10.631,2.408 18.479,7.246 23.547,14.514 5.064,7.268 7.6,15.637 7.6,25.104 0,17.691-5.939,31.064-17.814,40.115-11.879,9.055-28.904,13.58-51.082,13.58h-71.262zm42.235-105.772h20.93c9.551-0.166 16.695-2.014 21.43-5.545 4.734-3.529 7.102-8.699 7.102-15.51 0-7.725-2.41-13.35-7.225-16.881-4.82-3.529-12.211-5.295-22.178-5.295h-20.059v43.231zm0,27.908v45.473h29.027c8.971,0 15.699-1.766 20.184-5.297 4.484-3.529 6.729-8.947 6.729-16.256 0-7.891-1.932-13.85-5.795-17.879-3.861-4.027-10.111-6.041-18.748-6.041h-31.397z" />
          </svg>
        );

      case 'i':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.5 181.5" height="16" width="16">
            <path d="M93.368,181.5H51.856L88.132,0h41.512L93.368,181.5z" />
          </svg>
        );

      case 'li':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231" height="16" width="16">
            <rect width="181" x="50" y="164.5" height="33" />
            <rect width="181" x="50" y="99.5" height="33" />
            <rect width="181" x="50" y="32.5" height="33" />
            <rect width="33" y="165.5" height="33" />
            <rect width="33" y="99.5" height="33" />
            <rect width="33" y="32.5" height="33" />
          </svg>
        );

      case 'code':
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.664 502.664" height="16" width="16">
            <path d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431 C153.821,303.954,153.821,358.226,153.821,358.226z" />
            <path d="M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z" />
            <path d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183 L348.843,358.226z" />
          </svg>
        );

      default:
        return '';
    }
  };

  return (
    <button
      className="toolbar__item"
      onClick={() => onClickEvent(type)}
    >
      {button(type)}
    </button>
  );
};

Button.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
