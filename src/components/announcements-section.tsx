"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const announcements = [
  {
    id: 1,
    title: "Yeni Ekonomi Analizi Kursu Başlıyor",
    description: "Güncel ekonomik gelişmeleri analiz etme ve yorumlama becerilerinizi geliştirin.",
    date: "15 Mart 2024",
    type: "duyuru"
  },
  {
    id: 2,
    title: "Finansal Piyasalar Semineri",
    description: "Finansal piyasaların dinamiklerini anlamak için özel seminer programı.",
    date: "20 Mart 2024",
    type: "duyuru"
  },
  {
    id: 3,
    title: "Ekonomik Kriz Yönetimi",
    description: "Kriz dönemlerinde ekonomi yönetimi stratejileri ve uygulamaları.",
    date: "10 Mart 2024",
    type: "duyuru"
  }
]

const blogPosts = [
  {
    id: 1,
    title: "2024 Ekonomik Trendleri ve Beklentiler",
    excerpt: "Bu yılın ekonomik trendlerini ve gelecek dönem beklentilerini analiz ediyoruz.",
    author: "Dr. Ahmet Yılmaz",
    date: "12 Mart 2024",
    readTime: "5 dk"
  },
  {
    id: 2,
    title: "Sürdürülebilir Kalkınma ve Ekonomi",
    excerpt: "Sürdürülebilir kalkınma hedeflerinin ekonomi üzerindeki etkileri.",
    author: "Prof. Fatma Demir",
    date: "8 Mart 2024",
    readTime: "7 dk"
  },
  {
    id: 3,
    title: "Dijital Ekonomi ve Blockchain Teknolojisi",
    excerpt: "Dijital ekonominin geleceği ve blockchain teknolojisinin rolü.",
    author: "Mehmet Kaya",
    date: "5 Mart 2024",
    readTime: "6 dk"
  }
]

export function AnnouncementsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Duyurular ve Son Yazılar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Güncel duyurularımızı ve ekonomi alanındaki son blog yazılarımızı takip edin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Duyurular */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">Duyurular</h3>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                Tümünü Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-border bg-card/80 backdrop-blur-sm hover:border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-foreground">{announcement.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {announcement.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground">
                        {announcement.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blog Yazıları */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-foreground">Son Blog Yazıları</h3>
              <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary hover:bg-primary/10">
                <Link href="/blog">
                  Tümünü Gör
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-border bg-card/80 backdrop-blur-sm hover:border-secondary/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-foreground">{post.title}</CardTitle>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 