import { GeneralFunction } from "@/types/common"
import { ColProps, InputNumberProps } from "antd"
import { Rule } from "antd/es/form"

export type InputTypeWithoutOptions = 'text' | 'email' | 'password' | 'number' | 'date'
export type InputTypeWithOptions = 'radio' | 'select' | 'checkbox'
export type InputType = InputTypeWithOptions | InputTypeWithoutOptions

export type MultipleOptionsInput = {
  value: any, label: string,
  colProps?: ColProps
}


type CompleteFormInputPropsCommon = {
  placeholder?: string,
  rules?: Rule[],
  name: string,
  label?: string,
  required?: boolean | string,
  requiredErrorMessage?: string,
  inputNumberProps?: InputNumberProps,
  dependencies?: string[],
}

export type CompleteFormInputProps = ({
  type?: InputType,
  options?: MultipleOptionsInput[],
}) & CompleteFormInputPropsCommon

export type CompleteFormProps = {
  inputs: CompleteFormInputProps[],
  initialValues: Record<string, any>,
  onSubmit?: (arg: Record<keyof CompleteFormProps['initialValues'], any>) => void,
  name: string
}