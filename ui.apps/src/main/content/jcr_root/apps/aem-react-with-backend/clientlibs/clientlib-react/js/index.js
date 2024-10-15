import React from 'react';
import { createRoot } from 'react-dom/client';
import TestComponent from './TestComponent';

const renderReactComponent = (element) => {
  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <TestComponent 
        title={element.dataset.title} 
        text={element.dataset.text} 
      />
    </React.StrictMode>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.getElementsByClassName('react-component');
  Array.from(elements).forEach(renderReactComponent);
});