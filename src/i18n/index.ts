import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { I18nManager } from 'react-native'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ar: {
    translation: {
      Home: 'الصفحة الرئيسية',
      two: 'يسبسيبسي',
      des: "تيست تيست تيست"
    }
  },
  en: {
    translation: {
      Home: 'Home',
      two: 'twooooooo',
      des: "Culpa nisi eu culpa aute tempor commodo veniam consectetur qui."
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
