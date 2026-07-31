import Image from "next/image"
import { Leaf, Sparkles, Clock } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Натуральные ингредиенты",
    description:
      "Только чистые эфирные масла и природные экстракты без агрессивной химии.",
  },
  {
    icon: Sparkles,
    title: "Ручная работа",
    description:
      "Каждая партия создаётся малыми объёмами парфюмерами с многолетним опытом.",
  },
  {
    icon: Clock,
    title: "Стойкость до 12 часов",
    description:
      "Передовые технологии фиксации аромата сохраняют шлейф на весь день.",
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-5 pb-8 md:px-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Image panel */}
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] md:min-h-[560px]">
          <Image
            src="/images/skincare-apply.webp"
            alt="Нанесение парфюмированной сыворотки на кожу"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-balance text-2xl font-medium leading-snug text-card md:text-3xl">
              Гармония изысканных нот, которая подчеркнёт ваш стиль и настроение.
            </p>
          </div>
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-center rounded-[2rem] bg-card p-8 md:p-14">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            О бренде
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Парфюм, созданный для{" "}
            <span className="font-serif italic font-normal">
              индивидуальности
            </span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            PERFUME-MODE — это нишевая парфюмерия для тех, кто ценит
            уникальность. Мы соединяем натуральные ингредиенты и передовые
            технологии, чтобы каждый аромат стал вашим личным почерком.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
