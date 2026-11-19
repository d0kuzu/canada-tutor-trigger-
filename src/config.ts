const env = import.meta.env

export const CANADA_TUTOR_ASSISTANT_ID = '194f277c-0911-4ca7-bba2-665036627bc0'

export const ASSISTANTS = {
  canadaTutor: {
    id: CANADA_TUTOR_ASSISTANT_ID,
    label: 'State Board Exam Prep Tutor (Canada)',
  },
} as const

export const config = {
  apiBaseUrl: (env.VITE_API_BASE_URL || 'https://api.zerde.co/diaxel').replace(/\/+$/, ''),
  defaultAssistantId: env.VITE_ASSISTANT_ID || CANADA_TUTOR_ASSISTANT_ID,
  isCanada: true,
  country: 'canada',
} as const
