import { describe, expect, it } from 'vitest'
import packageJson from '../../package.json'

describe('browser runtime dependencies', () => {
  it.each([
    '@react-three/drei',
    '@react-three/fiber',
    '@react-three/rapier',
    'meshline',
    'three',
  ])('does not ship the removed Lanyard dependency %s', (dependency) => {
    expect(packageJson.dependencies).not.toHaveProperty(dependency)
  })
})
