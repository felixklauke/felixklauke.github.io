import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

function SocialLink({className, href, children, icon: Icon}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500"/>
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  const {t, i18n} = useTranslation('about')

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta
          name="description"
          content={t('meta.description')}
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {t('content.title')}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {i18n.language === 'de' && <>
                <p>
                  Ich bin Felix Klauke, ein erfahrener Softwareentwickler mit über 10 Jahren Erfahrung in den Bereichen
                  Networking, Infrastruktur und Backend-Applikationen. In dieser Zeit habe ich mich auf
                  Enterprise-Technologien und DevOps-Themen spezialisiert und konnte mein tiefes Verständnis für diese
                  Bereiche vertiefen. Mein besonderes Interesse gilt der Rechenzentrums-Infrastruktur und dem
                  Server-Hosting. Ich habe umfangreiche Erfahrungen in der Installation, Konfiguration und Wartung von
                  Proxmox, Kubernetes und Cloud-Umgebungen gesammelt.
                </p>
                <p>
                  Als Geschäftsführer von Klauke Enterprises GmbH & Co. KG habe ich die Möglichkeit, mein umfangreiches
                  Fachwissen in die Praxis umzusetzen und erfolgreich Projekte umzusetzen. Ich bin ständig bestrebt,
                  mein
                  Wissen und meine Fähigkeiten zu erweitern, um meinen Kunden die bestmögliche Lösung anbieten zu
                  können.
                  Durch meine langjährige Erfahrung in der Softwareentwicklung und mein tiefes Verständnis für die
                  Anforderungen von Unternehmen bin ich in der Lage, komplexe Projekte erfolgreich umzusetzen und meinen
                  Kunden einen echten Mehrwert zu bieten.
                </p>
                <p>
                  Ich bin stolz darauf, Teil einer starken und erfahrenen Mannschaft zu sein, die sich durch ihre
                  Leidenschaft für Technologie und ihr Streben nach Exzellenz auszeichnet. Ich bin überzeugt, dass die
                  Zukunft der Technologie in der Zusammenarbeit und dem Austausch von Ideen liegt und ich freue mich
                  darauf,
                  weiterhin an spannenden Projekten zu arbeiten und meinen Beitrag zur Entwicklung der Technologie zu
                  leisten.
                </p>
              </>}
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/felixklauke" icon={TwitterIcon}>
                {t('social.twitter')}
              </SocialLink>
              <SocialLink href="https://instagram.com/felixklauke" icon={InstagramIcon} className="mt-4">
                {t('social.instagram')}
              </SocialLink>
              <SocialLink href="https://github.com/felixklauke" icon={GitHubIcon} className="mt-4">
                {t('social.github')}
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/felix-klauke" icon={LinkedInIcon} className="mt-4">
                {t('social.linkedin')}
              </SocialLink>
              <SocialLink
                href="mailto:felix@felix-klauke.de"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                felix@felix-klauke.de
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}


export async function getStaticProps({locale}) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'about'])
    },
  }
}
