import PageController from './PageController'
import MenuController from './MenuController'
import MenuItemController from './MenuItemController'
import MenuSettingController from './MenuSettingController'
import MenuLocationController from './MenuLocationController'
import MenuItemGroupController from './MenuItemGroupController'
import MenuItemTypeController from './MenuItemTypeController'
import SectionController from './SectionController'
import PermalinkController from './PermalinkController'
import ContentModelController from './ContentModelController'
import ContentModelItemController from './ContentModelItemController'
import VideoItemController from './VideoItemController'
import VideoCategoryController from './VideoCategoryController'

const Content = {
    PageController: Object.assign(PageController, PageController),
    MenuController: Object.assign(MenuController, MenuController),
    MenuItemController: Object.assign(MenuItemController, MenuItemController),
    MenuSettingController: Object.assign(MenuSettingController, MenuSettingController),
    MenuLocationController: Object.assign(MenuLocationController, MenuLocationController),
    MenuItemGroupController: Object.assign(MenuItemGroupController, MenuItemGroupController),
    MenuItemTypeController: Object.assign(MenuItemTypeController, MenuItemTypeController),
    SectionController: Object.assign(SectionController, SectionController),
    PermalinkController: Object.assign(PermalinkController, PermalinkController),
    ContentModelController: Object.assign(ContentModelController, ContentModelController),
    ContentModelItemController: Object.assign(ContentModelItemController, ContentModelItemController),
    VideoItemController: Object.assign(VideoItemController, VideoItemController),
    VideoCategoryController: Object.assign(VideoCategoryController, VideoCategoryController),
}

export default Content