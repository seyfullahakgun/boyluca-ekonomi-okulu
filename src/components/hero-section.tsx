"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - İçerik */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Boyluca{" "}
                <span className="text-primary">Ekonomi Okulu</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Ekonomi alanında uzmanlaşmış eğitim kurumumuz, öğrencilerimize 
                güncel ekonomik bilgiler ve pratik deneyimler sunarak, 
                geleceğin ekonomistlerini yetiştiriyoruz.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link href="/hakkimizda">
                  Hakkımızda
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border border-muted !text-muted-foreground !hover:bg-muted-foreground/20">
                <Link href="/blog">
                  Blog Yazılarımız
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - İstatistikler */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-card/90 backdrop-blur-sm rounded-lg p-6 text-center border border-border shadow-lg"
            >
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Eğitim Programı</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-card/90 backdrop-blur-sm rounded-lg p-6 text-center border border-border shadow-lg"
            >
              <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Öğrenci</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-card/90 backdrop-blur-sm rounded-lg p-6 text-center border border-border shadow-lg"
            >
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Uzman Eğitmen</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 