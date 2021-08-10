// @ts-nocheck
import classNames from 'classnames';
import * as React from 'react';

const TextField = ({
    required = false,
    title,
    name,
    description,
    descriptionHtml,
    onChange,
    value,
    errors,
    size,
    maxLength,
    autoFocus = false,
    autoComplete = true,
    disabled = false,
    type = 'text',
    min,
    step,
    warnings,
}) => {
    const requiredElement = required ? (
        <span className="aui-icon icon-required">(required)</span>
    ) : null;
    const descriptionDiv = descriptionHtml ? (
        <div className="description" dangerouslySetInnerHTML={descriptionHtml} />
    ) : (
        <div className="description">{description}</div>
    );

    const renderError = Array.isArray(errors) && errors.length > 0;
    // Only render warnings if there are no errors.
    const renderWarning = Array.isArray(warnings) && warnings.length > 0 && !renderError;

    return (
        <div className="field-group aui-react-text-field">
            <label htmlFor={name}>
                {title}
                {requiredElement}
            </label>
            <input
                className={classNames(
                    'text',
                    size && `${size}-field`,
                    renderError && 'error-outline',
                    renderWarning && 'warning-outline'
                )}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                autoFocus={autoFocus}
                autoComplete={autoComplete ? 'on' : 'off'}
                disabled={disabled}
                min={min}
                step={step}
            />
            {renderError ? <Errors errors={errors} /> : null}
            {renderWarning ? <Warnings warnings={warnings} /> : null}
            {descriptionDiv}
        </div>
    );
};

export { TextField };
