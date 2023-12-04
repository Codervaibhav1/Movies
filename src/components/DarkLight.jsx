import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.classList = mode === 'dark' ? 'bg-light' : 'bg-black';
    document.body.style.color = mode === 'dark' ?'#000000' : '#ffffff';
  }, [mode]);

  return { mode, toggleMode };
};

export default useDarkMode;
