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


type CustomFormInputPropsCommon = {
  placeholder?: string,
  rules?: Rule[],
  name: string,
  label?: string,
  dependencies?: string[],
  type?: InputType,
  colProps?: ColProps
}

export type CustomFormInputProps = ({
  options?: MultipleOptionsInput[],
  inputNumberProps?: InputNumberProps,
}) & CustomFormInputPropsCommon

export type CustomInputProps = {
  type: InputType;
  placeholder?: string;
  options?: MultipleOptionsInput[];
  label: string;
  name: string;
  inputNumberProps?: InputNumberProps;
  className?: string;
} & ControllerRenderProps<Record<string, any>, string>

export type CustomFormProps = {
  inputs: (CustomFormInputProps | CustomFormInputProps[])[],
  initialValues: Record<string, any>,
  onSubmit?: (arg: Record<keyof CustomFormProps['initialValues'], any>) => void,
  name: string,
  validations?: Record<keyof CustomFormProps['initialValues'], Zod>
}
