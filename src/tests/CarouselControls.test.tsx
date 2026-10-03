// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CarouselControls from '../components/CarouselControls'

describe('CarouselControls', () => {
  it('shows side navigation and an accessible autoplay control', () => {
    render(
      <CarouselControls
        activeIndex={0}
        ariaLabel="Layihə slideri"
        isAutoplayPaused={false}
        pages={[0, 1, 2]}
        onNext={vi.fn()}
        onPrevious={vi.fn()}
        onSelect={vi.fn()}
        onToggleAutoplay={vi.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: 'Əvvəlki slayd' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Növbəti slayd' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Avtomatik keçidi dayandır' })).not.toBeNull()
    expect(screen.getByTestId('carousel-side-controls').className).toContain('absolute')
  })
})
