import AppHead from '@/components/sections/AppHead'
import Page from '@/layouts/Page'
import { SectionModel, slideToId } from '@creopse/utils'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const ResetSection = styled.section`
  all: unset !important;
`

const Container: React.FC = () => {
  const { getFinalPageSections, getComponents, page } = useContent()
  const sections = getFinalPageSections()
  const components = getComponents()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (page.props.sectionData && sections.some((section) => section.slug === page.props.sectionData?.slug)) {
        slideToId(`${page.props.sectionData.slug}-container`)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [page.props.sectionData, sections])

  return (
    <Page>
      <AppHead />
      {sections.map((section: SectionModel, i: number) => {
        const SectionComponent = components[section.name]
        if (!SectionComponent) {
          console.warn(`Component ${section.name} not found`)
          return null
        }

        return (
          <ResetSection key={`section-${section.slug}-${i}`} id={`${section.slug}-container`}>
            <SectionComponent />
          </ResetSection>
        )
      })}
    </Page>
  )
}

export default Container
