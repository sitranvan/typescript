export interface TotalRender {
    path: (payload: string | undefined) => string
    route?: string
    url: string
    icon: React.ReactNode
    title: any
    label: string
}

export interface DetailAction {
    children: JSX.Element
}

export interface OptionFilter {
    title: string
    label: string
}

export interface UserConnect {
    username?: boolean
    icon: JSX.Element
    title: string
}
