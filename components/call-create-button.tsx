"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface CallCreateButtonProps extends ButtonProps {}

export function CallCreateButton({
  className,
  variant,
  ...props
}: CallCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
    // Function that returns a promise which resolves after the specified delay
  const timeout = (ms: number): Promise<void> => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  async function onClick() {
    setIsLoading(true)

    await timeout(1000);

    setIsLoading(false)



  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New call
    </button>
  )
}
