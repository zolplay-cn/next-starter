import Head from 'next/head'
import type { FC } from 'react'

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
