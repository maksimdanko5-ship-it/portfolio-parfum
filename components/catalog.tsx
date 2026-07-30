import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type Product = {
  name: string
  notes: string
  price: string
  image: string
  tag?: string
}

const products: Product[] = [
  {
    name: "Desert Breeze",
    notes: "Амбра · Кедр · Ветивер",
    price: "₽ 24 490,00",
    image: "/images/perfume-desert-breeze.png",
    tag: "Хит",
  },
  {
    name: "Rose Nuit",
    notes: "Роза · Пион · Мускус",
    price: "₽ 21 900,00",
    image: "/images/perfume-rose-nuit.png",
    tag: "Новинка",
  },
  {
    name: "Amber Oud",
    notes: "Уд · Специи · Ваниль",
    price: "₽ 27 300,00",
    image: "/images/perfume-amber-oud.png",
  },
  {
    name: "Blanc Musk",
    notes: "Белый мускус · Ирис · Бергамот",
    price: "₽ 19 500,00",
    image: "/images/perfume-blanc-musk.png",
  },
]

export function Catalog() {
  return (
    <section id="catalog" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Каталог
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Ароматы, которые{" "}
            <span className="font-serif italic font-normal">запоминают</span>
          </h2>
        </div>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Ограниченные коллекции нишевой парфюмерии ручной работы. Каждый флакон
          создаётся малыми партиями из натуральных компонентов.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="group flex flex-col overflow-hidden rounded-[2rem] bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`Флакон парфюма ${product.name}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                  {product.tag}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {product.notes}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold">{product.price}</span>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  aria-label={`Добавить ${product.name} в корзину`}
                >
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
