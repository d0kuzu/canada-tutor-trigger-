const env = import.meta.env

export const CANADA_TUTOR_ASSISTANT_ID = '676c30e7-432d-446f-b1d8-b2883b46df65'

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
