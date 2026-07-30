import { ArrowUpRight } from "lucide-react"

const linkGroups = [
  {
    title: "Каталог",
    links: ["Новинки", "Бестселлеры", "Женские ароматы", "Мужские ароматы"],
  },
  {
    title: "Бренд",
    links: ["О нас", "Философия", "Ингредиенты", "Магазины"],
  },
  {
    title: "Помощь",
    links: ["Доставка", "Возврат", "Поддержка", "Контакты"],
  },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="mx-auto max-w-[1600px] px-5 py-12 md:px-10">
      <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold tracking-[0.2em]">
              PERFUME-MODE
            </p>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Подпишитесь на рассылку и получите{" "}
              <span className="font-serif italic font-normal">−10%</span> на
              первый заказ
            </h2>
            <form className="mt-8 flex max-w-md items-center gap-2 rounded-full bg-primary-foreground/15 p-1.5 backdrop-blur-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Электронная почта
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Ваш e-mail"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
              >
                Подписаться
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PERFUME-MODE. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Telegram
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Политика
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
