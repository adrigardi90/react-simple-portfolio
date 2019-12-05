import * as React from 'react';

import { Pages } from '../../../routes/routes.interface'
import { PageHandler } from './../../../components/PageHandler/PageHandler'
import { ProjectsView } from './Projects-view'

const ProjectsContainer = PageHandler(
    ProjectsView,
    (DataSource) => DataSource.getContent(Pages.Projects)
)

export default ProjectsContainer