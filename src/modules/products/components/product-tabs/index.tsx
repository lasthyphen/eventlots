"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
    {
      label: "Size & Fit",
      component: <SizeGuide />,
    },
    {
      label: "Quality Assurance",
      component: <ShippingInfoTab />,
    },
    {
      label: "Product Care",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-normal">Material</span>
            <p className="text-small text-ui-fg-muted hover:text-ui-fg-subtle">{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-normal">Country of origin</span>
            <p className="text-small text-ui-fg-muted hover:text-ui-fg-subtle">{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-normal">Type</span>
            <p className="text-small text-ui-fg-muted hover:text-ui-fg-subtle">{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-normal">Weight</span>
            <p className="text-small text-ui-fg-muted hover:text-ui-fg-subtle">{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-normal">Dimensions</span>
            <p className="text-small text-ui-fg-muted hover:text-ui-fg-subtle">
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </div>
  )
}

const SizeGuide = () => {
  return(
<div className="premium-suiting--content">
      <img
        loading="lazy"
        src="https://tokens.dijets.io/measurement-skd_07.png"
        alt="" />
      </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-4">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
