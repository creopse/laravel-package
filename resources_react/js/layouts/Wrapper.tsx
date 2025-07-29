import React, { type ReactNode } from 'react'
import styled from 'styled-components'

export interface WrapperProps {
  children?: ReactNode
}

const StyledWrapper = styled.div`
  /* Add your styles here */
`

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { initialize } = useDataloader()

  useEffect(() => {
    initialize()
  }, [])

  return (
    <Wrapper>
      <StyledWrapper>{children}</StyledWrapper>
    </Wrapper>
  )
}

export default Wrapper
