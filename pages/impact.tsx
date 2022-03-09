import Link from "next/link"
import React from "react"
import Layout from "../components/layout"

export default function Impact() {
  return (
    <Layout>
      <h1>Impact</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
