import { Head } from '@inertiajs/react'
import { useMemo } from 'react'

interface AppHeadProps {
  title?: string
  description?: string
  favicon?: string
  url?: string
  image?: string
  children?: React.ReactNode
}

const AppHead: React.FC<AppHeadProps> = ({
  title,
  description: propDescription,
  favicon: propFavicon,
  url: propUrl,
  image: propImage,
  children,
}: AppHeadProps) => {
  const { tr, resolveUrl } = useHelper()
  const { getAppInformationValue, logo, icon, page } = useContent()

  const description = useMemo(() => propDescription || tr(getAppInformationValue('description')), [propDescription, tr, getAppInformationValue])

  const url = useMemo(() => propUrl || resolveUrl(page.url), [propUrl, resolveUrl, page.url])

  const image = useMemo(() => propImage || logo, [propImage, logo])

  const favicon = useMemo(() => propFavicon || icon, [propFavicon, icon])

  return (
    <Head title={title}>
      <meta key="description" name="description" content={description} />
      <link key="icon" rel="icon" type="image/png" href={favicon} />
      <link key="canonical" rel="canonical" href={url} />

      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:type" property="og:type" content="website" />

      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={image} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />

      {children}
    </Head>
  )
}

export default AppHead
