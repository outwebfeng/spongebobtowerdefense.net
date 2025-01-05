import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import CodesContent from './CodesContent';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations('Metadata.codes');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://spongebobtowerdefense.net';
  
  const canonicalPath = locale === 'en' ? '/codes' : `/${locale}/codes`;
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

export default async function CodesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = await getTranslations('Codes');

  // 将翻译内容转换为普通对象
  const translations = {
    title: t('title'),
    subtitle: t('subtitle'),
    videoSection: {
      title: t('videoSection.title'),
      description: t('videoSection.description'),
    },
    whatAreCodesTitle: t('whatAreCodesTitle'),
    whatAreCodes: t('whatAreCodes'),
    activeCodes: {
      title: t('activeCodes.title'),
      description: t('activeCodes.description'),
      list: t.raw('activeCodes.list'),
    },
    expiredCodes: {
      title: t('expiredCodes.title'),
      description: t('expiredCodes.description'),
      list: t.raw('expiredCodes.list'),
    },
    howToRedeem: {
      title: t('howToRedeem.title'),
      description: t('howToRedeem.description'),
      steps: t.raw('howToRedeem.steps'),
    },
    tips: {
      title: t('tips.title'),
      list: t.raw('tips.list'),
    },
    rewards: {
      title: t('rewards.title'),
      description: t('rewards.description'),
      list: t.raw('rewards.list'),
    },
    findingCodes: {
      title: t('findingCodes.title'),
      description: t('findingCodes.description'),
      list: t.raw('findingCodes.list'),
    },
    faq: {
      title: t('faq.title'),
      list: t.raw('faq.list'),
    },
    conclusion: {
      title: t('conclusion.title'),
      description: t('conclusion.description'),
    },
  };

  return <CodesContent translations={translations} />;
} 
