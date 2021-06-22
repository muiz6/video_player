import React from 'react';

export default ({ vidSrc }) => (
  <video controls src={vidSrc} width="100%" height="560vw">
    <track
      default
      kind="captions"
      srcLang="en"
    />
    Sorry, your browser doesn&apost support embedded videos.
  </video>
);
