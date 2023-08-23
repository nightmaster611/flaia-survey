'use client';
import React from 'react';
import {
  CustomFormInputProps,
  CustomFormProps,
  InputType
} from './types';
import { Form } from 'antd';
import { Rule } from 'antd/es/form';
import CustomInput from './CustomInput';
import Button, { isString } from 'antd/es/button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { z } from 'zod';

const inputTypesWithCheckedAsValue: InputType[] = ['checkbox'];

const CustomFormInput: React.FC<CustomFormInputProps> = React.memo(
  ({
    label = '',
    name,
    placeholder,
    type = 'text',
    options,
    inputNumberProps,
    value,
    onBlur,
    onChange
  }) => {
    return (
      <CustomInput
        label={label}
        type={type}
        options={options}
        placeholder={placeholder}
        name={name}
        inputNumberProps={inputNumberProps}
      />
    );
  }
);

const CustomForm: React.FC<CustomFormProps> = ({
  inputs,
  initialValues,
  onSubmit,
  validations
}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<Record<keyof typeof initialValues, any>>({
    defaultValues: initialValues,
    resolver: validations
      ? zodResolver(z.object(validations))
      : undefined
  });
  const onSubmitBase: SubmitHandler<
    Record<keyof typeof initialValues, any>
  > = data => {
    console.log('DATA', data);
    onSubmit?.(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitBase)}>
      <div className="mb-4">
        {inputs.map(inputProps => (
          <div className="not-last:mb-4" key={inputProps.name}>
            <div className="mb-1">{inputProps.label}</div>
            <Controller
              name={inputProps.name}
              control={control}
              render={({ field }) => (
                <CustomInput
                  type={inputProps.type || 'text'}
                  label={inputProps.label || ''}
                  className="text-base"
                  {...inputProps}
                  {...field}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name={inputProps.name}
              render={({ message }) => <p>{message}</p>}
            />
          </div>
        ))}
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default React.memo(CustomForm);
