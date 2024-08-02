import Link from "next/link"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <AuroraBackground>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 relative">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                )}
              >
                Login
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 relative z-10">{children}</main>
        <SiteFooter className="relative z-10" />
      </div>
    </AuroraBackground>
  )
}