import * as React from "react"
import { PageProps } from "gatsby"
import Page from "../../../components/page"


type DataProps = {
  page: {
    lang: string
    title: string
    slug: string
    excergpt: string
    body: string
    color: string
    custom: boolean
    cover: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
}

export default function JodieCorePage({ children, ...props }: PageProps<DataProps>) {
  return <Page {...props}>{children}</Page>
}
