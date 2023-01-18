import Image from 'next/image'
import Head from 'next/head'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import logoDinoscape from '@/images/logos/dinoscape.png'
import logoVicuna from '@/images/logos/vicuna.png'
import logoGommehd from '@/images/logos/gommehd.webp'
import logoJoystack from '@/images/logos/joystack.svg'
import logoTraefik from '@/images/logos/traefik.svg'
import logoGithub from '@/images/logos/github-campus.png'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const projects = [
  {
    key: 'joystack',
    link: {href: 'https://joystack.com', label: 'joystack.com'},
    logo: logoJoystack,
  },
  {
    key: 'dinoscape',
    link: {href: 'https://dinoscape.de/', label: 'dinoscape.de'},
    logo: logoDinoscape,
  },
  {
    key: 'gommehdnet',
    link: {href: 'https://gommehd.net', label: 'gommehd.net'},
    logo: logoGommehd,
  },
  {
    key: 'vicuna',
    link: {href: 'https://vicuna.io', label: 'vicuna.io'},
    logo: logoVicuna,
  },
  {
    key: 'treafik-ambassador',
    link: {href: 'https://traefik.io/traefik-ambassador-program', label: 'traefik.io'},
    logo: logoTraefik,
  },
  {
    key: 'github-campus-expert',
    link: {href: 'https://education.github.com/experts', label: 'education.github.com'},
    logo: logoGithub,
  }
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const {t} = useTranslation('projects')
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta
          name="description"
          content={t('meta.description')}
        />
      </Head>
      <SimpleLayout
        title={t('header.title')}
        intro={t('header.description')}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.key}>
              <div
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{t(`projects.${project.key}.title`)}</Card.Link>
              </h2>
              <Card.Description>{t(`projects.${project.key}.description`)}</Card.Description>
              <p
                className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none"/>
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'projects'])
    },
  }
}
