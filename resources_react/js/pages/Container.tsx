import { RootContainer } from '@creopse/react'
import React from 'react'

const Container: React.FC = () => {
  const { initializeData } = useDataloader()

  useEffect(() => {
    initializeData()
  }, [initializeData])

  return <RootContainer />
}

export default Container
