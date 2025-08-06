"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Target, Award, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Ahmet Yılmaz",
    title: "Kurucu ve Başkan",
    description: "20+ yıl ekonomi alanında deneyim, Harvard Üniversitesi mezunu",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Prof. Fatma Demir",
    title: "Akademik Direktör",
    description: "Sürdürülebilir ekonomi uzmanı, 15+ yıl akademik deneyim",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Mehmet Kaya",
    title: "Finansal Teknolojiler Direktörü",
    description: "Fintech ve blockchain alanında uzman, eski bankacı",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Dr. Zeynep Arslan",
    title: "Araştırma Direktörü",
    description: "Para politikası ve merkez bankacılığı uzmanı",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Ayşe Yıldız",
    title: "Eğitim Koordinatörü",
    description: "Eğitim programları tasarımı ve öğrenci ilişkileri uzmanı",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Burak Demir",
    title: "Dijital Dönüşüm Uzmanı",
    description: "Dijital ekonomi ve kripto para piyasaları uzmanı",
    image: "/api/placeholder/200/200"
  }
]

const milestones = [
  {
    year: "2014",
    title: "Kuruluş",
    description: "Boyluca Ekonomi Okulu'nun temelleri atıldı"
  },
  {
    year: "2016",
    title: "İlk Mezunlar",
    description: "İlk öğrenci grubu başarıyla mezun oldu"
  },
  {
    year: "2018",
    title: "Uluslararası İşbirlikleri",
    description: "Avrupa ve ABD'deki üniversitelerle işbirlikleri başladı"
  },
  {
    year: "2020",
    title: "Dijital Dönüşüm",
    description: "Online eğitim platformu ve dijital programlar başlatıldı"
  },
  {
    year: "2022",
    title: "1000+ Mezun",
    description: "1000'den fazla öğrenci başarıyla mezun oldu"
  },
  {
    year: "2024",
    title: "10. Yıl",
    description: "10 yıllık başarılı eğitim deneyimi"
  }
]

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hakkımızda
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Boyluca Ekonomi Okulu, ekonomi alanında uzmanlaşmış bir eğitim kurumu olarak 
              2014 yılından bu yana öğrencilerimize kaliteli eğitim sunmaktadır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hakkımızda İçerik */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Boyluca Ekonomi Okulu Nedir?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Boyluca Ekonomi Okulu, ekonomi alanında uzmanlaşmış bir eğitim kurumu olarak 
                  2014 yılında kurulmuştur. Amacımız, öğrencilerimize sadece teorik bilgi değil, 
                  pratik deneyim ve gerçek dünya uygulamaları sunmaktır.
                </p>
                <p>
                  Kurumumuz, alanında uzman akademisyenler ve sektör profesyonelleri tarafından 
                  verilen eğitimlerle, öğrencilerimizin ekonomi dünyasında başarılı olmalarını 
                  sağlamaktadır.
                </p>
                <p>
                  Küçük sınıf mevcutları, güncel müfredat ve uluslararası işbirlikleri ile 
                  öğrencilerimize en iyi eğitim deneyimini sunuyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Resim 1</div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Resim 2</div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Resim 3</div>
              </div>
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Resim 4</div>
              </div>
            </motion.div>
          </div>

          {/* Misyon ve Vizyon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Misyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Ekonomi alanında kaliteli eğitim sunarak, öğrencilerimizin 
                    teorik ve pratik becerilerini geliştirmek, onları geleceğin 
                    ekonomistleri olarak yetiştirmek.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Vizyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Türkiye'nin önde gelen ekonomi eğitim kurumu olmak ve 
                    uluslararası standartlarda eğitim veren bir kurum haline gelmek.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tarihçe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Tarihçemiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardHeader>
                                           <CardTitle className="text-2xl font-bold text-accent">
                       {milestone.year}
                     </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base font-medium mb-2">
                        {milestone.title}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ekip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Ekibimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                        <div className="text-muted-foreground text-sm">Fotoğraf</div>
                      </div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                                             <CardDescription className="text-accent font-medium">
                         {member.title}
                       </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 