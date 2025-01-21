import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import emailjs from '@emailjs/browser';

// NOTA DE SEGURANÇA:
// As credenciais do EmailJS foram removidas deste arquivo por motivos de segurança.
// Para usar este formulário, você precisará:
// 1. Criar uma conta no EmailJS (emailjs.com)
// 2. Criar um serviço de email
// 3. Criar um template de email
// 4. Substituir as credenciais abaixo com suas próprias credenciais

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Substitua com seu Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Substitua com seu Template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Substitua com sua Public Key

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    service: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.email,
      to_name: "Lumuz Digital",
      message: `Serviço de interesse: ${formData.service}`,
      reply_to: formData.email,
      service: formData.service,
      consent: formData.consent ? 'Sim' : 'Não',
    };

    try {
      if (
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
      ) {
        throw new Error("Por favor, configure suas credenciais do EmailJS primeiro.");
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada com sucesso.",
      });
      
      setFormData({
        email: "",
        service: "",
        consent: false,
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro",
        description: "Houve um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-sm text-white/80">E-mail</label>
        <Input
          type="email"
          name="from_name"
          placeholder="Endereço de e-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="glass border-white/10 h-14 text-white placeholder:text-white/60"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/80">Estou interessado em</label>
        <Select
          value={formData.service}
          name="service"
          onValueChange={(value) => setFormData({ ...formData, service: value })}
          required
        >
          <SelectTrigger className="glass border-white/10 h-14 text-white">
            <SelectValue placeholder="Selecione o serviço" />
          </SelectTrigger>
          <SelectContent className="glass border-white/10">
            <SelectItem value="web" className="text-white hover:bg-white/10">Web Design</SelectItem>
            <SelectItem value="branding" className="text-white hover:bg-white/10">Branding</SelectItem>
            <SelectItem value="social" className="text-white hover:bg-white/10">Social Media</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          name="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, consent: checked as boolean })
          }
          className="mt-1 border-white/60 data-[state=checked]:bg-white data-[state=checked]:text-black"
        />
        <label htmlFor="consent" className="text-sm text-white/60">
          Eu quero receber notícias gerais e atualizações sobre a Lumuz, eu consinto que meus dados sejam armazenados com base nas políticas de privacidade.
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full glass hover:bg-white/10 text-white h-14 rounded-full border border-white/10"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default ContactForm;