"use client";
import React from "react";
import { CompleteFormInputProps, CompleteFormProps, InputType } from "./types";
import { Form } from "antd";
import { Rule } from "antd/es/form";
import InputComponent from "./InputComponent";
import Button, { isString } from "antd/es/button";

const inputTypesWithCheckedAsValue: InputType[] = ["checkbox"];

const CompleteFormInput: React.FC<CompleteFormInputProps> = React.memo(
  ({
    label = "",
    name,
    placeholder,
    required,
    requiredErrorMessage,
    type = "text",
    rules = [],
    options,
    inputNumberProps,
  }) => {
    const requiredRule: Rule[] = required
      ? [
          {
            required: true,
            message:
              requiredErrorMessage ||
              (isString(required) ? required : "This field is required"),
          },
        ]
      : [];
    const emailRule: Rule[] =
      type === "email"
        ? [{ type: "email", message: "Must be of email format" }]
        : [];
    return (
      <Form.Item
        // validateTrigger={["onBlur", "onChange"]}
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 24 }}
        label={label}
        name={name}
        rules={[...requiredRule, ...emailRule, ...rules]}
        valuePropName={
          inputTypesWithCheckedAsValue.includes(type) ? "checked" : undefined
        }
      >
        <InputComponent
          label={label}
          type={type}
          options={options}
          placeholder={placeholder}
          name={name}
          inputNumberProps={inputNumberProps}
        />
      </Form.Item>
    );
  },
);

const CompleteForm: React.FC<CompleteFormProps> = ({
  inputs,
  initialValues,
  onSubmit,
  name = "form",
}) => {
  const [form] = Form.useForm();
  return (
    <Form
      requiredMark={false}
      scrollToFirstError={true}
      form={form}
      name={name}
      initialValues={initialValues}
      onFinish={onSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {inputs.map((inputProps) => (
        <CompleteFormInput key={inputProps.name} {...inputProps} />
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default React.memo(CompleteForm);
