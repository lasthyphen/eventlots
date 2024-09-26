import { Metadata } from "next"
import "styles/globals.css"
import "styles/hero.css"
import "styles/footer.min.css"
import "styles/ejq0qsd.css"
import "styles/fgk7hnb.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  openGraph: {
    images: 'https://tokens.dijets.io/og-faha.com',
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
      <div className="flex min-h-full flex-col p-2" vaul-drawer-wrapper="">
						{props.children}
      </div>
      </body>
    </html>
  )
}
