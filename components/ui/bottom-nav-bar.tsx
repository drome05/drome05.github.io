"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Home, FolderGit2, Cpu, Briefcase, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { scrollToId } from "@/lib/scroll-to"
import { useActiveSection } from "@/lib/use-active-section"

const NAV_ITEMS = [
  { label: "Home", icon: Home, id: "top" },
  { label: "Work", icon: FolderGit2, id: "projects" },
  { label: "Skills", icon: Cpu, id: "skills" },
  { label: "Experience", icon: Briefcase, id: "experience" },
  { label: "Contact", icon: MessageCircle, id: "contact" },
]

const LABEL_WIDTH = 76

type BottomNavBarProps = {
  className?: string
  stickyBottom?: boolean
}

export function BottomNavBar({ className, stickyBottom = true }: BottomNavBarProps) {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id))
  const reduceMotion = useReducedMotion()

  return (
    <motion.nav
      initial={reduceMotion ? false : { y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Section navigation"
      className={cn(
        "flex h-[52px] items-center space-x-1 rounded-full border border-border bg-card p-2 shadow-xl",
        stickyBottom && "fixed inset-x-0 bottom-4 z-[90] mx-auto w-fit",
        className,
      )}
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon
        const isActive = activeId === item.id

        return (
          <motion.button
            key={item.id}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className={cn(
              "relative flex h-10 max-h-[44px] min-h-[40px] min-w-[44px] items-center gap-0 rounded-full px-3 py-2 transition-colors duration-200",
              isActive
                ? "gap-2 bg-primary/10 text-primary"
                : "bg-transparent text-muted-foreground hover:bg-muted",
              "focus:outline-none focus-visible:ring-0",
            )}
            onClick={() => scrollToId(item.id)}
            aria-label={item.label}
            aria-current={isActive ? "true" : undefined}
            type="button"
          >
            <Icon size={20} strokeWidth={2} aria-hidden className="transition-colors duration-200" />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      width: { type: "spring", stiffness: 350, damping: 32 },
                      opacity: { duration: 0.19 },
                      marginLeft: { duration: 0.19 },
                    }
              }
              className="flex max-w-[76px] items-center overflow-hidden"
            >
              <span
                className={cn(
                  "text-[11px] leading-[1.9] font-medium whitespace-nowrap select-none transition-opacity duration-200",
                  isActive ? "text-primary" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        )
      })}
    </motion.nav>
  )
}

export default BottomNavBar
