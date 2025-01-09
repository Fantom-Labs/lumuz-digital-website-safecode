import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import emailjs from '@emailjs/browser';

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
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this
        'YOUR_TEMPLATE_ID', // You'll need to replace this
        {
          to_email: 'lumuzdigital@gmail.com',
          from_email: formData.email,
          service: formData.service,
          consent: formData.consent ? 'Yes' : 'No',
        },
        'YOUR_PUBLIC_KEY' // You'll need to replace this
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Select
        value={formData.service}
        onValueChange={(value) => setFormData({ ...formData, service: value })}
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione um serviço" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="branding">Branding</SelectItem>
          <SelectItem value="web">Web</SelectItem>
          <SelectItem value="social">Social</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, consent: checked as boolean })
          }
        />
        <label
          htmlFor="consent"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Aceito receber comunicações
        </label>
      </div>

      <a 
        href="#" 
        className="group flex flex-col items-center justify-center w-[120px] h-[120px] glass hover:bg-white/10 transition-all duration-300 rounded-full"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e as any);
        }}
      >
        <p className="font-satoshi uppercase text-sm tracking-wider">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </p>
      </a>
    </form>
  );
};

export default ContactForm;