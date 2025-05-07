"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const { language, t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/playtopia-logo.png"
                alt="PlayTopia Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <span className={`text-xl font-bold ${language === "ar" ? "font-cairo" : ""}`}>
                {language === "en" ? "PlayTopia" : "بلاي توبيا"}
              </span>
            </div>
            <p className={`text-gray-400 mb-4 ${language === "ar" ? "font-cairo" : ""}`}>{t("hero.description")}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}>
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`text-gray-400 hover:text-primary transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className={`text-gray-400 hover:text-primary transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}>
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className={`text-gray-400 ${language === "ar" ? "font-cairo" : ""}`}>{t("footer.address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className={`text-gray-400 ${language === "ar" ? "font-cairo" : ""}`}>{t("footer.phone")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className={`text-gray-400 ${language === "ar" ? "font-cairo" : ""}`}>{t("footer.email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className={`text-gray-400 text-sm ${language === "ar" ? "font-cairo" : ""}`}>
            © {currentYear} PlayTopia. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
