import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations('Metadata.about');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://spongebobtowerdefense.net';
  
  const canonicalPath = locale === 'en' ? '/about' : `/${locale}/about`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      siteName: 'Jujutsu Infinite',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('About');

  return (
    <article className='max-w-4xl mx-auto px-4 py-16 prose prose-lg'>
      <h1 className='text-4xl font-bold mb-8'>{t('title')}</h1>
      <p className='lead mb-8'>{t('subtitle')}</p>

      <section>
        <p>{t('content.intro')}</p>
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-4'>{t('content.whatIsTitle')}</h2>
        <p>{t('content.whatIs')}</p>
        <p>{t('content.whatIsExtra')}</p>
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-6'>{t('content.featuresTitle')}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {Object.entries(t.raw('content.features')).map(([key, feature]: [string, any]) => (
            <div key={`feature-${key}`} className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-6'>{t('content.howToPlayTitle')}</h2>
        {t.raw('content.howToPlay').map((step: any) => (
          <div key={`step-${step.title}`} className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-6'>{t('content.tipsTitle')}</h2>
        {t.raw('content.tips').map((tip: any) => (
          <div key={`tip-${tip.title}`} className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-4'>{t('content.communityTitle')}</h2>
        <p>{t('content.community')}</p>
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-6'>{t('content.faqTitle')}</h2>
        {t.raw('content.faq').map((item: any) => (
          <div key={`faq-${item.question}`} className='mb-4'>
            <h3 className='text-xl font-bold mb-2'>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <section className='mt-12'>
        <h2 className='text-3xl font-bold mb-4'>{t('content.conclusionTitle')}</h2>
        <p>{t('content.conclusion')}</p>
      </section>
    </article>
  );
} 
