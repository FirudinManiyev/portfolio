import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Box } from 'lucide-react'

interface LanyardErrorBoundaryProps {
  children: ReactNode
}

interface LanyardErrorBoundaryState {
  hasError: boolean
}

class LanyardErrorBoundary extends Component<
  LanyardErrorBoundaryProps,
  LanyardErrorBoundaryState
> {
  state: LanyardErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): LanyardErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Lanyard render failed', error, info)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="status" className="flex h-full items-center justify-center">
          <div className="flex max-w-xs flex-col items-center gap-3 text-center text-neutral-400">
            <Box className="h-10 w-10 text-yellow-300/70" aria-hidden="true" />
            <p className="text-sm">3D kart hazırda göstərilə bilmir.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default LanyardErrorBoundary
