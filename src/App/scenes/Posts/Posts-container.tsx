import * as React from 'react';

import { Pages } from '../../../routes/routes.interface'
import { PageHandler } from './../../../components'
import { PostsView } from './Posts-view';

const PostsContainer = PageHandler(
    PostsView,
    (DataSource) => DataSource.getContent(Pages.Posts)
)

export default PostsContainer