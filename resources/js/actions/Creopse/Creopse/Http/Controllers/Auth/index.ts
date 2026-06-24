import LoginController from './LoginController'
import RegistrationController from './RegistrationController'
import ProviderController from './ProviderController'
import PasswordResetController from './PasswordResetController'
import EmailChangeController from './EmailChangeController'
import UsernameChangeController from './UsernameChangeController'
import EmailVerificationController from './EmailVerificationController'
import LogoutController from './LogoutController'
import AccountController from './AccountController'
import TokenController from './TokenController'

const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
    RegistrationController: Object.assign(RegistrationController, RegistrationController),
    ProviderController: Object.assign(ProviderController, ProviderController),
    PasswordResetController: Object.assign(PasswordResetController, PasswordResetController),
    EmailChangeController: Object.assign(EmailChangeController, EmailChangeController),
    UsernameChangeController: Object.assign(UsernameChangeController, UsernameChangeController),
    EmailVerificationController: Object.assign(EmailVerificationController, EmailVerificationController),
    LogoutController: Object.assign(LogoutController, LogoutController),
    AccountController: Object.assign(AccountController, AccountController),
    TokenController: Object.assign(TokenController, TokenController),
}

export default Auth