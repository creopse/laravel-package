import { differenceFromNow } from '@/utils/chronos'

import { CheckFilled, FolderOpenFilled } from '@vicons/material'

import { NButton, NIcon } from 'naive-ui'

import { NotificationModel } from '@/models/notification'

/**
 * Provides functionalities related to user notifications.
 *
 * This composable handles notification retrieval, marking as read, displaying,
 * and removal of notifications. It also provides computed properties for
 * read and unread notifications.
 *
 * @returns {Object} An object containing:
 *  - userReadNotifications: Computed property for read notifications.
 *  - userUnreadNotifications: Computed property for unread notifications.
 *  - isRead: Function to check if a notification is read.
 *  - isUnread: Function to check if a notification is unread.
 *  - markAsRead: Function to mark a notification as read.
 *  - markAllAsRead: Function to mark all notifications as read.
 *  - removeNotification: Function to remove a notification.
 *  - buildMessage: Function to build the notification message.
 */
export const useNotification = () => {
  const lang = getActiveLanguage()

  const { request } = useApi()
  const { page } = useContent()

  const authStore = useAuthStore()
  const notificationStore = useNotificationStore()

  const notificationDisplayer = useNaiveNotification()

  const isRead = (notification: NotificationModel) => !!notification.readAt

  const isUnread = (notification: NotificationModel) => !notification.readAt

  const userReadNotifications = computed(() =>
    notificationStore.notifications.filter((notification) =>
      isRead(notification)
    )
  )

  const userUnreadNotifications = computed(() =>
    notificationStore.notifications.filter((notification) =>
      isUnread(notification)
    )
  )

  /**
   * Mark a notification as read.
   *
   * @param {NotificationModel} notification The notification to mark as read.
   * @param {boolean} [refresh=true] Whether to refresh the notifications after marking it as read.
   * @returns {Promise<void>}
   */
  async function markAsRead(
    notification: NotificationModel,
    refresh = true
  ): Promise<void> {
    await request({
      url: `/notifications/mark/${notification.id}`,
      method: 'put',
    })

    if (refresh) notificationStore.getNotifications()
  }

  /**
   * Marks all user notifications as read.
   *
   * Sends a PUT request to the server to mark all user notifications as read.
   * After the notifications are successfully marked as read, fetches the updated list of notifications.
   *
   * @returns {Promise<void>}
   */
  async function markAllAsRead(): Promise<void> {
    await request({
      url: `/notifications/mark-all`,
      method: 'put',
    })

    notificationStore.getNotifications()
  }

  /**
   * Removes a notification.
   *
   * Sends a DELETE request to the server to remove the specified notification.
   * After the notification is successfully removed, fetches the updated list of notifications.
   *
   * @param {NotificationModel} notification - The notification to be removed.
   * @returns {Promise<void>}
   */
  async function removeNotification(
    notification: NotificationModel
  ): Promise<void> {
    await request({
      url: `/notifications/${notification.id}`,
      method: 'delete',
    })

    notificationStore.getNotifications()
  }

  /**
   * Builds a notification message.
   *
   * @param {NotificationModel} notification The notification model.
   * @returns {Promise<{ title: string; content: string }>} A promise that resolves
   *   to an object containing the title and the content of the message.
   */
  const buildMessage = async (
    notification: NotificationModel
  ): Promise<{ title: string; content: string }> => {
    let title = '',
      content = ''

    switch (notification.type) {
      default:
        title = notification.data.title
        content = notification.data.content
        break
    }

    return { title, content }
  }

  /**
   * Displays a notification to the user.
   *
   * @param {NotificationModel} notification The notification to display.
   * @returns {Promise<void>}
   */
  const displayNotification = async (
    notification: NotificationModel
  ): Promise<void> => {
    if (page.url !== '/account/notifications') {
      const { title, content } = await buildMessage(notification)

      const n = notificationDisplayer.create({
        title,
        content,
        meta: differenceFromNow(notification?.createdAt || '', {
          locale: lang,
        }),
        action: () => {
          return h('div', { class: 'flex align-center justify-between' }, [
            notification.data.target
              ? h(
                  NButton,
                  {
                    text: true,
                    renderIcon: () =>
                      h(NIcon, null, {
                        default: () => h(FolderOpenFilled),
                      }),
                    onClick: () => {
                      markAsRead(notification)
                      router.get(notification.data.target)
                      n.destroy()
                    },
                    style: 'margin-right: 10px',
                  },
                  {
                    default: () => trans('Open'),
                  }
                )
              : h('span'),
            h(
              NButton,
              {
                text: true,
                renderIcon: () =>
                  h(NIcon, null, {
                    default: () => h(CheckFilled),
                  }),
                onClick: () => {
                  markAsRead(notification)
                  n.destroy()
                },
              },
              {
                default: () => trans('Read'),
              }
            ),
          ])
        },
        onClose: () => {
          markAsRead(notification)
        },
      })
    }
  }

  watch(
    () => userUnreadNotifications.value,
    async (notifications) => {
      if (
        notifications.length &&
        notifications[0].id != notificationStore.firstDisplayedNotificationId
      ) {
        notificationStore.firstDisplayedNotificationId =
          notifications[0].id || ''
        for (let i = 0; i < 5; i++) {
          const notification = notifications[i]
          if (
            notification &&
            authStore.userData?.preferences?.inAppNotifEnabled
          ) {
            displayNotification(notification)

            await new Promise((resolve) => setTimeout(resolve, 5000))
          }
        }
      }
    },
    {
      immediate: true,
      deep: true,
    }
  )

  return {
    userReadNotifications,
    userUnreadNotifications,
    isRead,
    isUnread,
    markAsRead,
    markAllAsRead,
    removeNotification,
    buildMessage,
  }
}
