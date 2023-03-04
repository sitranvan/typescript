export interface Routers {
    path: string
    component: () => JSX.Element
    layout?: () => JSX.Element | null
}
