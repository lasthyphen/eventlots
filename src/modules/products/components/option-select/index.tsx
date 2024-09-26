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
  <p className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle">Select Your Size:</p>
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
