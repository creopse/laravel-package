import RoleController from './RoleController'
import PermissionController from './PermissionController'

const Access = {
    RoleController: Object.assign(RoleController, RoleController),
    PermissionController: Object.assign(PermissionController, PermissionController),
}

export default Access