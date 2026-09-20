import { describe, expect, it } from 'vitest'
import { getProjectBySlug } from '../data/projects'
import { getProjectRoute } from '../data/projectRoutes'

describe('KiberEduAz project data', () => {
  it('exposes the project and its detail route', () => {
    const project = getProjectBySlug('kibereduaz')

    expect(project?.title).toBe('KiberEduAz')
    expect(project?.image).toContain('kibereduaz.png')
    expect(project?.technologies).toContain('React')
    expect(getProjectRoute('kibereduaz')?.title).toBe('KiberEduAz')
  })
})
