import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { About } from "@/components/about"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Catalog />
      <About />
      <SiteFooter />
    </main>
  )
}
