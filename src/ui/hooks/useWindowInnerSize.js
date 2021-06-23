import { useState, useEffect } from 'react';

const Size = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default () => {
  const [size, setSize] = useState(Size());
  useEffect(() => {
    window.addEventListener('resize', () => setSize(Size()));
  }, []);
  return size;
};
