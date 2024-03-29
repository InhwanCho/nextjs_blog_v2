'use client'

import Script from 'next/script'
import React from 'react'

export default function GoogleAnalytics() {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-VTMQWG6ZYD`} />
      <Script id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VTMQWG6ZYD');
        `}
      </Script>
    </>
  )
}
