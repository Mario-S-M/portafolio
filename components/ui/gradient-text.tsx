import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "rainbow" | "elegant"
}

export function GradientText({
  children,
  className,
  variant = "primary"
}: GradientTextProps) {
  const variants = {
    primary: "from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400",
    secondary: "from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400",
    accent: "from-rose-600 via-pink-600 to-fuchsia-600 dark:from-rose-400 dark:via-pink-400 dark:to-fuchsia-400",
    rainbow: "from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 dark:from-red-400 dark:via-yellow-400 dark:via-green-400 dark:via-blue-400 dark:via-indigo-400 dark:to-purple-400",
    elegant: "from-slate-700 via-slate-900 to-slate-700 dark:from-slate-200 dark:via-white dark:to-slate-200"
  }

  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-transparent font-bold",
        variants[variant],
        "drop-shadow-sm",
        className
      )}
    >
      {children}
    </span>
  )
}