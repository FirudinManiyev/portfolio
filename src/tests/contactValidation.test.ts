import { describe, expect, it } from 'vitest'
import { escapeContactPayload, validateContactForm } from '../utils/contactValidation'

const validPayload = {
  name: 'Firudin Maniyev',
  email: 'firudin@example.com',
  subject: 'Portfolio layihəsi',
  message: 'Salam, əməkdaşlıq barədə danışmaq istəyirəm.',
}

describe('contact form validation', () => {
  it('normalizes a valid payload', () => {
    const result = validateContactForm({
      ...validPayload,
      email: '  FIRUDIN@EXAMPLE.COM  ',
    })

    expect(result).toEqual({
      success: true,
      data: validPayload,
    })
  })

  it('identifies the invalid field for accessible inline feedback', () => {
    const result = validateContactForm({ ...validPayload, email: 'not-an-email' })

    expect(result.success).toBe(false)
    if (!result.success) expect(result.field).toBe('email')
  })

  it('escapes content used in the email template', () => {
    expect(escapeContactPayload({
      ...validPayload,
      message: '<b>Salam</b>',
    }).message).toBe('&lt;b&gt;Salam&lt;/b&gt;')
  })
})
