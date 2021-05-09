// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import PropTypes from 'prop-types';
import BodyCopy from '../../BodyCopy';
import withStyles from '../../../hoc/withStyles';
import StyledTextArea from '../TextArea.style';

export const TextArea = ({
  className,
  id,
  ariaLabel,
  placeholder,
  maxLength,
  inputRef,
  meta,
  dataLocator,
  enableSuccessCheck,
  isRequired,
  errorDataLocator,
  showExplicitError,
  input,
  ...others
}) => {
  const elemValue = input.value;
  const { touched, error } = meta;
  const errorMessagea11yLbl = `textarea__error__${input.name}`;
  const isErrored = (touched && error) || showExplicitError;

  return (
    <label htmlFor={id} className={`${className} input-fields-wrapper`}>
      <textarea
        {...others}
        {...input}
        id={id}
        aria-label={ariaLabel}
        className="TextArea__input"
        name={input.name}
        maxLength={maxLength}
        value={elemValue}
        ref={inputRef}
        placeholder=""
        data-locator={dataLocator}
        aria-required={isRequired}
        aria-describedby={errorMessagea11yLbl}
      />
      <BodyCopy className="TextArea__label" fontFamily="secondary" fontSize="fs12">
        {placeholder}
      </BodyCopy>
      <div className="TextArea__error">
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

TextArea.propTypes = {
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
  showExplicitError: PropTypes.string,
};

TextArea.defaultProps = {
  id: '',
  ariaLabel: '',
  placeholder: '',
  errorDataLocator: '',
  dataLocator: '',
  meta: {},
  isRequired: false,
  enableSuccessCheck: false,
  showExplicitError: '',
};

export default withStyles(TextArea, StyledTextArea);
