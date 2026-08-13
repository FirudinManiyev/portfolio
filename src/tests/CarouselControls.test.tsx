// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CarouselControls from '../components/CarouselControls'

describe('CarouselControls', () => {
  it('shows side navigation and no manual autoplay control', () => {
    render(
      <CarouselControls
        activeIndex={0}
        ariaLabel="Layihə slideri"
        pages={[0, 1, 2]}
        onNext={vi.fn()}
        onPrevious={vi.fn()}
        onSelect={vi.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: 'Əvvəlki slayd' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Növbəti slayd' })).not.toBeNull()
    expect(screen.queryByRole('button', { name: /avtomatik keçid/i })).toBeNull()
    expect(screen.getByTestId('carousel-side-controls').className).toContain('absolute')
  })
})
