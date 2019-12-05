export interface AppRoute {
    path: string
    name: string
    component: string
}

export enum Pages {
    Home = 'Home',
    Projects = 'Projects',
    Contact = 'Contact'
}