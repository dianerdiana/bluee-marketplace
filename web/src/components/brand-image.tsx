import { appConfig } from "@/configs/app.config"
import { cn } from "@/lib/utils"

type BrandImageProps = React.HTMLAttributes<HTMLDivElement>

export const BrandImage: React.FC<
  BrandImageProps & { imgClassName?: string; brandClassName?: string }
> = ({ className, imgClassName, brandClassName, ...props }) => {
  return (
    <div className={cn("flex items-center w-fit", className)} {...props}>
      <img src={appConfig.logoUrl} className={cn("h-auto w-11 me-3", imgClassName)} />
      <span className={cn("text-2xl font-black font-mons", brandClassName)}>
        {appConfig.brandName}
      </span>
    </div>
  )
}
