import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="px-3 pt-24 md:px-6 md:pt-28">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        {/* Background portrait */}
        <div className="relative min-h-[640px] w-full md:min-h-[820px]">
          <Image
            src="/images/hero-portrait.png"
            alt="Портрет девушки со светящейся кожей в тёплом золотистом свете"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-foreground/10" />

          {/* Heading */}
          <div className="absolute left-5 top-8 max-w-2xl md:left-12 md:top-12">
            <h1 className="text-balance text-5xl font-semibold leading-[0.92] tracking-tight text-card md:text-7xl lg:text-8xl">
              Unique beauty
              <br />
              <span className="font-serif italic font-normal">experience</span>
            </h1>
          </div>

          {/* Intro copy top-right */}
          <p className="absolute right-5 top-8 max-w-xs text-pretty text-right text-sm leading-relaxed text-card md:right-12 md:top-14 md:text-base">
            Наша линейка парфюма создана для тех, кто ценит индивидуальность.
            Каждый аромат — это гармония изысканных нот, которые подчеркнут ваш
            стиль и настроение.
          </p>

          {/* CTA button */}
          <a
            href="#catalog"
            className="absolute left-5 top-1/2 flex items-center gap-2 rounded-full bg-card/80 px-7 py-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-card md:left-12"
          >
            Перейти в каталог
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Bottom-left natural ingredients copy */}
          <p className="absolute bottom-8 left-5 max-w-sm text-pretty text-sm leading-relaxed text-card md:bottom-12 md:left-12 md:text-base">
            Мы используем только натуральные ингредиенты и передовые технологии,
            чтобы создать парфюм, который остаётся с вами на весь день.
          </p>

          {/* Featured product card */}
          <div className="absolute bottom-5 right-5 flex flex-col items-stretch gap-3 md:bottom-8 md:right-8 md:flex-row md:items-end">
            <div className="flex max-w-md items-center gap-4 rounded-3xl border border-card/40 bg-card/25 p-5 backdrop-blur-xl">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-card md:text-3xl">
                  Desert Breeze
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-card/90">
                  это выбор тех, кто стремится к совершенству.
                </p>
                <p className="mt-4 text-2xl font-semibold text-card">
                  ₽ 24 490,00
                </p>
              </div>

              <div className="relative hidden h-40 w-28 shrink-0 overflow-hidden rounded-2xl bg-card sm:block">
                <Image
                  src="/images/perfume-desert-breeze.png"
                  alt="Флакон парфюма Desert Breeze"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
                <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>

            <button
              type="button"
              className="group relative hidden h-40 w-32 shrink-0 overflow-hidden rounded-2xl md:block"
              aria-label="Смотреть видео о продукте"
            >
              <Image
                src="/images/skincare-apply.png"
                alt="Нанесение сыворотки на кожу"
                fill
                sizes="128px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-card/80 backdrop-blur-md">
                  <Play className="h-4 w-4 fill-foreground text-foreground" aria-hidden="true" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
