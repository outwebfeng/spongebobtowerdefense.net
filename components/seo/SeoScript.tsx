import Script from 'next/script';

import { DOMAIN_URL, GOOGLE_TRACKING_ID } from '@/lib/env';

export default function SeoScript() {
  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`} />
      <Script defer data-domain={DOMAIN_URL} src='https://www.trafficstatistics.top/js/script.js' />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
