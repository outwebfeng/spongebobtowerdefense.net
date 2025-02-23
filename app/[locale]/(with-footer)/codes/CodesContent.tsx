'use client';

import YouTubeVideo from '@/components/video/YouTubeVideo';

interface TranslationsType {
  title: string;
  subtitle: string;
  lastUpdate: string;
  videoSection: {
    title: string;
    description: string;
  };
  whatAreCodesTitle: string;
  whatAreCodes: string;
  featuredGames: {
    title: string;
    games: Array<{
      name: string;
      description: string;
    }>;
  };
  activeCodes: {
    title: string;
    description: string;
    list: Array<{
      code: string;
      reward: string;
    }>;
  };
  expiredCodes: {
    title: string;
    description: string;
    list: Array<{
      code: string;
      reward: string;
    }>;
  };
  howToRedeem: {
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  tips: {
    title: string;
    list: Array<{
      title: string;
      description: string;
    }>;
  };
  rewards: {
    title: string;
    description: string;
    list: Array<{
      title: string;
      description: string;
    }>;
  };
  findingCodes: {
    title: string;
    description: string;
    list: string[];
  };
  faq: {
    title: string;
    list: Array<{
      question: string;
      answer: string;
    }>;
  };
  conclusion: {
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
      <p className='mb-8 text-sm italic text-gray-500'>{translations.lastUpdate}</p>

      {/* Video Section */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.videoSection.title}</h2>
        <p className='mb-4 text-gray-600'>{translations.videoSection.description}</p>
        <div className='aspect-video w-full overflow-hidden rounded-lg shadow-lg'>
          <YouTubeVideo videoId='0NorgWUChbk' />
        </div>
      </section>

      {/* What Are Codes Section */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.whatAreCodesTitle}</h2>
        <p className='text-gray-600'>{translations.whatAreCodes}</p>
      </section>

      {/* Friend Links */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.featuredGames.title}</h2>
        <div className='overflow-hidden rounded-lg border border-gray-200'>
          <div className='divide-y divide-gray-200 bg-white'>
            <a
              href='https://www.volleyballlegends.org/'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-4 bg-white p-4 transition-colors hover:bg-gray-50'
            >
              <img
                src='/images/haikyuulegends.jpg'
                alt={translations.featuredGames.games[0].name}
                className='h-12 w-12 rounded-lg object-cover'
              />
              <div className='flex flex-col'>
                <span className='text-sm font-medium text-gray-900 group-hover:text-blue-600'>
                  {translations.featuredGames.games[0].name}
                </span>
                <span className='text-xs text-gray-500'>{translations.featuredGames.games[0].description}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Active Codes */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.activeCodes.title}</h2>
        <p className='mb-6 text-gray-600'>{translations.activeCodes.description}</p>
        <div className='overflow-hidden rounded-lg border border-gray-200'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Code</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Reward
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {translations.activeCodes.list.map((code) => (
                <tr key={`active-${code.code}`}>
                  <td className='whitespace-nowrap px-6 py-4 font-mono text-sm font-bold text-blue-600'>{code.code}</td>
                  <td className='px-6 py-4 text-sm text-gray-900'>{code.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Expired Codes */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.expiredCodes.title}</h2>
        <p className='mb-6 text-gray-600'>{translations.expiredCodes.description}</p>
        <div className='overflow-hidden rounded-lg border border-gray-200 bg-gray-50'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>Code</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Previous Reward
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {translations.expiredCodes.list.map((code) => (
                <tr key={`expired-${code.code}`} className='bg-gray-50'>
                  <td className='whitespace-nowrap px-6 py-4 font-mono text-sm text-gray-500'>{code.code}</td>
                  <td className='px-6 py-4 text-sm text-gray-500'>{code.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Redeem */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.howToRedeem.title}</h2>
        <p className='mb-6 text-gray-600'>{translations.howToRedeem.description}</p>
        <div className='grid gap-6 md:grid-cols-2'>
          {translations.howToRedeem.steps.map((step) => (
            <div key={`step-${step.title}`} className='rounded-lg bg-sky-50 p-6'>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>{step.title}</h3>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className='mb-16'>
        <h2 className='mb-6 text-2xl font-bold text-gray-900'>{translations.tips.title}</h2>
        <div className='grid gap-6 md:grid-cols-2'>
          {translations.tips.list.map((tip) => (
            <div key={`tip-${tip.title}`} className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>{tip.title}</h3>
              <p className='text-gray-600'>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.rewards.title}</h2>
        <p className='mb-6 text-gray-600'>{translations.rewards.description}</p>
        <div className='grid gap-6 md:grid-cols-2'>
          {translations.rewards.list.map((reward) => (
            <div key={`reward-${reward.title}`} className='rounded-lg bg-white p-6 shadow'>
              <h3 className='mb-2 text-xl font-bold text-gray-900'>{reward.title}</h3>
              <p className='text-gray-600'>{reward.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Finding Codes */}
      <section className='mb-16'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.findingCodes.title}</h2>
        <p className='mb-6 text-gray-600'>{translations.findingCodes.description}</p>
        <ul className='list-inside list-disc space-y-4'>
          {translations.findingCodes.list.map((item) => (
            <li
              key={`finding-code-${item.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
              className='text-gray-600'
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className='mb-16'>
        <h2 className='mb-6 text-2xl font-bold text-gray-900'>{translations.faq.title}</h2>
        <div className='space-y-6'>
          {translations.faq.list.map((faq) => (
            <div key={`faq-${faq.question}`} className='rounded-lg bg-gray-50 p-6'>
              <h3 className='mb-2 text-lg font-bold text-gray-900'>{faq.question}</h3>
              <p className='text-gray-600'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className='rounded-lg bg-sky-50 p-8'>
        <h2 className='mb-4 text-2xl font-bold text-gray-900'>{translations.conclusion.title}</h2>
        <p className='text-gray-600'>{translations.conclusion.description}</p>
      </section>
    </article>
  );
}
