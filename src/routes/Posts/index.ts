import { AppRoute, Pages } from "../routes.interface";

export const Posts: AppRoute = {
  path: "/articles",
  name: "Articles",
  component: Pages.Posts,
};
