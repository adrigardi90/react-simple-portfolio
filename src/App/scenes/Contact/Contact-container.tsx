import * as React from 'react';

import { PageHandler } from './../../../components/PageHandler/PageHandler'
import { ContactView } from './Contact-view'
import { Pages } from '../../../routes/routes.interface'

const ContactContainer = PageHandler(
    ContactView,
    (DataSource) => DataSource.getContent(Pages.Contact)
)

export default ContactContainer