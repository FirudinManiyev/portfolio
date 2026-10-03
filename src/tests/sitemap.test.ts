import { describe, expect, it } from 'vitest'
import { getProjectPath, projectRouteList } from '../data/projectRoutes'
import sitemap from '../../public/sitemap.xml?raw'

describe('sitemap project coverage', () => {
  it('contains every project detail route', () => {
    projectRouteList.forEach((project) => {
      expect(sitemap).toContain(getProjectPath(project.slug))
    })
  })
})
