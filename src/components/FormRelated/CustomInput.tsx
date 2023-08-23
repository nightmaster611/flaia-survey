import React from 'react';
import {
  CustomInputProps,
  InputType,
  MultipleOptionsInput
} from './types';
import {
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  InputNumberProps,
  Radio,
  Row,
  Select
} from 'antd';

function isOnChangeArgumentEventObject(
  e: any
): e is React.ChangeEvent {
  return e.preventDefault && e.stopPropagation;
}
const CustomInput = React.forwardRef<HTMLElement, CustomInputProps>(
  (
    {
      type,
      placeholder,
      options,
      label,
      name,
      onBlur,
      onChange,
      value: inputValue,
      inputNumberProps,
      className
    },
    ref
  ) => {
    // customize behaviour for checkbox group

    const onChangeBase = (e: any) => {
      let value: any;
      if (isOnChangeArgumentEventObject(e))
        value = (e.target as HTMLInputElement).value;
      else value = e;
      onChange(value);
    };

    // ----------------------------------------
    switch (type) {
      case 'text':
        return (
          <Input
            value={inputValue}
            name={name}
            onChange={onChangeBase}
            onBlur={onBlur}
            placeholder={placeholder}
            className={className}
          />
        );
      case 'password':
        return (
          <Input.Password
            value={inputValue}
            name={name}
            onChange={onChangeBase}
            onBlur={onBlur}
            placeholder={placeholder}
            className={className}
          />
        );
      case 'number':
        return (
          <InputNumber
            value={inputValue}
            name={name}
            onChange={onChangeBase}
            onBlur={onBlur}
            placeholder={placeholder}
            controls={false}
            {...inputNumberProps}
            className={className}
          />
        );
      case 'radio':
        if (!options?.length) return null;
        return (
          <Radio.Group
            value={inputValue}
            name={name}
            onChange={onChangeBase}
            className={`${className || ''} w-full`}
          >
            <Row>
              {options.map(
                ({ value, label: optionLabel, colProps }) => (
                  <Col {...colProps} key={value}>
                    <Radio value={value}>{optionLabel}</Radio>
                  </Col>
                )
              )}
            </Row>
          </Radio.Group>
        );
      case 'checkbox':
        if (!options?.length)
          return (
            <Checkbox
              name={name}
              value={inputValue}
              onChange={onChangeBase}
              className={`${className || ''} w-full`}
            >
              {label}
            </Checkbox>
          );
        return (
          <Checkbox.Group
            value={inputValue}
            name={name}
            onChange={onChangeBase}
            className={`${className || ''} w-full`}
          >
            <Row onBlur={onBlur}>
              {options.map(
                ({ value, label: optionLabel, colProps }) => (
                  <Col {...colProps} key={value}>
                    <Checkbox value={value}>{optionLabel}</Checkbox>
                  </Col>
                )
              )}
            </Row>
          </Checkbox.Group>
        );
      case 'select':
        if (!options?.length) return null;
        return (
          <Select
            className={`${className || ''} w-full`}
            value={inputValue}
            onChange={onChangeBase}
            onBlur={onBlur}
            placeholder={placeholder}
          >
            {options.map(({ value, label: optionLabel }) => (
              <Select.Option key={value} value={value}>
                {optionLabel}
              </Select.Option>
            ))}
          </Select>
        );
      default:
        return (
          <Input
            value={inputValue}
            name={name}
            onChange={onChangeBase}
            onBlur={onBlur}
            placeholder={placeholder}
            className={className}
          />
        );
    }
  }
);

export default React.memo(CustomInput);
