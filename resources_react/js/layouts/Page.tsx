import React, { type ReactNode } from 'react'
import styled from 'styled-components'

interface PageProps {
  children?: ReactNode
}

const StyledPage = styled.div`
  /* Add your styles here */
`

const Page: React.FC<PageProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>
}

export default Page
