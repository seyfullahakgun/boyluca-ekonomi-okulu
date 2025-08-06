"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "2024 Ekonomik Trendleri ve Beklentiler",
    excerpt: "Bu yılın ekonomik trendlerini ve gelecek dönem beklentilerini analiz ediyoruz. Küresel ekonomi, teknoloji ve sürdürülebilirlik konularında önemli gelişmeler yaşanıyor.",
    author: "Dr. Ahmet Yılmaz",
    date: "12 Mart 2024",
    readTime: "5 dk",
    category: "Ekonomi Analizi",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Sürdürülebilir Kalkınma ve Ekonomi",
    excerpt: "Sürdürülebilir kalkınma hedeflerinin ekonomi üzerindeki etkileri ve yeşil ekonomi modellerinin geleceği hakkında detaylı bir analiz.",
    author: "Prof. Fatma Demir",
    date: "8 Mart 2024",
    readTime: "7 dk",
    category: "Sürdürülebilirlik",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Dijital Ekonomi ve Blockchain Teknolojisi",
    excerpt: "Dijital ekonominin geleceği ve blockchain teknolojisinin finansal sistemler üzerindeki dönüştürücü etkisi.",
    author: "Mehmet Kaya",
    date: "5 Mart 2024",
    readTime: "6 dk",
    category: "Dijital Ekonomi",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Merkez Bankası Politikaları ve Enflasyon",
    excerpt: "Merkez bankalarının para politikası kararları ve enflasyonla mücadele stratejileri üzerine kapsamlı bir değerlendirme.",
    author: "Dr. Zeynep Arslan",
    date: "1 Mart 2024",
    readTime: "8 dk",
    category: "Para Politikası",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "Küresel Ticaret Savaşları ve Ekonomi",
    excerpt: "Küresel ticaret savaşlarının ekonomi üzerindeki etkileri ve uluslararası ticaret dinamiklerindeki değişimler.",
    author: "Prof. Can Özkan",
    date: "28 Şubat 2024",
    readTime: "9 dk",
    category: "Uluslararası Ticaret",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Fintech ve Geleneksel Bankacılık",
    excerpt: "Fintech şirketlerinin geleneksel bankacılık sektörüne etkisi ve finansal teknolojilerin geleceği.",
    author: "Ayşe Yıldız",
    date: "25 Şubat 2024",
    readTime: "6 dk",
    category: "Fintech",
    image: "/api/placeholder/400/250"
  },
  {
    id: 7,
    title: "Enerji Ekonomisi ve Yenilenebilir Kaynaklar",
    excerpt: "Enerji ekonomisindeki dönüşüm ve yenilenebilir enerji kaynaklarının ekonomik etkileri.",
    author: "Dr. Emre Kaya",
    date: "22 Şubat 2024",
    readTime: "7 dk",
    category: "Enerji Ekonomisi",
    image: "/api/placeholder/400/250"
  },
  {
    id: 8,
    title: "Kripto Para Piyasaları ve Regülasyon",
    excerpt: "Kripto para piyasalarının gelişimi ve düzenleyici çerçevelerin ekonomi üzerindeki etkileri.",
    author: "Burak Demir",
    date: "19 Şubat 2024",
    readTime: "5 dk",
    category: "Kripto Para",
    image: "/api/placeholder/400/250"
  }
]

export default function BlogPage() {
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
              Blog Yazıları
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ekonomi alanındaki güncel gelişmeler, analizler ve uzman görüşlerini 
              takip etmek için blog yazılarımızı okuyabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Resim</div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                                             <span className="text-xs font-medium text-accent-foreground bg-accent/20 px-2 py-1 rounded">
                         {post.category}
                       </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base line-clamp-3 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                                         <Link 
                       href={`/blog/${post.id}`}
                       className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                     >
                       Devamını Oku
                       <ArrowRight className="ml-1 h-4 w-4" />
                     </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 