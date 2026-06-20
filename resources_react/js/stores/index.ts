import { useNewsStore } from './news'

export function rehydrateStores() {
  useNewsStore.persist.rehydrate()
}
