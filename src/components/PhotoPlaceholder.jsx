import { ImagePlus } from 'lucide-react'

/**
 * Graceful placeholder for photos that haven't been added yet.
 * Drop the matching file into public/images/ and point the data at it.
 */
export default function PhotoPlaceholder({ label = 'Photo coming soon', className = '' }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-ocean-800 via-ocean-700 to-sand-500 px-3 text-center ${className}`}
    >
      <ImagePlus className="h-5 w-5 text-sand-100/75" strokeWidth={1.7} />
      <p className="text-[10px] font-semibold leading-snug text-sand-100/85">{label}</p>
    </div>
  )
}
