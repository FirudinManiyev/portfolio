// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import LanyardErrorBoundary from '../components/LanyardErrorBoundary'

function BrokenLanyard(): never {
  throw new Error('WebAssembly compile failed')
}

describe('LanyardErrorBoundary', () => {
  afterEach(() => vi.restoreAllMocks())

  it('contains a Lanyard failure and renders a local fallback', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined)
    render(
      <LanyardErrorBoundary>
        <BrokenLanyard />
      </LanyardErrorBoundary>,
    )

    expect(screen.getByText('3D kart hazırda göstərilə bilmir.')).not.toBeNull()
  })
})
