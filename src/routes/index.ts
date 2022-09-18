import { Home } from './Home';
import { Projects } from './Projects';
import { Posts } from './Posts'

export { Posts as PostsRoute } from './Posts'
export { Home as HomeRoute} from './Home'
export { Projects as ProjectsRoute} from './Projects'

export const routes = [
    Home,
    Posts,
    Projects 
]