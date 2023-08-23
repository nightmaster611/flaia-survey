import { ReactNode } from "react"

export type GeneralFunction = (...args: any) => any
export type ReactPropsWithChildren<T = any> = React.FC<T & {children: ReactNode}>