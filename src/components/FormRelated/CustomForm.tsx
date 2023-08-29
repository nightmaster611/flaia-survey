'use client';
import React from 'react';
import { CustomFormInputProps, CustomFormProps } from './form';
import CustomInput from './CustomInput';
import {
  Controller,
  SubmitHandler,
  UseFormReturn,
  useForm
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { z } from 'zod';
import Button from '../Button';
import './styles.scss';
import { isArray } from 'lodash';
import { Col, Row } from 'antd';

const isInputOptionArray = (
  inputProps: CustomFormInputProps | CustomFormInputProps[]
): inputProps is CustomFormInputProps[] => isArray(inputProps);

const labelClassnames = 'text-base font-[500] mb-1';

const SameRowInputs: React.FC<{
  inputs: CustomFormInputProps[];
  form: Partial<UseFormReturn>;
}> = React.memo(({ inputs, form }) => {
  const { control, formState } = form;
  return (
    <Row>
      {inputs.map(inputProps => (
        <Col
          {...inputProps.colProps}
          className="custom-input-antd not-last:pr-2 not-first:pl-2"
          key={inputProps.name}
        >
          <div className={`${labelClassnames}`}>
            {inputProps.label}
          </div>
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
            errors={formState?.errors}
            name={inputProps.name}
            render={({ message }) => (
              <p className="text-red-600">{message}</p>
            )}
          />
        </Col>
      ))}
    </Row>
  );
});

function CustomForm<
  T extends Record<string, any> = Record<string, any>
>({
  inputs = [],
  initialValues,
  onSubmit,
  validations
}: CustomFormProps<T>): JSX.Element {
  const { register, handleSubmit, watch, control, formState } =
    useForm<Record<string, any>>({
      defaultValues: initialValues,
      resolver: validations
        ? zodResolver(z.object(validations as Record<string, any>))
        : undefined,
      mode: 'all'
    });
  const { errors } = formState;
  const onSubmitBase: SubmitHandler<
    Record<keyof typeof initialValues, any>
  > = data => {
    onSubmit?.(data);
  };
  return (
    <form
      onSubmit={handleSubmit(
        onSubmitBase as SubmitHandler<Record<string, any>>
      )}
    >
      <div className="mb-5">
        {inputs.map(inputProps => (
          // If inputProps is an array => this usually means multiple inputs on a same row
          <React.Fragment
            key={
              (inputProps as CustomFormInputProps).name ||
              (inputProps as CustomFormInputProps[])[0].name
            }
          >
            {isInputOptionArray(inputProps) ? (
              <div className="not-last:mb-5">
                <SameRowInputs
                  form={{ control, formState }}
                  inputs={inputProps}
                />
              </div>
            ) : (
              // If inputProps is not array => this usually means one input per row
              <div className="not-last:mb-5 custom-input-antd">
                <div className={`${labelClassnames}`}>
                  {inputProps.label}
                </div>
                <Controller
                  name={inputProps.name as string}
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
                  name={inputProps.name as string}
                  render={({ message }) => (
                    <p className="text-red-600">{message}</p>
                  )}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default React.memo(CustomForm) as typeof CustomForm;
