// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import PropTypes from 'prop-types';
import BodyCopy from '../../BodyCopy';
import withStyles from '../../../hoc/withStyles';
import StyledTextBox from '../TextBox.style';

/**
 *
 * @param {Boolean} showSuccessCheck Forcefully show the success mark and success border. Override redux form params.
 * @param {Object} meta redux-form meta object to analyse the success state. Based on this class will be returned.
 * @return {string} Returns a class name if the form success validation criteria matches else blank string.
 */
const getValidationSuccessClass = (enableSuccessCheck, showSuccessCheck, meta) => {
  const { invalid, pristine, asyncValidating, active } = meta;
  return enableSuccessCheck &&
    (showSuccessCheck || (!active && !pristine && !invalid && !asyncValidating))
    ? 'textbox_validation_success'
    : '';
};

const TextBox = ({
  className,
  id,
  ariaLabel,
  type,
  placeholder,
  maxLength,
  input,
  inputRef,
  meta,
  dataLocator,
  showSuccessCheck,
  enableSuccessCheck,
  isRequired,
  errorDataLocator,
  submitError,
  showExplicitError,
  roundTextBox,
  ...others
}) => {
  const elemValue = input.value;
  const { touched, error = submitError } = meta;
  const errorMessagea11yLbl = `textbox__error__${input.name}`;
  const isErrored = (touched && error) || showExplicitError;

  return (
    <label
      htmlFor={id}
      className={`${className} input-fields-wrapper ${getValidationSuccessClass(
        enableSuccessCheck,
        showSuccessCheck,
        meta
      )}`}
    >
      <input
        {...others}
        {...input}
        id={id}
        aria-label={ariaLabel || placeholder}
        className={roundTextBox ? 'TextBox_view' : 'TextBox__input'}
        name={input.name}
        type={type}
        maxLength={maxLength}
        value={elemValue}
        ref={inputRef}
        placeholder=""
        data-locator={dataLocator}
        aria-required={isRequired}
        aria-describedby={errorMessagea11yLbl}
      />
      <BodyCopy
        className={roundTextBox ? 'TextBox__view' : 'TextBox__label'}
        fontFamily="secondary"
        fontSize="fs12"
      >
        {placeholder}
      </BodyCopy>
      <div className="TextBox__error">
        <div className={isErrored ? 'warning-icon' : ''} aria-disabled="true" />
        <BodyCopy
          color="error"
          component="div"
          fontSize="fs12"
          fontFamily="secondary"
          fontWeight="extrabold"
          role="alert"
          aria-live="assertive"
          data-locator={errorDataLocator}
          id={errorMessagea11yLbl}
        >
          {isErrored ? error || showExplicitError : ''}
        </BodyCopy>
      </div>
      {enableSuccessCheck && <div className="success__checkmark" />}
    </label>
  );
};

TextBox.defaultProps = {
  id: '',
  ariaLabel: '',
  type: 'text',
  placeholder: '',
  errorDataLocator: '',
  onChangeHandler: () => {},
  dataLocator: '',
  meta: {},
  showSuccessCheck: false,
  enableSuccessCheck: true,
  isRequired: false,
  submitError: '',
  showExplicitError: '',
  roundTextBox: false,
};

TextBox.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  inputRef: PropTypes.node.isRequired,
  meta: PropTypes.shape({}),
  dataLocator: PropTypes.string,
  enableSuccessCheck: PropTypes.bool,
  isRequired: PropTypes.bool,
  errorDataLocator: PropTypes.string,
  input: PropTypes.shape({}).isRequired,
  type: PropTypes.string,
  showSuccessCheck: PropTypes.bool,
  submitError: PropTypes.string,
  showExplicitError: PropTypes.string,
  onChangeHandler: PropTypes.func,
  roundTextBox: PropTypes.bool,
};
export default withStyles(TextBox, StyledTextBox);
export { TextBox as TextBoxVanilla };
