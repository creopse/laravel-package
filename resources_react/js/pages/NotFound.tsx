import Error404 from '@/assets/images/404.svg?react'
import AppHead from '@/components/sections/AppHead'
import Page from '@/layouts/Page'
import React from 'react'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <AppHead title={t('Error 404 - Page not found')} />
      <section className="tw:flex tw:h-screen tw:flex-col tw:items-center tw:justify-center tw:px-3 tw:text-center">
        <h1 className="tw:mb-2">{t('Error 404')}</h1>
        <Error404 className="tw:h-[300px]" />
        <h4 className="tw:mt-6 tw:mb-0">{t('Page Not Found!')}</h4>
        <p className="tw:text-2xl tw:text-gray-800">{t('Oops! The page you are looking for does not exist. It might have been moved or deleted.')}</p>
        <button
          onClick={() => router.get('/', { replace: true })}
          className="tw:bg-primary-600 tw:hover:bg-primary-700 tw:focus:ring-primary-500 tw:mb-4 tw:rounded tw:px-4 tw:py-2 tw:font-medium tw:text-white tw:transition-colors tw:focus:ring-2 tw:focus:ring-offset-2 tw:focus:outline-none">
          {t('BACK TO HOME')}
        </button>
      </section>
    </Page>
  )
}

export default NotFoundPage
