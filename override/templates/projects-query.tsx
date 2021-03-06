import { graphql } from "gatsby"
import ProjectsComponent from "../components/projects"

export default ProjectsComponent

    //projects: allProject(sort: { fields: date, order: DESC }, limit: 1) {
export const query = graphql`
  query {
    projects: allProject(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        lang
        title: shortTitle
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90)
          }
        }
        __typename
      }
    }
  }
`
