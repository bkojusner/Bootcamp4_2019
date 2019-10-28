import React from 'react';

function HomepageImage() {
  const url = 'https://niekaabdesal.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-09-at-5.10.07-PM.png';
  return (
    <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' />
  );
}

export default HomepageImage;