import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <span className="text-sm font-bold">BE</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-foreground">Boyluca</span>
                <span className="text-sm text-muted-foreground"> Ekonomi Okulu</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Ekonomi alanında uzmanlaşmış eğitim kurumumuz, öğrencilerimize 
              güncel ekonomik bilgiler ve pratik deneyimler sunmaktadır.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                              <Link href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                Ana Sayfa
              </Link>
              </li>
              <li>
                              <Link href="/blog" className="text-muted-foreground hover:text-secondary transition-colors">
                Blog
              </Link>
              </li>
              <li>
                              <Link href="/hakkimizda" className="text-muted-foreground hover:text-secondary transition-colors">
                Hakkımızda
              </Link>
              </li>
              <li>
                              <Link href="/iletisim" className="text-muted-foreground hover:text-secondary transition-colors">
                İletişim
              </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@boyluca.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+90 212 555 0123</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Boyluca Ekonomi Okulu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
} 