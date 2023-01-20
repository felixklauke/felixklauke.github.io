import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getI18nPaths = () =>
  ['de', 'en'].map((lng) => ({
    params: {
      locale: lng
    }
  }))

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale || 'de'
  return {
    ...(await serverSideTranslations(locale, ns))
  }
}

export function makeStaticProps(ns = {}) {
  return async function getStaticProps(ctx) {
    return {
      props: await getI18nProps(ctx, ns)
    }
  }
}