import AppSettingController from './AppSettingController'
import VideoSettingController from './VideoSettingController'

const Settings = {
    AppSettingController: Object.assign(AppSettingController, AppSettingController),
    VideoSettingController: Object.assign(VideoSettingController, VideoSettingController),
}

export default Settings