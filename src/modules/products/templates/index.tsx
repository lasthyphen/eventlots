import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import { RulerIcon } from "lucide-react";
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="flex flex-col small:flex-row small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="flex flex-col small:sticky small:py-0 small:max-w-[300px] w-full py-8 gap-y-6 px-4">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:py-0 small:max-w-[300px] w-full py-8 gap-y-12 px-4">
        <ProductInfo product={product} />
        <div
  data-orientation="vertical"
  className="border-grey-20 group border-t last:mb-0 border-b py-3"
>
  <h3 data-orientation="vertical" data-state="closed" className="px-1">
    <div className="flex flex-col">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="font-normal font-sans txt-medium text-ui-fg-subtle text-sm">
            Product Information
          </p>
        </div>
        <button
          type="button"
          aria-expanded="false"
          data-state="closed"
          data-orientation="vertical"
          id=""
          data-radix-collection-item=""
        >
          <div className="text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]">
            <div className="h-5 w-5">
              <RulerIcon />
            </div>
          </div>
        </button>
      </div>
    </div>
  </h3>
</div>
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
