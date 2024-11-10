'use client'
import React from 'react';
import Typed from 'typed.js';

export default function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Web Developer</i>', '<i>Graphic Designer</i>','<i>Web Designer</i>','<i>Video Editor</i>'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}