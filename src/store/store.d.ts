export type ActionPayload<T = unknown> = { type: string, payload: T }
export type ReducerFunction<T = unknown, P = ActionPayload> = (T, P) => T
export type ReducerDefinitions = Record<string, ReducerFunction>