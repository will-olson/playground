# Section 17: 🌍 Internationalization & Multi-language Support

**Lines:** 3882-4088 (206 lines)

**Code Blocks:** 5

**Key Patterns:** 6

**Implementation Steps:** 0

---

## **17. 🌍 Internationalization & Multi-language Support**

### **Implementation Steps**:

**Step 1: Install i18next Dependencies**
```bash
cd frontend
npm install i18next react-i18next i18next-browser-languagedetector
npm install i18next-parser --save-dev
```

**Step 2: Configure i18next**
```typescript
// frontend/src/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
```

**Step 3: Create Translation Files**
```json
// frontend/src/locales/en.json
{
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "retry": "Retry",
    "cancel": "Cancel",
    "save": "Save",
    "delete": "Delete",
    "edit": "Edit",
    "share": "Share",
    "copy": "Copy",
    "download": "Download"
  },
  "navigation": {
    "home": "Home",
    "workbooks": "Workbooks",
    "profile": "Profile",
    "settings": "Settings",
    "login": "Login",
    "logout": "Logout",
    "register": "Register"
  },
  "workbooks": {
    "title": "Workbooks",
    "create": "Create Workbook",
    "edit": "Edit Workbook",
    "delete": "Delete Workbook",
    "share": "Share Workbook",
    "favorite": "Add to Favorites",
    "unfavorite": "Remove from Favorites",
    "noWorkbooks": "No workbooks found",
    "loading": "Loading workbooks...",
    "error": "Failed to load workbooks"
  },
  "auth": {
    "login": {
      "title": "Sign In",
      "email": "Email",
      "password": "Password",
      "submit": "Sign In",
      "forgotPassword": "Forgot Password?",
      "noAccount": "Don't have an account?",
      "signUp": "Sign up"
    },
    "register": {
      "title": "Create Account",
      "fullName": "Full Name",
      "username": "Username",
      "email": "Email",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "submit": "Create Account",
      "hasAccount": "Already have an account?",
      "signIn": "Sign in"
    }
  },
  "errors": {
    "network": "Network error. Please check your connection.",
    "unauthorized": "You are not authorized to perform this action.",
    "forbidden": "Access denied.",
    "notFound": "The requested resource was not found.",
    "serverError": "Server error. Please try again later.",
    "validation": "Please check your input and try again."
  }
}
```

**Step 4: Create Language Switcher Component**
```typescript
// frontend/src/components/language-switcher.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="name">{currentLanguage.name}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(language => (
            <button
              key={language.code}
              className={`language-option ${language.code === i18n.language ? 'active' : ''}`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 5: Set up Translation Extraction**
```json
// frontend/i18next-parser.config.js
module.exports = {
  input: ['src/**/*.{js,jsx,ts,tsx}'],
  output: 'src/locales/$LOCALE.json',
  options: {
    defaultLng: 'en',
    lngs: ['en', 'es', 'fr', 'de'],
    ns: ['translation'],
    defaultNs: 'translation',
    defaultValue: '',
    resource: {
      loadPath: 'src/locales/{{lng}}/{{ns}}.json',
      savePath: 'src/locales/{{lng}}/{{ns}}.json',
    },
    keySeparator: '.',
    pluralSeparator: '_',
    contextSeparator: '_',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
```

**Impact**: Enables global accessibility with multi-language support, improving user experience for international users and expanding market reach.

---
