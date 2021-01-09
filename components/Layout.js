import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children, meta: pageMeta }) {
  const router = useRouter()
  const meta = {
    title: '6 Minute Software Development',
    description:
      'A podcast for developers or tech leads looking for quick tactics to improve day-to-day performance. Hosted by Josh Hornby.',
    cardImage:
      'https://images.transistor.fm/file/transistor/images/social_images/site/6168/6_MINUITE_SOFTWARE_DEVELOPER_SOCIAL.jpg',
    feed: 'https://feeds.transistor.fm/6-minute-software-development',
    keywords: ['technology', 'software', 'web', 'development', 'product', 'startup'],
    ...pageMeta,
  }

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <Head>
        <title>{meta.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta content={meta.description} name="description" />
        <meta content={meta.keywords.join(', ')} name="keywords" />
        <meta property="og:url" content={`https://6minutesoftwaredevelopment.com${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="6 Minute Software Development" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joshua_hornby" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="6 Minute Software Development"
          href={meta.feed}
        />
      </Head>
      <div className="relative max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-8 sm:items-start sm:space-y-0 sm:flex-row sm:space-x-8">
          <Link href="/">
            <a className="flex-shrink-0">
              <span className="sr-only">Home</span>
              <img
                className="h-28 w-28 sm:h-36 sm:w-36 rounded-lg object-cover"
                src="/podcast-cover.jpg"
                alt=""
              />
            </a>
          </Link>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              <Link href="/">
                <a>6 Minute Software Development</a>
              </Link>
            </h1>
            <div className="mt-2">
              <p className="text-xl leading-7 text-gray-500">
                A podcast for developers or tech leads looking for quick tactics to improve day-to-day performance. Hosted by{' '}
                <a className="text-purple-700" href="https://twitter.com/joshua_hornby">Josh Hornby</a>.
              </p>
            </div>
            <div className="mt-4 flex justify-center space-x-2 text-gray-400 sm:justify-start">
              {/*<a*/}
              {/*  className="text-gray-600 hover:text-gray-900"*/}
              {/*  href="https://podcasts.apple.com/us/podcast/feed/id931714873"*/}
              {/*>*/}
              {/*  Apple Podcasts*/}
              {/*</a>*/}
              <span>{'•'}</span>
              <a
                  className="text-gray-600 hover:text-gray-900"
                  href="https://open.spotify.com/show/6wUU1KnKJb0MkAcrEEjsJt?si=7LfqCYvKSAqSXR3k8bIlZg"
              >
                Spotify
              </a>
              <span>{'•'}</span>
              {/*<a*/}
              {/*  className="text-gray-600 hover:text-gray-900"*/}
              {/*  href="https://overcast.fm/itunes931714873"*/}
              {/*>*/}
              {/*  Overcast*/}
              {/*</a>*/}
              <span>{'•'}</span>
              <a
                className="text-gray-600 hover:text-gray-900"
                href="https://feeds.transistor.fm/6-minute-software-development"
              >
                RSS
              </a>
            </div>
          </div>
        </div>
        <div className="mt-7">{children}</div>
      </div>
    </div>
  )
}
