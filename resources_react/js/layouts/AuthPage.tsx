import React, { type ReactNode, useEffect } from 'react'
import Page from './Page'

interface AuthPageProps {
  children?: ReactNode
}

const AuthPage: React.FC<AuthPageProps> = ({ children }) => {
  const { isUserConnected } = useAuthStore()

  useEffect(() => {
    if (!isUserConnected) {
      router.get('/login', {}, { replace: true })
    }
  }, [isUserConnected, router])

  if (!isUserConnected) {
    return null
  }

  return <Page>{children}</Page>
}

export default AuthPage
