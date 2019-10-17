import React from 'react'

export const ignoreList = [
  'alignItems', 'alignSelf', 'justifyItems', 'boxShadow', 'borderRadius', 
  'color', 'gradient', 'gradientDir', 'fill', 'fontFamily', 'fontSize', 'fontWeight',
  'm', 'my', 'mx', 'ml', 'mr', 'mt', 'mb','p', 'py', 'px', 'pl', 'pr', 'pt', 'pb', 
  'position', 'top', 'bottom', 'left', 'right', 
  'relative', 'fill', 'absolute', 'fullWidth', 'minHeight', 'flexDirection',
  'maxWidth', 'width', 'zIndex', 'height', 'maxHeight', 'overflow', 
  'isActive', 'colorHighlightSelected', 'colorHighlightHover', 'colorBackgroundHover', 'colorBackgroundSelected', 'colorBackground',
  'colorSelected', 'card',
  'flexDirection', 'register', 'textRight', 'borderBottom', 'borderTop', 'between', 'justifyEnd', 'alignCenter',  'colorHover', ''
]

/**
 * @function withoutProps
 * @description Remove props from child components.
 * @param {Array} omitProps 
 */
export const withoutProps = (omitProps) => {
  const omitSingle = (object = {}, key) => {
    if (key === null || key === undefined || !(key in object)) return object;
    const { [key]: deleted, ...otherKeys } = object;
    return otherKeys;
  };

  const omit = (object = {}, keys) => {
    if (!keys) return object;
    if (Array.isArray(keys)) {
      // calling omitMultiple here would result in a second array check
      return keys.reduce((result, key) => {
        if (key in result) {
          return omitSingle(result, key);
        }
        return result;
      }, object);
    }
    return omitSingle(object, keys);
  };
  // HoF
  return C => {
    return ({ children, ...props }) => {
      return React.createElement(C, omit(props, omitProps), children);
    };
    // return WithoutPropsComponent;
  };
};