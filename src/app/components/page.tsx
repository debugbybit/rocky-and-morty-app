'use client';

import React from 'react';

export default function ComponentPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  return <main></main>;
}
