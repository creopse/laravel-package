import AppHead from '@/components/sections/AppHead'
import Page from '@/layouts/Page'
import { RootContainer } from '@creopse/react'
import React from 'react'

const Container: React.FC = () => {
  return (
    <Page>
      <AppHead />
      <RootContainer />
    </Page>
  )
}

export default Container
