import { cn } from "@/lib/utils"

type RowProps = React.HTMLAttributes<HTMLDivElement>

export const Row: React.FC<RowProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex flex-wrap -mx-2", className)} {...props}>
      {children}
    </div>
  )
}
