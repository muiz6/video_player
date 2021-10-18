import React from 'react';

export default (onMouseEnter, onMouseLeave, isVisible, children) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="w-100"
    style={{ height: '100%' }}
  >
    <div className="w-100" style={{ height: '100%', visibility: isVisible ? 'visible' : 'hidden' }}>
      {children}
    </div>
  </div>
);
