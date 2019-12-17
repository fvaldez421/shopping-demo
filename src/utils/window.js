import { createPortal } from 'react-dom';

/**
 * Appends a node into the document body and returns it
 * @param  {String} [type]      optional DOM element type, defaults to 'div' 
 * @param  {String} [id]        optional element id
 * @param  {String} [className] optional element className
 * @return {HTMLElement}
 */
export const appendToBody = (type='div', id='', className='') => {
  const existingNode = document.getElementById(id);
  if (existingNode) return existingNode;
  const childNode = document.createElement(type);
  childNode.setAttribute('id', id);
  className.split(' ').forEach(cl => childNode.classList.add(cl));
  document.body.appendChild(childNode);
  return childNode;
}

/**
 * Appends an element to the document body and renders the provided `component`
 * @param {{ type: [String], id: [String], className: [String], children: Function }} props
 * @param {String} [props.type] DOM element type, defaults to 'div' 
 * @param {String} [props.id] element id
 * @param {String} [props.className] element className
 * @param {Function} props.component Required React Component to be rendered  
 */
export const Portal = ({ type='div', id='none', className='none', children }) => {
  const parentNode = appendToBody(type, id, className);
  if (parentNode) return createPortal(children, parentNode);
  else throw new Error('Failed to mount parent node.')
}

