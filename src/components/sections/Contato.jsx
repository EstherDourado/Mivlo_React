import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Toastify from 'toastify-js';
import { sendEmail } from '../../lib/email';
import { Reveal } from '../ui/Reveal';

export const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        contato: '',
        mensagem: '',
        assunto: "Solicitação de Proposta - MIVLO"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        sendEmail(formData)
            .then(() => {
                Toastify({
                    text: "E-mail enviado com sucesso",
                    duration: 4000,
                    style: {
                        background: "linear-gradient(45deg, #b06ab3, #4568dc)",
                        color: "#ffffff"
                    }
                }).showToast();
                
                setFormData({
                    nome: '',
                    email: '',
                    contato: '',
                    mensagem: '',
                    assunto: "Solicitação de Proposta - MIVLO"
                });
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                Toastify({
                    text: "Erro ao tentar enviar e-mail",
                    duration: 4000,
                    style: {
                        background: "#b06ab3",
                        color: "#ffffff"
                    }
                }).showToast();
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contato" className="py-16 lg:py-24 relative pb-32 md:pb-40">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <Reveal>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-4 md:mb-6 block">Vamos construir</span>
                        <h2 className="fluid-h2 font-extrabold text-white mb-4 md:mb-6">
                            Transforme sua ideia em uma <br className="hidden md:block" /><span className="text-amber-gradient">entrega profissional.</span>
                        </h2>
                        <p className="text-brand-sand/80 max-w-2xl mx-auto font-light text-sm md:text-lg">
                            Conte a sua necessidade. Voltamos com proposta modular em até 24 horas — Media, Tech, ou as duas frentes.
                        </p>
                    </div>
                </Reveal>

                <Reveal delayClass="delay-100">
                    <form onSubmit={handleSubmit} className="w-full text-left max-w-3xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                            <div className="space-y-2">
                                <label className="sr-only" htmlFor="nome">Como posso te chamar?</label>
                                <input 
                                    type="text" 
                                    id="nome" 
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Como posso te chamar?" 
                                    className="w-full bg-brand-muted/30 border border-brand-border/60 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all shadow-inner" 
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="sr-only" htmlFor="email">E-mail</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-mail" 
                                    className="w-full bg-brand-muted/30 border border-brand-border/60 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all shadow-inner" 
                                    required 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="sr-only" htmlFor="contato">Telefone para contato</label>
                                <input 
                                    type="tel" 
                                    id="contato" 
                                    value={formData.contato}
                                    onChange={handleChange}
                                    placeholder="Telefone para contato" 
                                    className="w-full bg-brand-muted/30 border border-brand-border/60 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all shadow-inner" 
                                />
                            </div>
                        </div>
                        <div className="mb-8 md:mb-10">
                            <label className="sr-only" htmlFor="mensagem">Escopo do projeto e observações</label>
                            <textarea 
                                id="mensagem" 
                                value={formData.mensagem}
                                onChange={handleChange}
                                rows="4" 
                                placeholder="Escopo do projeto e observações" 
                                className="w-full bg-brand-muted/30 border border-brand-border/60 rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-brand-amber focus:ring-1 focus:ring-brand-amber transition-all resize-none shadow-inner" 
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="btn-amber text-base md:text-lg w-full sm:w-auto px-10"
                            >
                                {isSubmitting ? "Enviando..." : "Solicitar proposta"}
                                {!isSubmitting && <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />}
                            </button>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};
