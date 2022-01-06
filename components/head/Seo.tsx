import type { FC } from 'react'
import Head from 'next/head'

const Title: FC = ({ children }) => {
  const appName = 'App'

  return (
    <Head>
      <title>{children ? `${children} - ${appName}` : appName}</title>
    </Head>
  )
}

export const Seo = Object.assign(
  {},
  {
    Title,
  }
)
