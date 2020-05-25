import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About components"/>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
