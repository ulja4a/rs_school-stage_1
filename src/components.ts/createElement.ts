export function createElement(
  tagName = 'div',
  className = '',
  content = '',
  additionalClass = '',
  attributes: { [key: string]: string } = {}
) {
  const parentNode = document.body;
  const el = document.createElement(tagName);
  el.className = `${className} ${additionalClass}`.trim();
  el.innerHTML = content;
  Object.keys(attributes).forEach((key) => {
    el.setAttribute(key, attributes[key]);
  });
  parentNode.appendChild(el);
  return el;
}
