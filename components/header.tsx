"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en"
    setLanguage(newLang)

    // Update URL without refreshing
    const currentPath = window.location.pathname
    const newPath =
      newLang === "ar"
        ? currentPath === "/"
          ? "/ar"
          : "/ar" + currentPath
        : currentPath === "/ar"
          ? "/"
          : currentPath.replace("/ar", "")

    window.history.pushState({}, "", newPath)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/playtopia-logo.png"
              alt="PlayTopia Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <span className={`text-xl font-bold text-primary ${language === "ar" ? "font-cairo" : ""}`}>
              {language === "en" ? "شركة الهوايات للترفية" : "شركة الهوايات للترفية"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${language === "ar" ? "font-cairo" : ""}`}
            >
              {t("home")}
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${language === "ar" ? "font-cairo" : ""}`}
            >
              {t("contact")}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="ml-2">
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-xs">{language === "en" ? "العربية" : "English"}</span>
            </Button>
            <Button className="playtopia-button">{t("hero.cta")}</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage}>
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#"
                className={`text-sm font-medium py-2 hover:text-primary transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                href="#contact"
                className={`text-sm font-medium py-2 hover:text-primary transition-colors ${language === "ar" ? "font-cairo" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("contact")}
              </Link>
                <Link href={'https://wa.me/966559750502'} target="_blank" rel="noopener noreferrer">

              <Button className="playtopia-button w-full mt-2">{t("hero.cta")}</Button></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
