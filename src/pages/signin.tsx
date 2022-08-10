import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AppLogo from 'components/atoms/AppLogo'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'
import SigninFormContainer from 'containers/SigninFormContainer'

const SigninPage: NextPage = () => {
  const router = useRouter()
  const handleSignin = async (err?: Error) => {
    if (!err) {
      const redirectTo = (router.query['redirect_to'] as string) ?? '/'
      console.log('Redirecting', redirectTo)
      await router.push(redirectTo)
    }
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
      >
        <Flex width="400px" flexDirection="column" justifyContent="center">
          <Box marginBottom={2}>
            <AppLogo />
          </Box>
          <Box width="100%">
            {/*
                Sign-in form container
                Call auth api by username and password in form
                and return onSignin's call back
            */}
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default SigninPage
