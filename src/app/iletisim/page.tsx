"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Başlık en az 5 karakter olmalıdır"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
  category: z.string().min(1, "Kategori seçiniz"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "E-posta",
    value: "info@boyluca.com",
    description: "Genel sorularınız için",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 212 555 0123",
    description: "Pazartesi - Cuma, 09:00 - 18:00",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "Levent, İstanbul",
    description: "Merkez ofisimiz",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    value: "09:00 - 18:00",
    description: "Pazartesi - Cuma",
  },
];

export default function IletisimPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simüle edilmiş form gönderimi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form data:", data);
      toast.success(
        "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
      );
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz.");
    }
  };

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
              İletişim
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle
              iletişime geçebilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <info.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Formu */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Mesaj Gönderin</CardTitle>
                  <CardDescription>
                    Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Ad *</Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          placeholder="Adınız"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Soyad *</Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          placeholder="Soyadınız"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-posta *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="ornek@email.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="+90 555 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category">Kategori *</Label>
                      <Select
                        onValueChange={(value) =>
                          register("category").onChange({ target: { value } })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Kategori seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="genel">Genel Bilgi</SelectItem>
                          <SelectItem value="egitim">
                            Eğitim Programları
                          </SelectItem>
                          <SelectItem value="isbirligi">İşbirliği</SelectItem>
                          <SelectItem value="sikayet">Şikayet/Öneri</SelectItem>
                          <SelectItem value="diger">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.category && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.category.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject">Başlık *</Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        placeholder="Mesajınızın başlığı"
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Mesaj *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Mesajınızı buraya yazın..."
                        rows={5}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        "Gönderiliyor..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Mesaj Gönder
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Harita ve Adres */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Konumumuz</CardTitle>
                  <CardDescription>
                    Merkez ofisimiz Levent, İstanbul&apos;da bulunmaktadır.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-muted-foreground text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p>Google Maps</p>
                      <p className="text-sm">Harita burada görüntülenecek</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Adres:</strong> Levent Mahallesi, Büyükdere
                      Caddesi No:123, Şişli/İstanbul
                    </p>
                    <p>
                      <strong>Toplu Taşıma:</strong> M2 Levent Metro İstasyonu
                      (5 dk yürüme)
                    </p>
                    <p>
                      <strong>Otopark:</strong> Binada ücretsiz otopark
                      mevcuttur
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Çalışma Saatleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Pazartesi - Cuma</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cumartesi</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pazar</span>
                      <span className="text-muted-foreground">Kapalı</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
