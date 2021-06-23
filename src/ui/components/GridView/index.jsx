import React from 'react';

export default ({ children, cols }) => {
  const rows = children.length / cols;
  return (
    <>
      {
        [...Array(rows)].map((_, rowIndex) => (
          <div className="d-flex">
            {
              [...Array(cols)].map((__, colIndex) => (
                <div className="flex-fill">
                  {children[rowIndex * cols + colIndex]}
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  );
};
