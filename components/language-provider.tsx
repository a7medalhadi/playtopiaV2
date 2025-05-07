"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
    "hero.title": "PlayTopia",
    "hero.subtitle": "Fun in Action",
    "hero.description": "Creating unforgettable experiences for everyone",
    "hero.cta": "Book Your Adventure",
    "hero.contact": "Contact via WhatsApp",
    "promo.title": "Your party is about to become legendary!",
    "promo.price": "499 SAR",
    "promo.starting": "Packages starting from",
    "promo.book": "Book Now",
    "promo.dontmiss": "Don't Miss The Opportunity",
    "features.title": "Why Choose PlayTopia?",
    "features.item1.title": "Exciting Activities",
    "features.item1.desc": "Wide range of fun activities for all ages",
    "features.item2.title": "Professional Staff",
    "features.item2.desc": "Trained team to ensure safety and fun",
    "features.item3.title": "Custom Packages",
    "features.item3.desc": "Tailored experiences for your specific needs",
    "features.item4.title": "Memorable Events",
    "features.item4.desc": "Creating lasting memories for everyone",
    "gallery.title": "Explore Our Playgrounds",
    "gallery.subtitle": "Take a peek at the fun that awaits",
    "cta.title": "Ready to Experience the Fun?",
    "cta.subtitle": "Book your adventure today and create unforgettable memories",
    "cta.button": "Book Now",
    "footer.rights": "All Rights Reserved. شركة الهوايات للترفية",
    "footer.address": "Ash Shulah, EAPB7477، 7477, Dammam 34265",
    "footer.phone": "+966138300839",
    "footer.email": "info@hobbies2.com",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    "hero.title": "بلاي توبيا",
    "hero.subtitle": "المرح في العمل",
    "hero.description": "نخلق تجارب لا تُنسى للجميع",
    "hero.cta": "احجز مغامرتك",
    "hero.contact": "تواصل عبر واتساب",
    "promo.title": "حفلتك قريبة؟ تخيلها أسطورية!",
    "promo.price": "499 ريال",
    "promo.starting": "باقاتنا تبدأ من",
    "promo.book": "احجز الآن",
    "promo.dontmiss": "لا تفوت الفرصة",
    "features.title": "لماذا تختار بلاي توبيا؟",
    "features.item1.title": "أنشطة مثيرة",
    "features.item1.desc": "مجموعة واسعة من الأنشطة الممتعة لجميع الأعمار",
    "features.item2.title": "فريق محترف",
    "features.item2.desc": "فريق مدرب لضمان السلامة والمتعة",
    "features.item3.title": "باقات مخصصة",
    "features.item3.desc": "تجارب مصممة خصيصًا لتلبية احتياجاتك",
    "features.item4.title": "فعاليات لا تُنسى",
    "features.item4.desc": "نخلق ذكريات دائمة للجميع",
    "gallery.title": "استكشف ملاعبنا",
    "gallery.subtitle": "ألق نظرة على المرح الذي ينتظرك",
    "cta.title": "هل أنت مستعد لتجربة المرح؟",
    "cta.subtitle": "احجز مغامرتك اليوم واصنع ذكريات لا تُنسى",
    "cta.button": "احجز الآن",
    "footer.rights": "جميع الحقوق محفوظة. شركة الهوايات للترفية",
    "footer.address": "Ash Shulah, الدمام",
    "footer.phone": "+966138300839",
    "footer.email": "info@hobbies2.com",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check if URL contains /ar to set initial language
    if (window.location.pathname.includes("/ar")) {
      setLanguage("ar")
      document.documentElement.classList.add("rtl")
      document.documentElement.classList.remove("ltr")
      document.documentElement.dir = "rtl"
      document.documentElement.lang = "ar"
    } else {
      document.documentElement.classList.add("ltr")
      document.documentElement.classList.remove("rtl")
      document.documentElement.dir = "ltr"
      document.documentElement.lang = "en"
    }
  }, [])

  useEffect(() => {
    if (language === "ar") {
      document.documentElement.classList.add("rtl")
      document.documentElement.classList.remove("ltr")
      document.documentElement.dir = "rtl"
      document.documentElement.lang = "ar"
    } else {
      document.documentElement.classList.add("ltr")
      document.documentElement.classList.remove("rtl")
      document.documentElement.dir = "ltr"
      document.documentElement.lang = "en"
    }
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
