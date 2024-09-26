import Image from "next/image";

const Hero = () => {
  return (
    <section className="rounded-xl bg-none lg:bg-[url('https://tokens.dijets.io/hero-top-left.svg')] bg-[length:220px_220px] md:bg-[length:330px_330px] bg-no-repeat bg-[#fffaf1] py-8 sm:py-12">
    <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-0 lg:gap-8 px-8 sm:px-16 md:grid-cols-2">
      <div className="max-w-md space-y-4">
        <h2 className="guli mt-8 lg:mt-0 text-center lg:text-left lg:text-[1.4rem] text-lg">
        Discover Faha&apos;s Curated Collection
        </h2>
        <p className="text-pretty text-neutral-600 !mb-6 pb-4">Explore Faha&apos;s carefully selected designs</p>
        <a
          className="button button--primary hero__content-cta hidden lg:block"
          href="/store"
        >
          New Arrivals
        </a>
      </div>
      <div className="p-8">
      <div className="hero__content hero__content--over-image double-border p-10">
        <div className="hero__content-eyebrow">Fall 2024</div>
        <h2 className="hero__content-heading text-lg lg:text-xl">Autumn Opulence</h2>
        <div className="hero__content-copy text-sm lg:text-base">
          The Seasons Most Enchanting Prints
        </div>
        <a
          href="/store"
          className="button button--primary hero__content-cta"
        >
          Shop Now
        </a>
        <img
  src="https://caracaranyc.com/cdn/shop/files/6.24-accent-floral-scarf-2.png"
  alt=""
  srcSet="https://caracaranyc.com/cdn/shop/files/6.24-accent-floral-scarf-2.png"
  width={400}
  height={545}
  className="hero__accent-image hero__accent-image--1"
/>
<img
  src="https://caracaranyc.com/cdn/shop/files/6.24-accent-floral-scarf.png"
  alt=""
  srcSet="https://caracaranyc.com/cdn/shop/files/6.24-accent-floral-scarf.png"
  width={400}
  height={545}
  className="hero__accent-image hero__accent-image--2"
/>

      </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
