import React from 'react'
import Error404 from '@/assets/images/404.svg?react'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="tw:flex tw:flex-col tw:items-center tw:justify-center tw:min-h-screen tw:text-center tw:px-6 tw:gap-4">
      <p className="tw:text-sm tw:font-semibold tw:tracking-widest tw:text-gray-400 tw:uppercase">{t('Error 404')}</p>

      <Error404 className="tw:h-64 tw:w-auto" />

      <h1 className="tw:text-3xl tw:font-bold tw:text-gray-800">{t('Page Not Found!')}</h1>

      <p className="tw:max-w-md tw:text-gray-500">
        {t('Oops! The page you are looking for does not exist. It might have been moved or deleted.')}
      </p>

      <button
        className="tw:mt-2 tw:px-6 tw:py-2.5 tw:rounded-lg tw:bg-[#1E9CD7] tw:text-white tw:text-sm tw:font-semibold tw:tracking-wide tw:transition-opacity hover:tw:opacity-80 tw:cursor-pointer"
        onClick={() => router.get('/', {}, { replace: true })}>
        {t('BACK TO HOME')}
      </button>
    </section>
  )
}

export default NotFoundPage
