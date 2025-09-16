import AppHead from '@/components/sections/AppHead'
import Page from '@/layouts/Page'
import { RootContainer } from '@creopse/react'
import React from 'react'

const Container: React.FC = () => {
  const { getFinalPageSections, getComponents, page } = useContent()

  const sections = getFinalPageSections()
  const components = getComponents()

  return (
    <Page>
      <AppHead />
      <RootContainer page={page} sections={sections} components={components} />
    </Page>
  )
}

export default Container
