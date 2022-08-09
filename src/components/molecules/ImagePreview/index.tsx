import styled from 'styled-components'
import { CloseIcon } from 'components/atoms/IconButton'
import Flex from 'components/layout/Flex'
import Box from 'components/layout/Box'

const ImagePreviewContainer = styled(Box)`
  position: relative;
`
// Wrap close button
const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`
interface ImagePreviewProps {
  /**
   * URL of image
   */
  src?: string
  /**
   * alternative text
   */
  alt?: string
  /**
   * height
   */
  height?: string
  /**
   * width
   */
  width?: string
  /**
   * event handler when delete button pushed
   */
  onRemove?: (src: string) => void
}

/**
 * Image preview
 */
const ImagePreview = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  // Call onRemove when close button pushed
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)
    return false
  }

  return (
    <ImagePreviewContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} height={height} width={width} />
      <CloseBox
        alignItems="center"
        justifyContent="center"
        onClick={handleCloseClick}
      >
        <CloseIcon size={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  )
}

export default ImagePreview
