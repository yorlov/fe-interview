import * as React from "react";
import {FC, ReactNode} from "react";

const {TextField: AUITextField} = require('@github-mirrors/bitbucket/internal/form');

type TextFieldProps = {
    name: string
    title: string
    required: boolean
    description: ReactNode
    size: 'short' | 'medium' | 'medium-long' | 'long' | 'full-width'
    autoFocus: boolean
    disabled: boolean
    onChange: (e: any) => void
    errors: string[]
    autoComplete: boolean
};

const TextField: FC<TextFieldProps> = ({required, description, name, title, size, autoFocus, disabled, onChange, errors, autoComplete}) => (
    <AUITextField required={required}
                  description={description}
                  name={name}
                  title={title}
                  size={size}
                  autoFocus={autoFocus}
                  disabled={disabled}
                  onChange={onChange}
                  errors={errors}
                  autoComplete={autoComplete}
    />
);

export {TextField};