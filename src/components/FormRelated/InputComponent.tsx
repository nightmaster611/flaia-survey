import React from "react";
import { InputType, MultipleOptionsInput } from "./types";
import {
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  InputNumberProps,
  Radio,
  Row,
  Select,
} from "antd";

const InputComponent: React.FC<{
  type: InputType;
  placeholder?: string;
  options?: MultipleOptionsInput[];
  label: string;
  name: string;
  inputNumberProps?: InputNumberProps;
}> = ({ type, placeholder, options, label, name, inputNumberProps }) => {
  // customize behaviour for checkbox group
  const form = Form.useFormInstance();
  const fieldValue = form.getFieldValue(name);

  const triggerValidate = () => {
    console.log("test");
    form.validateFields([name]);
  };

  const setFormValue = (v: any) => {
    triggerValidate();
  };
  const triggerValidateProp = {
    onBlur: triggerValidate,
    onChange: setFormValue,
  };

  // ----------------------------------------
  switch (type) {
    case "text":
      return <Input placeholder={placeholder} {...triggerValidateProp} />;
    case "password":
      return (
        <Input.Password placeholder={placeholder} {...triggerValidateProp} />
      );
    case "number":
      return (
        <InputNumber
          {...(inputNumberProps || {})}
          controls={false}
          {...triggerValidateProp}
        />
      );
    case "radio":
      if (!options?.length) return null;

      return (
        <Radio.Group className="w-full" {...triggerValidateProp}>
          <Row>
            {options.map(({ value, label: optionLabel, colProps }) => (
              <Col {...colProps} key={value}>
                <Radio value={value}>{optionLabel}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      );
    case "checkbox":
      if (!options?.length)
        return <Checkbox {...triggerValidateProp}>{label}</Checkbox>;
      return (
        <Checkbox.Group onChange={setFormValue}>
          <Row>
            {options.map(({ value, label: optionLabel, colProps }) => (
              <Col {...colProps} key={value}>
                <Checkbox value={value}>{optionLabel}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      );
    case "select":
      if (!options?.length) return null;
      return (
        <Select
          {...triggerValidateProp}
          onChange={setFormValue}
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
      return <Input {...triggerValidateProp} placeholder={placeholder} />;
  }
};

export default React.memo(InputComponent);
