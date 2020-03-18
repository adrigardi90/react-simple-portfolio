import { AppRoute, Pages } from "../routes.interface"

export const Posts: AppRoute = {
    path: '/posts',
    name: Pages.Posts,
    component: Pages.Posts
}