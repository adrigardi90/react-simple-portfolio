import * as React from 'react';

import { HomeView } from './Home-view'
import { PageHandler } from './../../../components/PageHandler/PageHandler'
import { Pages } from '../../../routes/routes.interface'


const HomeContainer = PageHandler(
    HomeView,
    (DataSource) => DataSource.getContent(Pages.Home)
)

export default HomeContainer