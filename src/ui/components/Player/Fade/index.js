import { useState } from 'react';

import View from './View';

function Fade({ children, active = false }) {
  const [isVisible, setVisible] = useState(true);
  return View(
    () => setVisible(true),
    () => setVisible(!active),
    isVisible,
    children,
  );
}

export default Fade;
