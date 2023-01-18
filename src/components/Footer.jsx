import Link from 'next/link'

import {Container} from '@/components/Container'
import {useTranslation} from "next-i18next";
import {useMemo} from "react";

function NavLink({href, children}) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const {t} = useTranslation('common')
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">{t('footer.about')}</NavLink>
                <NavLink href="/projects">{t('footer.projects')}</NavLink>
                <NavLink href="/articles">{t('footer.articles')}</NavLink>
                <NavLink href="/stack">{t('footer.stack')}</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy;  {t('footer.copyright', {year})}
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
