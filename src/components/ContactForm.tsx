import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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

    try {
      console.log("Form submitted:", formData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      setFormData({
        email: "",
        service: "",
        consent: false,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <label className="text-sm text-white/80">E-mail</label>
        <Input
          type="email"
          placeholder="Endereço de e-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="glass"
        />
      </div>

      <div className="space-y-4">
        <label className="text-sm text-white/80">Estou interessado em</label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger className="glass">
            <SelectValue placeholder="Selecione o serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Web Design</SelectItem>
            <SelectItem value="branding">Branding</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, consent: checked as boolean })
          }
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-white/60">
          Eu quero receber notícias gerais e atualizações sobre a Lumuz, eu consinto que meus dados sejam armazenados com base nas políticas de privacidade.
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full glass hover:bg-white/10 rounded-full"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default ContactForm;