import ShapeImage from 'components/atoms/ShapeImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface UserProfileProps {
  /**
   * variant (display style)
   */
  variant?: 'normal' | 'small'
  /**
   * Username
   */
  username: string
  /**
   * user image url
   */
  profileImageUrl: string
  /**
   * the number of products user owns
   */
  numberOfProducts: number
  /**
   * user description
   */
  description?: string
}

/**
 * User profile
 */
const UserProfile = ({
  variant = 'normal',
  username,
  profileImageUrl,
  numberOfProducts,
  description,
}: UserProfileProps) => {
  const profileImageSize = variant === 'small' ? '100px' : '120px'

  return (
    <Flex>
      <Box minWidth={profileImageSize}>
        {/* User Image */}
        <ShapeImage
          shape="circle"
          quality="85"
          src={profileImageUrl}
          alt={username}
          height={profileImageSize}
          width={profileImageSize}
        />
      </Box>
      <Box padding={1}>
        <Flex
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            {/* Username */}
            <Text
              as="p"
              fontWeight="bold"
              variant="mediumLarge"
              marginTop={0}
              marginBottom={1}
            >
              {username}
            </Text>
            {/* n of product being sold */}
            <Text marginBottom={1} marginTop={0} as="p">
              {numberOfProducts}点出品済
            </Text>
            {/* User description */}
            {variant === 'normal' && (
              <Text margin={0} as="p">
                {description}
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default UserProfile
