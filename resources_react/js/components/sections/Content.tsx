import { Icon } from '@iconify/react'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  i > svg {
    height: 48px;
  }
`

const Content: React.FC = () => {
  const { tr, rHtml } = useHelper()
  const { getSectionRootData, getSectionData } = useContent()

  const contentData = getSectionRootData('content')
  const headlinks = getSectionData('content')?.headlinks ?? []
  const features = getSectionData('content')?.features ?? []

  return (
    <StyledDiv>
      <div className="tw:min-h-screen tw:bg-gray-50">
        <nav className="tw:bg-white tw:shadow-sm">
          <div className="tw:container tw:mx-auto">
            <div className="tw:flex tw:items-center tw:justify-between tw:px-4 tw:py-4">
              <img src="/assets/images/creopse/logo.svg" alt="Vue logo" className="tw:h-8" />
              <div className="tw:flex tw:space-x-6">
                {headlinks.map((link: { url: string | undefined; title: any }, i: React.Key | null | undefined) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="tw:text-gray-600 tw:hover:text-[#1E9CD7]">
                    <div className="tw:flex tw:items-center">
                      <Icon icon="mdi:open-in-new" className="tw:mr-1" />
                      {tr(link.title)}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main className="tw:container tw:mx-auto tw:px-4 tw:py-16">
          <div className="tw:text-center">
            <h1 className="tw:mb-8 tw:text-4xl tw:font-bold tw:text-gray-900">{tr(contentData?.title)}</h1>

            <p
              className="ck-content tw:mx-auto tw:mb-12 tw:max-w-2xl tw:text-xl tw:text-gray-600"
              dangerouslySetInnerHTML={{ __html: tr(contentData?.text) }}
            />

            <div className="tw:mx-auto tw:grid tw:max-w-5xl tw:grid-cols-1 tw:gap-8 tw:md:grid-cols-2 tw:lg:grid-cols-3">
              {features.map((feature: { icon: any; title: any; text: string | null | undefined }, i: React.Key | null | undefined) => (
                <div key={i} className="tw:rounded-lg tw:bg-white tw:p-6 tw:text-center tw:shadow-md tw:transition-shadow tw:hover:shadow-lg">
                  <i className="tw:inline-block tw:text-[#1E9CD7]" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  <h2 className="tw:mb-4 tw:text-xl tw:font-semibold tw:text-gray-900">{tr(feature.title)}</h2>
                  <p className="tw:mb-4 tw:text-gray-600" dangerouslySetInnerHTML={{ __html: rHtml(feature.text) }} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </StyledDiv>
  )
}

export default Content
