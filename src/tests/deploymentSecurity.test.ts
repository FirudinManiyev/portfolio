import { describe, expect, it } from 'vitest'
import vercelConfig from '../../vercel.json'

describe('Vercel Content Security Policy', () => {
  it('allows WebAssembly compilation without enabling JavaScript eval', () => {
    const policy = vercelConfig.headers[0].headers.find(
      (header) => header.key === 'Content-Security-Policy',
    )?.value ?? ''
    const scriptSources = policy.match(/script-src ([^;]+)/)?.[1].split(/\s+/) ?? []

    expect(scriptSources).toContain("'wasm-unsafe-eval'")
    expect(scriptSources).not.toContain("'unsafe-eval'")
  })
})
