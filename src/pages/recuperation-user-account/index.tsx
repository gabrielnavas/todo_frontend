import { useState } from 'react'

import { Container } from './styles'

import { LeftSideAuthentication } from '../../components/surfaces/left-side-authentication'
import { RightSideAuthentication } from '../../components/surfaces/right-side-authentication'

import { AfterSendNewPassword } from './componenets/after-send-new-password'
import { FormToRecuperation } from './componenets/form-to-recuperation'

export const RecuperationAccountPage = () => {
  const [isShowComponentEmailSended, setIsShowComponentEmailSended] = useState(false)

  return (
    <Container>
      <LeftSideAuthentication />
      <RightSideAuthentication titleHeader={!isShowComponentEmailSended && 'Forgot your password? no problems!'}>
        {
          isShowComponentEmailSended
            ? <AfterSendNewPassword />
            : <FormToRecuperation
              setRecuperationFinish={setIsShowComponentEmailSended}/>
        }

      </RightSideAuthentication>
    </Container>
  )
}
