import AdController from './AdController'
import AdIdentifierController from './AdIdentifierController'

const Ads = {
    AdController: Object.assign(AdController, AdController),
    AdIdentifierController: Object.assign(AdIdentifierController, AdIdentifierController),
}

export default Ads