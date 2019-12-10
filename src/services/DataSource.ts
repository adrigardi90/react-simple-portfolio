const sanityClient = require('@sanity/client')
import { Pages } from "../routes/routes.interface"

const client = sanityClient({
    projectId: `${process.env.PROJECT_ID}`,
    dataset: 'production',
})

export const DataSource = (() => {

    const getCommonQuery = (page: string) => (`*[_type == "${page.toLowerCase()}"][0]`)

    const getContent = (page: string) => {
        let query

        if (Pages.Home === page) {
            query = `${getCommonQuery(page)}{title, subtitle, team_title, team_subtitle}`
        }

        if (Pages.Projects === page) {
            query = `${getCommonQuery(page)}{
                title, 
                subtitle, 
                "projects": *[_type == "card"]{
                    title, 
                    subtitle, 
                    description, 
                    "image": image.asset->url, publication, web, source, technologies
                }}`
        }

        return client.fetch(query)
    }

    return {
        getContent
    }
})()

