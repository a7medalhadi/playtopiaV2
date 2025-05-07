"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Star,
  Users,
  Calendar,
  Gift,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { language, t } = useLanguage();

  // Animation refs
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const featuresControls = useAnimation();
  const galleryControls = useAnimation();
  const ctaControls = useAnimation();

  useEffect(() => {
    if (featuresInView) {
      featuresControls.start("visible");
    }
    if (galleryInView) {
      galleryControls.start("visible");
    }
    if (ctaInView) {
      ctaControls.start("visible");
    }
  }, [
    featuresInView,
    galleryInView,
    ctaInView,
    featuresControls,
    galleryControls,
    ctaControls,
  ]);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const galleryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pink-500 to-purple-600 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-300 opacity-20 blob"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-300 opacity-20 blob"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-pink-300 opacity-20 blob"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={language === "ar" ? "order-2" : ""}
            >
              <h1
                className={`text-4xl md:text-6xl font-bold text-white mb-4 ${
                  language === "ar" ? "font-cairo text-right" : ""
                }`}
              >
                {t("hero.title")}
              </h1>
              <p
                className={`text-xl md:text-2xl font-medium text-yellow-300 mb-6 ${
                  language === "ar" ? "font-cairo text-right" : ""
                }`}
              >
                {t("hero.subtitle")}
              </p>
              <p
                className={`text-white/90 text-lg mb-8 max-w-md ${
                  language === "ar" ? "font-cairo text-right" : ""
                }`}
              >
                {t("hero.description")}
              </p>
              <div
                className={`flex flex-wrap gap-4 ${
                  language === "ar" ? "justify-end" : ""
                }`}
              >
                <Link
                  href={"https://wa.me/966559750502"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="playtopia-button">
                    {t("hero.cta")}
                  </Button>
                </Link>
                <Link
                  href={"https://wa.me/966559750502"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    {t("hero.contact")}
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative ${language === "ar" ? "order-1" : ""}`}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-10 -left-10 w-24 h-24 text-yellow-300"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Star className="w-full h-full" />
                </motion.div>
                <div className="bg-yellow-400 rounded-2xl p-6 relative z-10">
                  <div className="bg-red-500 rounded-xl p-5 relative">
                    <Image
                      src="/images/playtopia-logo.png"
                      alt="PlayTopia Logo"
                      width={80}
                      height={80}
                      className="absolute -top-10 right-4 z-20"
                    />
                    <div
                      className={`mb-4 ${
                        language === "ar" ? "text-right font-cairo" : ""
                      }`}
                    >
                      <h3 className="text-xl font-bold text-yellow-300">
                        {t("promo.title")}
                      </h3>
                    </div>

                    <div
                      className={`mb-6 ${
                        language === "ar" ? "text-right" : ""
                      }`}
                    >
                      <p
                        className={`text-white/80 text-sm ${
                          language === "ar" ? "font-cairo" : ""
                        }`}
                      >
                        {t("promo.starting")}
                      </p>
                      <div className="price-tag mt-2">{t("promo.price")}</div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button className="playtopia-button bg-cyan-500 hover:bg-cyan-600 text-white border-none">
                        <Link
                          href={"https://wa.me/966559750502"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("promo.book")}{" "}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="playtopia-button bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none"
                      >
                        <Link
                          href={"https://wa.me/966559750502"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("promo.dontmiss")}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-20 h-20 text-cyan-300"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Star className="w-full h-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                language === "ar" ? "font-cairo" : ""
              }`}
            >
              {t("features.title")}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={featuresControls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                },
              }}
              className="w-24 h-1 bg-primary mx-auto"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="h-10 w-10" />, key: "features.item1" },
              { icon: <Award className="h-10 w-10" />, key: "features.item2" },
              { icon: <Gift className="h-10 w-10" />, key: "features.item3" },
              {
                icon: <Calendar className="h-10 w-10" />,
                key: "features.item4",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={featuresControls}
                variants={featureVariants}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 text-center ${
                    language === "ar" ? "font-cairo" : ""
                  }`}
                >
                  {t(`${feature.key}.title`)}
                </h3>
                <p
                  className={`text-gray-600 text-center ${
                    language === "ar" ? "font-cairo" : ""
                  }`}
                >
                  {t(`${feature.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-20 bg-gray-50" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={galleryControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${language === "ar" ? "font-cairo" : ""}`}
            >
              {t("gallery.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={galleryControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
              }}
              className={`text-gray-600 max-w-2xl mx-auto ${language === "ar" ? "font-cairo" : ""}`}
            >
              {t("gallery.subtitle")}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={galleryControls}
                variants={galleryVariants}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=PlayTopia+Gallery+${index + 1}`}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        className="py-20 bg-primary relative overflow-hidden"
        ref={ctaRef}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-yellow-300 opacity-20 blob"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-cyan-300 opacity-20 blob"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={ctaControls}
            variants={ctaVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                language === "ar" ? "font-cairo" : ""
              }`}
            >
              {t("cta.title")}
            </h2>
            <p
              className={`text-white/80 text-lg mb-8 ${
                language === "ar" ? "font-cairo" : ""
              }`}
            >
              {t("cta.subtitle")}
            </p>
            <Button
              size="lg"
              className="playtopia-button bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            >
                              <Link href={'https://wa.me/966559750502'} target="_blank" rel="noopener noreferrer">

              {t("cta.button")}
              {language === "en" ? (
                <ArrowRight className="ml-2 h-4 w-4" />
              ) : (
                <ArrowLeft className="mr-2 h-4 w-4" />
              )}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
