// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import ProfileCard from '../components/ProfileCard'

describe('ProfileCard', () => {
  it('presents Firudin profile information and links to contact', () => {
    render(
      <MemoryRouter>
        <ProfileCard
          avatarUrl="/firudin.jpg"
          name="Firudin Maniyev"
          title="Full-stack Developer"
          handle="firudincoder"
          status="Əlaqə üçün açıq"
          contactText="Əlaqə saxla"
          contactTo="/contact"
          showUserInfo
          enableTilt
          enableMobileTilt={false}
        />
      </MemoryRouter>,
    )

    expect(screen.getByRole('article', { name: 'Firudin Maniyev profil kartı' })).not.toBeNull()
    expect(screen.getByRole('img', { name: 'Firudin Maniyev profil şəkli' })).not.toBeNull()
    expect(screen.getByText('Full-stack Developer')).not.toBeNull()
    expect(screen.getByText('@firudincoder')).not.toBeNull()
    expect(screen.getByText('Əlaqə üçün açıq')).not.toBeNull()
    expect(screen.getByRole('link', { name: 'Əlaqə saxla' }).getAttribute('href')).toBe('/contact')
  })
})
