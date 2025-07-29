import type { Page } from '@inertiajs/core'

declare module '@inertiajs/react' {
  export function usePage<T>(): Page<T>
}
