import { AsyncImg } from '@creopse/react'
import React from 'react'

interface ImageProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  title?: string
  loading?: 'lazy' | 'eager'
  style?: React.CSSProperties
  size?: 'small' | 'medium' | 'large' | 'original'
  sync?: boolean
}

const Image: React.FC<ImageProps> = (props) => {
  const { src, alt = '', width, height, title, loading, style, size = 'original', sync = false } = props

  const { getImage } = useHelper()

  const filteredProps = {
    alt,
    width,
    height,
    title,
    loading,
    style,
  }

  if (sync) {
    return <img src={src} {...filteredProps} />
  }

  return <AsyncImg load={() => getImage(src, size)} {...filteredProps} />
}

export default Image
