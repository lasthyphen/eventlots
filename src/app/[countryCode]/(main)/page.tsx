import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Faha Couture",
  description:
    "Browse & Shop Faha's dazziling collection of handmade clothes",
  openGraph: {
      images: 'https://tokens.dijets.io/og-faha.com',
    },
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="pb-8 mt-[13.5rem] lg:mt-6">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
        <section className="w-full py-8">
  <div className="grid gap-8 lg:grid-cols-2">
    <a className="group relative" href="/store">
      <div className="relative overflow-hidden rounded-lg">
        <img
          alt="Cover image"
          loading="lazy"
          width={1200}
          height={675}
          decoding="async"
          data-nimg={1}
          className="w-full scale-105 object-cover transition-all group-hover:scale-100 group-hover:opacity-75"
          style={{ color: "transparent" }}
          srcSet="https://faha-mimo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faccessories.30b1bf28.jpg&w=1200&q=75 1x, https://faha-mimo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faccessories.30b1bf28.jpg&w=3840&q=75 2x"
          src="https://faha-mimo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faccessories.30b1bf28.jpg&w=3840&q=75"
        />
      </div>
      <div className="justify-end gap-2 px-4 py-2 text-neutral-600">
        <h3 className="text-lg font-bold tracking-tight">Apparel</h3>
        <p>Shop now</p>
      </div>
    </a>
    <a className="group relative" href="/store">
      <div className="relative overflow-hidden rounded-lg">
        <img
          alt="Cover image"
          loading="lazy"
          width={1200}
          height={675}
          decoding="async"
          data-nimg={1}
          className="w-full scale-105 object-cover transition-all group-hover:scale-100 group-hover:opacity-75"
          style={{ color: "transparent" }}
          srcSet="https://faha-mimo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapparel.e8af679e.jpg&w=1200&q=75 1x, https://faha-mimo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapparel.e8af679e.jpg&w=3840&q=75 2x"
          src="https://faha-mimo.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapparel.e8af679e.jpg&w=3840&q=75"
        />
      </div>
      <div className="justify-end gap-2 px-4 py-2 text-neutral-600">
        <h3 className="text-lg font-bold tracking-tight">Apparel</h3>
        <p>Shop now</p>
      </div>
    </a>
  </div>
</section>
      </div>
    </>
  )
}
