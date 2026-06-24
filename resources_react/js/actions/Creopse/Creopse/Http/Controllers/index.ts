import Ads from './Ads'
import Auth from './Auth'
import TranslationController from './TranslationController'
import FileController from './FileController'
import StatsController from './StatsController'
import UserController from './UserController'
import UserSessionController from './UserSessionController'
import UserDeviceController from './UserDeviceController'
import UserPlaceController from './UserPlaceController'
import EmailController from './EmailController'
import Access from './Access'
import ServerController from './ServerController'
import InstallController from './InstallController'
import PluginController from './PluginController'
import Content from './Content'
import DatabaseController from './DatabaseController'
import DataChangeController from './DataChangeController'
import Newsletter from './Newsletter'
import NotificationController from './NotificationController'
import MediaFileController from './MediaFileController'
import Settings from './Settings'
import AppInformationController from './AppInformationController'
import SessionController from './SessionController'
import News from './News'
import SmsController from './SmsController'
import DynamicPageController from './DynamicPageController'

const Controllers = {
    Ads: Object.assign(Ads, Ads),
    Auth: Object.assign(Auth, Auth),
    TranslationController: Object.assign(TranslationController, TranslationController),
    FileController: Object.assign(FileController, FileController),
    StatsController: Object.assign(StatsController, StatsController),
    UserController: Object.assign(UserController, UserController),
    UserSessionController: Object.assign(UserSessionController, UserSessionController),
    UserDeviceController: Object.assign(UserDeviceController, UserDeviceController),
    UserPlaceController: Object.assign(UserPlaceController, UserPlaceController),
    EmailController: Object.assign(EmailController, EmailController),
    Access: Object.assign(Access, Access),
    ServerController: Object.assign(ServerController, ServerController),
    InstallController: Object.assign(InstallController, InstallController),
    PluginController: Object.assign(PluginController, PluginController),
    Content: Object.assign(Content, Content),
    DatabaseController: Object.assign(DatabaseController, DatabaseController),
    DataChangeController: Object.assign(DataChangeController, DataChangeController),
    Newsletter: Object.assign(Newsletter, Newsletter),
    NotificationController: Object.assign(NotificationController, NotificationController),
    MediaFileController: Object.assign(MediaFileController, MediaFileController),
    Settings: Object.assign(Settings, Settings),
    AppInformationController: Object.assign(AppInformationController, AppInformationController),
    SessionController: Object.assign(SessionController, SessionController),
    News: Object.assign(News, News),
    SmsController: Object.assign(SmsController, SmsController),
    DynamicPageController: Object.assign(DynamicPageController, DynamicPageController),
}

export default Controllers