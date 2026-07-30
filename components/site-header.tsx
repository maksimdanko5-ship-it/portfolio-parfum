"use client"

import { useState } from "react"
import { ShoppingBag, Menu, X } from "lucide-react"

const primaryLinks = [
  { label: "Новинки", href: "#catalog" },
  { label: "Товары", href: "#catalog" },
  { label: "Скидки", href: "#about" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-6 md:px-10">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.2em] text-foreground"
        >
          PERFUME-MODE
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-card/70 p-1.5 backdrop-blur-md md:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-1 rounded-full bg-card/70 p-1.5 backdrop-blur-md md:flex">
          <a
            href="#footer"
            className="rounded-full px-5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
          >
            Поддержка
          </a>
          <a
            href="#catalog"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            Корзина
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-card/70 text-foreground backdrop-blur-md md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-5 rounded-3xl bg-card/90 p-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col">
            {[...primaryLinks, { label: "Поддержка", href: "#footer" }].map(
              (link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="#catalog"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Корзина
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
