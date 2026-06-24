import CampaignController from './CampaignController'
import EmailController from './EmailController'
import PhoneController from './PhoneController'

const Newsletter = {
    CampaignController: Object.assign(CampaignController, CampaignController),
    EmailController: Object.assign(EmailController, EmailController),
    PhoneController: Object.assign(PhoneController, PhoneController),
}

export default Newsletter