import { useState } from 'react'

/**
 * Responsive photo with a branded fallback: if the file fails to load,
 * a green panel is rendered instead of a broken image icon.
 * `name` refers to files in /public/photos/<name>-<width>.jpg
 * `widths` lists the pixel widths that exist for that photo.
 */
export default function Photo({ name, alt, widths = [800, 1600], sizes = '(max-width: 900px) 100vw, 50vw', eager = false, position = 'center', className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="photo-fallback" role="img" aria-label={alt} />
  const largest = widths[widths.length - 1]
  return (
    <img
      className={`photo ${className}`}
      src={`/photos/${name}-${largest}.jpg`}
      srcSet={widths.map(w => `/photos/${name}-${w}.jpg ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
      style={{ objectPosition: position }}
      onError={() => setFailed(true)}
    />
  )
}
