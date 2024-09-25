import { ProductOption } from "@medusajs/medusa"
import { clx } from "@medusajs/ui"
import React from "react"

import { onlyUnique } from "@lib/util/only-unique"
import ProductModal from "@modules/products/templates/product-modal"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (

    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-between gap-2">
      <p className="text-base">Select {title}:</p>
      <p
  className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle flex flex-row-reverse gap-x-2 items-center"
>
  <ProductModal />
  <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_803_229)" fill="#231F20">
        <path d="M23.565 6.747L17.258.441a1.486 1.486 0 00-2.102 0L.44 15.156a1.488 1.488 0 000 2.102l6.306 6.306c.582.581 1.522.581 2.103 0L23.564 8.85c.581-.581.581-1.522 0-2.103zm-.526 1.577L8.324 23.039c-.29.29-.76.29-1.052 0L.966 16.732a.744.744 0 010-1.051l.788-.788 1.051 1.05a.37.37 0 10.526-.524L2.28 14.367l1.05-1.05 2.103 2.102a.371.371 0 10.525-.526l-2.101-2.102 1.05-1.051 1.051 1.051a.373.373 0 00.526-.526l-1.051-1.05 1.051-1.052 1.051 1.051a.372.372 0 10.526-.526L7.01 9.638l1.052-1.051 2.102 2.101a.37.37 0 10.525-.525L8.586 8.061l1.05-1.052 1.053 1.052a.371.371 0 10.525-.525l-1.051-1.052 1.05-1.05 1.052 1.05a.371.371 0 10.526-.525l-1.052-1.051 1.052-1.05 2.101 2.1a.371.371 0 10.526-.525l-2.102-2.102 1.051-1.05 1.051 1.05a.37.37 0 10.526-.525l-1.052-1.051.789-.79a.745.745 0 011.051 0l6.307 6.307c.29.29.29.762 0 1.052z" />
        <path d="M19.128 6.378a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 2.25a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </g>
      <defs>
        <clipPath id="clip0_803_229">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
</p>
      </div>
      <div
        className="flex flex-wrap justify-between gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clx(
                "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-8 rounded px-[0.5rem] py-[0.2rem] flex-1 ",
                {
                  "border-ui-border-interactive": v === current,
                  "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                    v !== current,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
