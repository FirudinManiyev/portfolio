import { describe, expect, it } from 'vitest'
import vercelConfig from '../../vercel.json'

describe('Vercel Content Security Policy', () => {
  it('keeps script execution self-hosted without eval permissions', () => {
    const policy = vercelConfig.headers[0].headers.find(
      (header) => header.key === 'Content-Security-Policy',
    )?.value ?? ''
    const scriptSources = policy.match(/script-src ([^;]+)/)?.[1].split(/\s+/) ?? []

    expect(scriptSources).toContain("'self'")
    expect(scriptSources).not.toContain("'wasm-unsafe-eval'")
    expect(scriptSources).not.toContain("'unsafe-eval'")
  })
})
