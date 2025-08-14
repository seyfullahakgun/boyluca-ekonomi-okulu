"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Globe, Target } from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "Uzman Eğitmen Kadrosu",
    description: "Alanında uzman akademisyenler ve sektör profesyonelleri tarafından verilen eğitimler."
  },
  {
    icon: Users,
    title: "Küçük Sınıf Mevcutları",
    description: "Maksimum 15 kişilik sınıflarda bireysel ilgi ve etkileşim odaklı eğitim."
  },
  {
    icon: BookOpen,
    title: "Güncel Müfredat",
    description: "Ekonomi dünyasındaki son gelişmeleri takip eden güncel ve pratik müfredat."
  },
  {
    icon: Award,
    title: "Sertifika Programları",
    description: "Uluslararası geçerliliği olan sertifika programları ve akreditasyonlar."
  },
  {
    icon: Globe,
    title: "Uluslararası İşbirlikleri",
    description: "Dünya çapında üniversiteler ve kurumlarla işbirlikleri ve değişim programları."
  },
  {
    icon: Target,
    title: "Kariyer Desteği",
    description: "Mezuniyet sonrası kariyer planlama ve iş bulma konusunda destek hizmetleri."
  }
]

export function WhyBoylucaSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neden <span className="text-secondary">Boyluca</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Boyluca Ekonomi Okulu olarak, öğrencilerimize sadece teorik bilgi değil, 
            pratik deneyim ve gerçek dünya uygulamaları sunuyoruz. 
            İşte bizi farklı kılan özelliklerimiz:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card/90 backdrop-blur-sm hover:border-secondary/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                    <reason.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center bg-card/50 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
            <div className="text-3xl font-bold text-accent-foreground mb-2">95%</div>
            <div className="text-muted-foreground">Mezun İstihdam Oranı</div>
          </div>
          <div className="text-center bg-card/50 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
            <div className="text-3xl font-bold text-accent-foreground mb-2">10+</div>
            <div className="text-muted-foreground">Yıllık Deneyim</div>
          </div>
          <div className="text-center bg-card/50 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
            <div className="text-3xl font-bold text-accent-foreground mb-2">50+</div>
            <div className="text-muted-foreground">İş Ortağı</div>
          </div>
          <div className="text-center bg-card/50 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
            <div className="text-3xl font-bold text-accent-foreground mb-2">1000+</div>
            <div className="text-muted-foreground">Başarılı Mezun</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 