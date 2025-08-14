import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-border">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo-white.png"
              alt="Boyluca Ekonomi Okulu"
              className="h-18 md:h-32 aspect-auto"
            />
            <p className="text-white mb-4 max-w-md">
              Ekonomi alanında uzmanlaşmış eğitim kurumumuz, öğrencilerimize
              güncel ekonomik bilgiler ve pratik deneyimler sunmaktadır.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-semibold text-accent mb-4">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="w-max text-white hover:text-primary transition-colors hover:bg-accent px-2 py-1 rounded-md block"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="w-max text-white hover:text-primary transition-colors hover:bg-accent px-2 py-1 rounded-md block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="w-max text-white hover:text-primary transition-colors hover:bg-accent px-2 py-1 rounded-md block"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="w-max text-white hover:text-primary transition-colors hover:bg-accent px-2 py-1 rounded-md block"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="font-semibold text-accent mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-sm text-white">info@boyluca.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-sm text-white">+90 212 555 0123</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-sm text-white">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-white">
            © 2024 Boyluca Ekonomi Okulu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
