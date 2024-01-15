import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


//defining a component
const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following a Tutorial</p>
        </Layout>
    )
}

// what export const head do?
// it is used to define the title of the page
export const Head = () => <title> Home Page </title>

//what export default do?
//it is used to export the component
export default IndexPage