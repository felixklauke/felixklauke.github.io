import languageDetector from 'next-language-detector'

export default languageDetector({
  supportedLngs: ['de', 'en'],
  fallbackLng: 'de'
})