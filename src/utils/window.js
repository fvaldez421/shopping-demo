import { createPortal } from 'react-dom';
import React from 'react';

/**
 * Appends a node into the document body and returns it
 * @param  {String} [type]      optional DOM element type, defaults to 'div' 
 * @param  {String} [id]        optional element id
 * @param  {String} [className] optional element className
 * @return {HTMLElement}
 */
export const appendToBody = (type='div', id='', className='') => {
  const childNode = document.createElement(type);
  childNode.setAttribute('id', id);
  className.split(' ').forEach(cl => childNode.classList.add(cl));
  document.body.appendChild(childNode);
  return childNode;
}

/**
 * Appends an element to the document body and renders the provided `component`
 * @param {Object} param0 Required
 * @param {String} [param0.type] optional DOM element type, defaults to 'div' 
 * @param {String} [param0.id] optional element id
 * @param {String} [param0.className] optional element className
 * @param {Function} param0.component Required React Component to be rendered  
 */
export const Portal = ({ type='div', id='none', className='none', children }) => {
  if (!children) throw new Error(`"component" attribute is required`);
  const parentNode = appendToBody(type, id, className);
  
  return createPortal(<div>{children}</div>, parentNode);
}

