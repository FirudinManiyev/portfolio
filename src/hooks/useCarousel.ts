import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useMediaQuery } from './useMediaQuery'

interface UseCarouselOptions {
  itemCount: number
  autoplayDelay?: number
}

export function useCarousel({ itemCount, autoplayDelay = 4500 }: UseCarouselOptions) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const isTablet = useMediaQuery('(min-width: 640px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInteractionPaused, setIsInteractionPaused] = useState(false)

  const visibleItems = isDesktop ? 3 : isTablet ? 2 : 1
  const maxIndex = Math.max(0, itemCount - visibleItems)
  const currentIndex = Math.min(activeIndex, maxIndex)

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return

    const nextIndex = Math.min(Math.max(index, 0), maxIndex)
    const target = container.children.item(nextIndex)

    if (!(target instanceof HTMLElement)) return

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
    setActiveIndex(nextIndex)
  }, [maxIndex, prefersReducedMotion])

  const goPrevious = useCallback(() => {
    scrollToIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1)
  }, [currentIndex, maxIndex, scrollToIndex])

  const goNext = useCallback(() => {
    scrollToIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }, [currentIndex, maxIndex, scrollToIndex])

  const handleScroll = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)

    frameRef.current = requestAnimationFrame(() => {
      const container = containerRef.current
      if (!container) return

      const targetPosition = container.scrollLeft + container.offsetLeft
      const children = Array.from(container.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement,
      )

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      children.forEach((child, index) => {
        const distance = Math.abs(child.offsetLeft - targetPosition)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(Math.min(closestIndex, maxIndex))
    })
  }, [maxIndex])

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
  }, [])

  useEffect(() => {
    if (isInteractionPaused || prefersReducedMotion || maxIndex === 0) return

    const timer = window.setTimeout(goNext, autoplayDelay)
    return () => window.clearTimeout(timer)
  }, [activeIndex, autoplayDelay, goNext, isInteractionPaused, maxIndex, prefersReducedMotion])

  const pages = useMemo(
    () => Array.from({ length: maxIndex + 1 }, (_, index) => index),
    [maxIndex],
  )

  return {
    activeIndex: currentIndex,
    containerRef,
    goNext,
    goPrevious,
    handleScroll,
    pages,
    pauseInteraction: () => setIsInteractionPaused(true),
    resumeInteraction: () => setIsInteractionPaused(false),
    scrollToIndex,
  }
}
