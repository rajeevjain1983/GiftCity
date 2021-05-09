// 9fbef606107a605d69c0edbcd8029e5d 
import { css } from 'styled-components';

/**
 * @function calculateColumnWidth
 * @param {number} availableMaxWidth - maximum available width excluding the offset.
 * @param {number} columnWidth - width of 1 column at the breakpoint
 * @returns {string} singleColWidth - column width of desired column no in %
 */

const calculateColumnWidth = (availableMaxWidth, columnWidth) => {
  return `${(columnWidth / availableMaxWidth) * 100}%`;
};

/** @function getGutter
 * @param {string} breakpoint -  breakpoint at which width needs to be calculated
 * @param {object} gridDimensions - The grid dimension object from the theme, contains all the hardcoded values of the grid.
 * @returns value of gutter for 1 column in % as per the viewport
 */
const getGutter = (breakpoint, gridDimensions) => {
  const availableWidth = gridDimensions.availableMaxWidthObj[breakpoint];
  const columnGutter = gridDimensions.columnGutterObj[breakpoint];
  return `${(columnGutter / availableWidth) * 100}`;
};

/**
 * @function getColumnWidth
 * @param {number} colCount - number of columns that it would occupy.
 * @param {string} breakpoint - viewport at which width needs to be calculated
 * @param {object} gridDimensions - The grid dimension object from the theme,
 * contains all the hardcoded values of the grid.
 * @returns {number} columnWidth - column width of desired column no in %
 */

const getColumnWidth = (colCount, breakpoint, gridDimensions) => {
  const columnWidth = calculateColumnWidth(
    gridDimensions.availableMaxWidthObj[breakpoint],
    gridDimensions.columnWidthObj[breakpoint]
  );
  const columnGutter = getGutter(breakpoint, gridDimensions);
  return parseFloat(columnWidth) * colCount + parseFloat(columnGutter) * (colCount - 1);
};

/**
 * @function calculateOffset
 * @param {number} colCount - number of columns that it would occupy.
 * @param {string} breakpoint - viewport at which width needs to be calculated
 * @param {object} gridDimensions - The grid dimension object from the theme,
 * contains all the hardcoded values of the grid.
 * @returns {string} offsetOfColumn - total width of the columns that needs to be left blank on left/right side.
 */
const calculateOffset = (colCount, breakpoint, gridDimensions) => {
  return (
    getColumnWidth(colCount, breakpoint, gridDimensions) + getGutter(breakpoint, gridDimensions) * 1
  );
};

/**
 * @function calculateNthChild
 * @param {String} viewport - small|medium|large
 * @param {Number} col - number of columns passed in props
 * @param {object} gridDimensions - The grid dimension object from the theme,
 * contains all the hardcoded values of the grid.
 */
const calculateNthChild = (viewport, col, gridDimensions) => {
  return gridDimensions.numberOfColumnsObj[viewport] % col === 0
    ? gridDimensions.numberOfColumnsObj[viewport] / col
    : '';
};

/**
 * Calculates effective col length with all offsets
 * @param {Object} {colSize} Object, {offsetLeft} Object, {offsetRight} Object
 * @param {*} viewport small|medium|large
 */
const colLength = ({ colSize, offsetLeft, offsetRight }, viewport) => {
  let length = colSize[viewport];
  if (offsetLeft && offsetLeft[viewport]) {
    length += offsetLeft[viewport];
  }
  if (offsetRight && offsetRight[viewport]) {
    length += offsetRight[viewport];
  }
  return length;
};

/**
 * Injects Nth Rule for Columns considering that all Cols in a Row are of same size
 * Specify ignoreNthRule=true to ignore nth rule for use cases where there are different column size for Columns within a Row
 */
const injectNthRule = (props, key) => {
  if (props.customNthBreak) {
    return `
      @media ${props.theme.mediaQuery[`${key}Only`]} {
        &:nth-child(${props.customNthBreak}n) {
          margin-right: 0;
        }
      }
    `;
  }
  return !props.ignoreNthRule
    ? `
    @media ${props.theme.mediaQuery[`${key}Only`]} {
      ${calculateNthChild(key, colLength(props, key), props.theme.gridDimensions) &&
        `&:nth-child(${calculateNthChild(
          key,
          colLength(props, key),
          props.theme.gridDimensions
        )}n) {
          margin-right: 0;
        }`}
    }
  `
    : ``;
};

const StyledCol = css`
  ${props =>
    props.theme &&
    props.theme.gridDimensions &&
    props.theme.gridDimensions.gridBreakPointsKeys.map(
      // eslint-disable-next-line complexity
      key => `
      ${injectNthRule(props, key)}
      ${key !== 'small' ? `}` : ''}
      ${key !== 'small' ? `@media ${props.theme.mediaQuery[key]} {` : ''}
          ${!props.isNotInlineBlock ? 'display: inline-block' : ''};
          margin-left: ${
            props.offsetLeft && props.offsetLeft[key]
              ? calculateOffset(props.offsetLeft[key], key, props.theme.gridDimensions)
              : '0'
          }%;
          margin-right: ${
            props.offsetRight && props.offsetRight[key]
              ? calculateOffset(props.offsetRight[key], key, props.theme.gridDimensions)
              : '0'
          }%;
          ${
            !(props.ignoreGutter && props.ignoreGutter[key])
              ? `margin-right: ${getGutter(key, props.theme.gridDimensions)}%`
              : ''
          };
          width: ${getColumnWidth(props.colSize[key], key, props.theme.gridDimensions)}%;
        ${key !== 'small' ? `}` : ''}
        ${key !== 'small' ? `@media ${props.theme.mediaQuery[`${key}Only`]} {` : ''}
          ${props.hideCol && props.hideCol[key] ? 'display: none' : ''};
        ${key !== 'small' ? `}` : ''}
      `
    )}
  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;

export default StyledCol;
