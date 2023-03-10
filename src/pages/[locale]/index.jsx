import Image from 'next/image'
import Head from 'next/head'
import Link from '@/components/TranslatedLink'
import clsx from 'clsx'

import {Card} from '@/components/Card'
import {Container} from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.png'
import logoKlaukeEnterprises from '@/images/logos/klauke-enterprises.jpeg'
import logoAm from '@/images/logos/am.jpeg'
import logoItemis from '@/images/logos/itemis.jpeg'
import logoHst from '@/images/logos/hst.jpeg'
import {generateRssFeed} from '@/lib/generateRssFeed'
import {getAllArticles} from '@/lib/getAllArticles'
import {formatDate} from '@/lib/formatDate'
import {useTranslation} from "next-i18next";
import {getI18nProps, getStaticPaths} from "@/lib/getStatic";

function MailIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" width="24" height="24"
         fill="currentColor"
         {...props}
    >
      <path fill="none" d="M0 0h24v24H0z"/>
      <path
        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({article}) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({icon: Icon, ...props}) {
  return (
    <Link className="group -m-1 p-1" {...props} skipLocaleHandling>
      <Icon
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
    </Link>
  )
}

function Resume() {
  const resume = [
    {
      company: 'Klauke Enterprises GmbH & Co. KG',
      logo: logoKlaukeEnterprises,
      jobs: [
        {
          title: 'Gesch??ftsf??hrer',
          start: '2022',
          end: {
            label: 'Present',
            dateTime: new Date().getFullYear(),
          },
        },
        {
          title: 'Unternehmensinhaber',
          start: '2018',
          end: '2022'
        }
      ]
    },
    {
      company: 'AM-GmbH',
      logo: logoAm,
      jobs: [
        {
          title: 'System Engineer (Internship)',
          start: '2021',
          end: {
            label: '2 mo',
            dateTime: '2021'
          }
        },
      ]
    },
    {
      company: 'itemis AG',
      logo: logoItemis,
      jobs: [
        {
          title: 'DevOps engineer',
          start: '2020',
          end: '2021',
        },
        {

          title: 'Software developer',
          start: '2017',
          end: '2020',
        }
      ]
    },
    {
      company: 'HST Systemtechnik GmbH & Co. KG',
      logo: logoHst,
      jobs: [
        {
          title: 'Internship',
          start: '2015',
          end: {
            label: '1 mo',
            dateTime: '2015'
          }
        }
      ]
    },
    {
      company: 'AM-GmbH',
      logo: logoAm,
      jobs: [
        {
          title: 'Internship',
          start: '2014',
          end: {
            label: '1 mo',
            dateTime: '2014'
          }
        }
      ]
    },
  ]

  const {t} = useTranslation('home')

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none"/>
        <span className="ml-3">{t('work.title')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div
              className="relative mt-1 flex h-10 w-10 flex-none bg-white items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-orange-500/5 dark:border dark:border-orange-400 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized/>
            </div>
            <div className="flex flex-auto flex-wrap gap-x-2 flex-col">
              <strong className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</strong>
              {role.jobs.map((job, jobIndex) => (
                <div key={jobIndex} className="flex justify-between">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {job.title}
                  </span>
                  <span
                    className="text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${job.start.label ?? job.start} until ${
                      job.end.label ?? job.end
                    }`}
                  >
                    <time dateTime={job.start.dateTime ?? job.start}>
                      {job.start.label ?? job.start}
                    </time>
                    {' '}
                    <span aria-hidden="true">???</span>{' '}
                    <time dateTime={job.end.dateTime ?? job.end}>
                      {job.end.label ?? job.end}
                    </time>
                  </span>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({articles}) {
  const {t} = useTranslation('home')
  return (
    <>
      <Head>
        <title>
          {'Felix Klauke - ' + t('header.title')}
        </title>
        <meta
          name="description"
          content={t('header.description')}
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t('header.title')}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {t('header.description')}
          </p>
          <div className="mt-6 flex gap-6 items-center flex-wrap">
            <SocialLink
              href="https://twitter.com/felixklauke"
              aria-label={t('social.twitter')}
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/felixklauke"
              aria-label={t('social.instagram')}
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/felixklauke"
              aria-label={t('social.github')}
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/felix-klauke"
              aria-label={t('social.linkedin')}
              icon={LinkedInIcon}
            />
            <SocialLink
              href="mailto://felix@felix-klauke.de"
              aria-label={t('social.email')}
              icon={MailIcon}
            />
            <Link
              href="https://klauke-enterprises.com/contact"
              className="px-4 font-medium text-orange-500 flex items-center gap-2 p-1 border border-orange-500/40 rounded-md hover:bg-orange-50 dark:hover:bg-orange-900/20 border-dashed whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="w-4 h-4 fill-current"
                   viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path
                  d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/>
              </svg>
              {t('social.talk')}
            </Link>
          </div>
        </div>
      </Container>
      <Photos/>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article}/>
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume/>
          </div>
        </div>
      </Container>
    </>
  )
}
export const getStaticProps = async (ctx) => {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }
  return {
    props: {
      ...(await getI18nProps(ctx, ['common', 'home'])),
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({component, ...meta}) => meta),
    },
  }
}

export {getStaticPaths}
