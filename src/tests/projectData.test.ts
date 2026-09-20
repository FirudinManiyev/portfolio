import { describe, expect, it } from 'vitest'
import { getProjectBySlug } from '../data/projects'
import { getProjectRoute } from '../data/projectRoutes'

describe('KiberEduAz project data', () => {
  it('exposes the project and its detail route', () => {
    const project = getProjectBySlug('kibereduaz')

    expect(project?.title).toBe('KiberEduAz')
    expect(project?.image).toContain('kibereduaz.png')
    expect(project?.technologies).toContain('React')
    expect(project?.link).toBe('https://github.com/1brah1m0f/KiberEduAz')
    expect(project?.liveDemo).toBe('https://kiber-edu-az-one.vercel.app/')
    expect(getProjectRoute('kibereduaz')?.title).toBe('KiberEduAz')
  })
})
