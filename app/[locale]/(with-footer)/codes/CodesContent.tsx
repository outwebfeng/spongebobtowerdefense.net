'use client';

import YouTubeVideo from '@/components/video/YouTubeVideo';

interface TranslationsType {
  title: string;
  subtitle: string;
  videoSection: {
    title: string;
    description: string;
  };
  introduction: {
    title: string;
    description: string;
  };
  howToRedeem: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  activeCodes: {
    title: string;
    description: string;
    note: string;
    list: Array<{
      code: string;
      reward: string;
      description: string;
    }>;
    expired: {
      title: string;
      description: string;
      list: Array<{
        code: string;
        reward: string;
      }>;
    };
  };
  tips: {
    title: string;
    list: Array<{
      title: string;
      description: string;
    }>;
  };
  commonIssues: {
    title: string;
    list: Array<{
      problem: string;
      solution: string;
    }>;
  };
  updates: {
    title: string;
    description: string;
  };
}

interface CodesContentProps {
  translations: TranslationsType;
}

export default function CodesContent({ translations }: CodesContentProps) {
  return (
    <article className='mx-auto max-w-4xl px-4 py-16'>
      <h1 className='mb-4 text-4xl font-bold text-gray-900'>{translations.title}</h1>
      <p className='mb-8 text-lg text-gray-600'>{translations.subtitle}</p>

      {/* Video Section */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.videoSection.title}</h2>
        <p className='mb-4 text-gray-600'>{translations.videoSection.description}</p>
        <div className='aspect-video w-full overflow-hidden rounded-lg shadow-lg'>
          <YouTubeVideo videoId='QD97mMgfLoI' />
        </div>
      </section>

      {/* Introduction */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.introduction.title}</h2>
        <p className='text-gray-600'>{translations.introduction.description}</p>
      </section>

      {/* How to Redeem */}
      <section className='mb-16'>
        <h2 className='mb-6 text-2xl font-bold text-gray-900'>{translations.howToRedeem.title}</h2>
        <div className='grid gap-6 md:grid-cols-2'>
          {translations.howToRedeem.steps.map((step: any) => (
            <div key={`step-${step.title}`} className='rounded-lg bg-sky-50 p-6'>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>{step.title}</h3>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Codes */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.activeCodes.title}</h2>
        <p className='mb-4 text-gray-600'>{translations.activeCodes.description}</p>
        <p className='mb-6 text-sm text-red-600'>{translations.activeCodes.note}</p>
        <div className='overflow-hidden rounded-lg border border-gray-200'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Code</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Reward</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Description</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {translations.activeCodes.list.map((code: any) => (
                <tr key={`active-${code.code}`}>
                  <td className='whitespace-nowrap px-6 py-4 font-mono text-sm font-bold text-blue-600'>{code.code}</td>
                  <td className='px-6 py-4 text-sm text-gray-900'>{code.reward}</td>
                  <td className='px-6 py-4 text-sm text-gray-500'>{code.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Expired Codes */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.activeCodes.expired.title}</h2>
        <p className='mb-6 text-gray-600'>{translations.activeCodes.expired.description}</p>
        <div className='overflow-hidden rounded-lg border border-gray-200 bg-gray-50'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Code</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Previous Reward</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {translations.activeCodes.expired.list.map((code: any) => (
                <tr key={`expired-${code.code}`} className='bg-gray-50'>
                  <td className='whitespace-nowrap px-6 py-4 font-mono text-sm text-gray-500'>{code.code}</td>
                  <td className='px-6 py-4 text-sm text-gray-500'>{code.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips */}
      <section className='mb-16'>
        <h2 className='mb-6 text-2xl font-bold text-gray-900'>{translations.tips.title}</h2>
        <div className='grid gap-6 md:grid-cols-2'>
          {translations.tips.list.map((tip: any) => (
            <div key={`tip-${tip.title}`} className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>{tip.title}</h3>
              <p className='text-gray-600'>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Issues */}
      <section className='mb-16'>
        <h2 className='mb-6 text-2xl font-bold text-gray-900'>{translations.commonIssues.title}</h2>
        <div className='space-y-6'>
          {translations.commonIssues.list.map((issue: any) => (
            <div key={`issue-${issue.problem}`} className='rounded-lg bg-gray-50 p-6'>
              <h3 className='mb-2 text-lg font-bold text-red-600'>{issue.problem}</h3>
              <p className='text-gray-600'>{issue.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Updates */}
      <section className='rounded-lg bg-sky-50 p-8'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.updates.title}</h2>
        <p className='text-gray-600'>{translations.updates.description}</p>
      </section>
    </article>
  );
} 
