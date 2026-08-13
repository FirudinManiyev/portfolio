import { memo, useCallback, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export interface ProfileCardProps {
  avatarUrl: string
  miniAvatarUrl?: string
  iconUrl?: string
  name: string
  title: string
  handle: string
  status: string
  contactText?: string
  contactTo?: string
  showUserInfo?: boolean
  enableTilt?: boolean
  enableMobileTilt?: boolean
  behindGlowEnabled?: boolean
  behindGlowColor?: string
  behindGlowSize?: string
  innerGradient?: string
  className?: string
}

const DEFAULT_INNER_GRADIENT =
  'linear-gradient(145deg, rgba(10, 10, 10, 0.98) 0%, rgba(66, 45, 8, 0.94) 100%)'

function ProfileCardComponent({
  avatarUrl,
  miniAvatarUrl,
  iconUrl,
  name,
  title,
  handle,
  status,
  contactText = 'Əlaqə saxla',
  contactTo = '/contact',
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  behindGlowEnabled = true,
  behindGlowColor = 'rgba(250, 204, 21, 0.32)',
  behindGlowSize = '64%',
  innerGradient = DEFAULT_INNER_GRADIENT,
  className = '',
}: ProfileCardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const setWrapperRef = useCallback(
    (node: HTMLDivElement | null) => {
      wrapperRef.current = node

      if (!node) return

      node.style.setProperty('--profile-pointer-x', '50%')
      node.style.setProperty('--profile-pointer-y', '50%')
      node.style.setProperty('--profile-rotate-x', '0deg')
      node.style.setProperty('--profile-rotate-y', '0deg')
      node.style.setProperty('--profile-behind-glow-color', behindGlowColor)
      node.style.setProperty('--profile-behind-glow-size', behindGlowSize)
      node.style.setProperty('--profile-inner-gradient', innerGradient)
    },
    [behindGlowColor, behindGlowSize, innerGradient],
  )

  const tiltIsAllowed = useCallback(
    (pointerType: string) => {
      if (!enableTilt || typeof window === 'undefined') return false

      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
      if (reducedMotion) return false

      const hasFinePointer = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? true
      return hasFinePointer || (enableMobileTilt && pointerType !== 'mouse')
    },
    [enableMobileTilt, enableTilt],
  )

  const resetTilt = useCallback(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    wrapper.style.setProperty('--profile-pointer-x', '50%')
    wrapper.style.setProperty('--profile-pointer-y', '50%')
    wrapper.style.setProperty('--profile-rotate-x', '0deg')
    wrapper.style.setProperty('--profile-rotate-y', '0deg')
  }, [])

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const wrapper = wrapperRef.current
      if (!wrapper || !tiltIsAllowed(event.pointerType)) return

      const bounds = wrapper.getBoundingClientRect()
      if (bounds.width === 0 || bounds.height === 0) return

      const horizontalRatio = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1)
      const verticalRatio = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1)

      wrapper.style.setProperty('--profile-pointer-x', `${horizontalRatio * 100}%`)
      wrapper.style.setProperty('--profile-pointer-y', `${verticalRatio * 100}%`)
      wrapper.style.setProperty('--profile-rotate-x', `${(0.5 - verticalRatio) * 11}deg`)
      wrapper.style.setProperty('--profile-rotate-y', `${(horizontalRatio - 0.5) * 14}deg`)
    },
    [tiltIsAllowed],
  )

  return (
    <div
      ref={setWrapperRef}
      className={`group relative mx-auto w-[min(82vw,18rem)] touch-pan-y [perspective:900px] sm:w-80 lg:w-[22rem] ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      {behindGlowEnabled ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_var(--profile-pointer-x)_var(--profile-pointer-y),var(--profile-behind-glow-color)_0%,transparent_var(--profile-behind-glow-size))] opacity-65 blur-3xl transition-opacity duration-500 motion-reduce:transition-none sm:opacity-80"
        />
      ) : null}

      <article
        aria-label={`${name} profil kartı`}
        className="relative isolate aspect-[0.74] w-full overflow-hidden rounded-[2rem] border border-yellow-200/20 bg-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out [background-image:var(--profile-inner-gradient)] [transform:rotateX(var(--profile-rotate-x))_rotateY(var(--profile-rotate-y))] [transform-style:preserve-3d] will-change-transform motion-reduce:transform-none motion-reduce:transition-none"
      >
        <img
          src={avatarUrl}
          alt={`${name} profil şəkli`}
          width="960"
          height="1280"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%] saturate-[0.92] transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
        />

        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/95" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--profile-pointer-x)_var(--profile-pointer-y),rgba(255,255,255,0.34)_0%,rgba(250,204,21,0.12)_18%,transparent_48%)] opacity-70 mix-blend-screen"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(115deg,transparent_25%,rgba(253,224,71,0.14)_42%,rgba(255,255,255,0.2)_50%,transparent_66%)] bg-[length:220%_220%] opacity-50 mix-blend-color-dodge transition-[background-position] duration-300 [background-position:var(--profile-pointer-x)_var(--profile-pointer-y)] motion-reduce:hidden"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-yellow-200/80">Portfolio profile</p>
            <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-0.035em] text-white drop-shadow-lg sm:text-3xl">
              {name}
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-200 sm:text-base">{title}</p>
          </div>

          {iconUrl ? (
            <img
              src={iconUrl}
              alt=""
              aria-hidden="true"
              width="48"
              height="48"
              className="h-10 w-10 shrink-0 rounded-xl border border-white/10 bg-black/35 object-contain p-2 opacity-85 backdrop-blur-md sm:h-12 sm:w-12"
            />
          ) : null}
        </div>

        {showUserInfo ? (
          <div className="absolute inset-x-3 bottom-3 z-20 rounded-[1.35rem] border border-white/15 bg-black/55 p-3 shadow-2xl backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={miniAvatarUrl ?? avatarUrl}
                  alt=""
                  aria-hidden="true"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 shrink-0 rounded-full border border-yellow-200/25 object-cover object-top sm:h-12 sm:w-12"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">@{handle}</p>
                  <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-neutral-300">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.8)]" />
                    {status}
                  </p>
                </div>
              </div>

              <Link
                to={contactTo}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-yellow-200/35 bg-yellow-300 px-3 py-2.5 text-[0.7rem] font-bold text-neutral-950 shadow-[0_10px_28px_rgba(250,204,21,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 motion-reduce:transition-none sm:px-4 sm:text-xs"
              >
                {contactText}
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ) : null}
      </article>
    </div>
  )
}

const ProfileCard = memo(ProfileCardComponent)

export default ProfileCard
