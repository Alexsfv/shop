export type OrderParameter = {
    name: string
    value: string
}

export type AllActions<T> = T extends {[key: string]: infer U} ? U : never