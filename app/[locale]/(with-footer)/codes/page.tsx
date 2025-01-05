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
    introduction: {
      title: t('introduction.title'),
      description: t('introduction.description'),
    },
    howToRedeem: {
      title: t('howToRedeem.title'),
      steps: t.raw('howToRedeem.steps'),
    },
    activeCodes: {
      title: t('activeCodes.title'),
      description: t('activeCodes.description'),
      note: t('activeCodes.note'),
      list: t.raw('activeCodes.list'),
      expired: {
        title: t('activeCodes.expired.title'),
        description: t('activeCodes.expired.description'),
        list: t.raw('activeCodes.expired.list'),
      },
    },
    tips: {
      title: t('tips.title'),
      list: t.raw('tips.list'),
    },
    commonIssues: {
      title: t('commonIssues.title'),
      list: t.raw('commonIssues.list'),
    },
    updates: {
      title: t('updates.title'),
      description: t('updates.description'),
    },
  };

  return <CodesContent translations={translations} />;
} 
