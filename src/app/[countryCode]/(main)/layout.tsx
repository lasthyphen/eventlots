import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 sm:px-6 lg:px-8">
      {props.children}
      </main>
      <Footer />
    </>
  )
}
