import { GeneralFunction } from "@/types/common"
import { ColProps, InputNumberProps } from "antd"
import { Rule } from "antd/es/form"
import { ControllerRenderProps } from "react-hook-form"
import { ZodAny, ZodObject } from "zod"

export type InputTypeWithoutOptions = 'text' | 'email' | 'password' | 'number' | 'date'
export type InputTypeWithOptions = 'radio' | 'select' | 'checkbox'
export type InputType = InputTypeWithOptions | InputTypeWithoutOptions

export type MultipleOptionsInput = {
  value: any, label: string,
  colProps?: ColProps
}


type CustomFormInputPropsCommon<K extends string> = {
  placeholder?: string,
  rules?: Rule[],
  name: K,
  label?: string,
  dependencies?: string[],
  type?: InputType,
  colProps?: ColProps
}

export type CustomFormInputProps<K extends string = any> = ({
  options?: MultipleOptionsInput[],
  inputNumberProps?: InputNumberProps,
}) & CustomFormInputPropsCommon<K>

export type CustomInputProps = {
  type: InputType;
  placeholder?: string;
  options?: MultipleOptionsInput[];
  label: string;
  name: string;
  inputNumberProps?: InputNumberProps;
  className?: string;
} & ControllerRenderProps<Record<string, any>, string>

export type CustomFormProps<T extends Record<string, any> = Record<string, any>> = {
  inputs: (CustomFormInputProps<keyof T> | CustomFormInputProps<keyof T>[])[],
  initialValues: T,
  onSubmit?: (arg: { [key in keyof T]: any }) => void,
  name: string,
  validations?: Partial<{ [key in keyof T]: Zod }>
}
