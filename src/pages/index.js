import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About components" />
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  )
}
