import Head from 'next/head'
import Feed from 'rss-to-json'
import tinytime from 'tinytime'
import Link from 'next/link'
import Layout from '../components/Layout'

export async function getStaticProps() {
  const feed = await Feed.load('https://feeds.transistor.fm/6-minute-software-development')

  return {
    props: {
      episodes: feed.items
        .slice(0, 10)
        .filter(item => item.itunes_episode_type === 'full')
        .map(({ id, title, description, created, itunes_episode }) => ({
          id,
          number: itunes_episode,
          title,
          description,
          created,
        })),
    },
    revalidate: 1,
  }
}

const dateTemplate = tinytime('{MM} {DD}, {YYYY}')
const dateTimeTemplate = tinytime('{YYYY}-{Mo}-{DD}')

export default function Home({ episodes }) {
  const meta = {
    title: '6 Minute Software Development',
  }

  return (
    <Layout meta={meta}>
      <div className="mt-6 grid gap-12 border-t-2 border-gray-100 py-8">
        {episodes.map((episode) => {
          const date = new Date(episode.created)
          return (
            <div key={episode.id} className="relative">
              <p className="text-sm leading-5 text-gray-500">
                <time dateTime={dateTimeTemplate.render(date)}>{dateTemplate.render(date)}</time>
              </p>
              <div>
                <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {episode.title}
                </h2>
                <p className="mt-3 text-base leading-6 text-gray-500">{episode.description}</p>
              </div>

              <div className="mt-3">
                <Link href={`/${episode.number}`}>
                  <a className="text-base leading-6 font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus:underline">
                    <span className="sr-only">{episode.title}</span>
                    Show notes
                    <span className="absolute inset-0"></span>
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className="grid gap-16 border-t-2 border-gray-100 py-10">
        <Link href="/all">
          <a className="text-base leading-6 font-semibold text-teal-600 hover:text-teal-700">
            All episodes &rarr;
          </a>
        </Link>
      </div>
    </Layout>
  )
}
