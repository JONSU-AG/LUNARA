import React, { useState, useEffect } from 'react';
import { SERVICES, STUDIO_INFO } from '../data/studioData';
import { ServiceItem } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BookingSectionProps {
  initialServiceId?: string;
  onClearInitialService?: () => void;
}

const SPECIAL_INQUIRY_OPTIONS = [
  {
    id: 'consulta-asesoria',
    name: '💬 Quiero hacer una consulta / Cotizar diseño especial',
    priceDisplay: 'Asesoría Gratuita',
    description: '¿Tienes una foto de TikTok, Pinterest o Instagram? Elige esta opción para enviárnosla por WhatsApp y recibir orientación personalizada de Yanely.',
  },
  {
    id: 'consulta-disponibilidad',
    name: '📅 Consultar fechas y horarios disponibles para esta semana',
    priceDisplay: 'Consulta Rápida',
    description: 'Escríbenos directamente para conocer los turnos libres más próximos en la agenda.',
  },
];

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialServiceId,
}) => {
  const [clientName, setClientName] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || 'consulta-asesoria'
  );
  const [hasPreviousMaterial, setHasPreviousMaterial] = useState<'no' | 'si'>('no');
  const [customDesignNotes, setCustomDesignNotes] = useState('');
  const [copiedYape, setCopiedYape] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const isConsultation =
    selectedServiceId === 'consulta-asesoria' ||
    selectedServiceId === 'consulta-disponibilidad';

  const selectedSpecialInquiry = SPECIAL_INQUIRY_OPTIONS.find(
    (opt) => opt.id === selectedServiceId
  );

  const selectedService: ServiceItem | undefined = SERVICES.find(
    (s) => s.id === selectedServiceId
  );

  const copyYapeNumber = () => {
    navigator.clipboard.writeText(STUDIO_INFO.yapeNumber.replace(/\s+/g, ''));
    setCopiedYape(true);
    setTimeout(() => setCopiedYape(false), 3000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const previousMatText =
      hasPreviousMaterial === 'si'
        ? 'Sí (tengo material para retirar)'
        : 'No (uñas al natural)';

    const notesText = customDesignNotes.trim()
      ? `\n💭 *Detalles / Foto de referencia:* ${customDesignNotes.trim()}`
      : '';

    let message = '';

    if (selectedServiceId === 'consulta-asesoria') {
      message = `¡Hola Yanely! 🌸 Quiero hacerte una consulta personalizada en *Lunara Estudio de Uñas* 💅

👤 *Nombre:* ${clientName.trim() || 'Clienta'}
💬 *Motivo:* Quiero cotizar un diseño especial / asesoría sobre el mejor servicio para mis uñas.${notesText}

¿Te puedo enviar mi foto de referencia para coordinar detalles y ver disponibilidad? ✨`;
    } else if (selectedServiceId === 'consulta-disponibilidad') {
      message = `¡Hola Yanely! 🌸 Quiero consultar fechas y horarios disponibles en *Lunara Estudio de Uñas* 💅

👤 *Nombre:* ${clientName.trim() || 'Clienta'}
📅 *Consulta:* Disponibilidad de agenda para esta semana${notesText}

¿Qué turnos tienes libres para coordinar mi cita? ✨`;
    } else {
      const sName = selectedService?.name || 'Servicio de Uñas';
      const sPrice = selectedService?.priceDisplay || `S/ ${selectedService?.price || 0}.00`;

      message = `¡Hola Yanely! 🌸 Quiero consultar disponibilidad de cita en *Lunara Estudio de Uñas* 💅

👤 *Nombre:* ${clientName.trim() || 'Clienta'}
💅 *Servicio de interés:* ${sName} (${sPrice})
🔄 *Material previo:* ${previousMatText}${notesText}

¿Qué horarios y días tienes disponibles para coordinar mi cita? ✨`;
    }

    window.open(
      `https://wa.me/${STUDIO_INFO.phoneClean}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="agendar" className="py-16 lg:py-24 bg-[#fff5f7] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd9df] text-[#a23255] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>Reserva & Consultas</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#400012]">
            Pide tu Cita o Asesoría en Lunara
          </h2>

          <p className="text-sm sm:text-base text-[#564145] leading-relaxed">
            Escríbenos para consultar dudas, cotizar diseños o asegurar tu fecha. Recuerda reservar con <strong className="text-[#a23255]">2 días de anticipación</strong> para tu espacio exclusivo.
          </p>
        </div>

        {/* 2-Column Cohesive Layout: Left (Process & Tips) | Right (WhatsApp Message Generator) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Process & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick 3-Step Process Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ffd9df] shadow-xs space-y-5">
              <h3 className="font-serif-luxury text-xl font-bold text-[#400012] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#a23255]">check_circle</span>
                <span>¿Cómo es el proceso?</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9df] text-[#a23255] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#400012]">Elige tu servicio o consúltanos</h4>
                    <p className="text-xs text-[#564145] mt-0.5 leading-relaxed">
                      Escoge tu servicio de la lista o envíanos una foto de referencia de TikTok, Instagram o Pinterest para cotizarla.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9df] text-[#a23255] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#400012]">Coordinamos fecha (2 días antes)</h4>
                    <p className="text-xs text-[#564145] mt-0.5 leading-relaxed">
                      Te respondemos en WhatsApp con los turnos disponibles para que elijas el que mejor se acomode a ti.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#ffd9df] text-[#a23255] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#400012]">Confirmación y atención</h4>
                    <p className="text-xs text-[#564145] mt-0.5 leading-relaxed">
                      Al definir tu horario, se bloquea tu turno exclusivo de ~2 horas para brindarte la mayor dedicación y arte.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Informative Note about S/ 20 Yape Deposit */}
            <div className="bg-white/90 rounded-3xl p-5 sm:p-6 border border-[#ffd9df] shadow-xs space-y-3 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#6c008b] text-white flex flex-col items-center justify-center font-extrabold text-xs shrink-0 shadow-xs">
                  <span>YAPE</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-[#400012] flex items-center gap-1.5">
                    <span>Abono de Reserva</span>
                    <span className="text-[11px] font-normal text-[#705554]">(Aviso informativo)</span>
                  </h4>
                  <p className="text-xs text-[#564145] mt-1 leading-relaxed">
                    Para agendar y asegurar tu turno en el calendario se realiza un abono de <strong>S/ 20.00</strong> por Yape, el cual se <strong>descuenta íntegramente de tu total</strong> el día de tu cita.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#fff5f7] rounded-xl border border-[#ffd9df]/70 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[#705554] block text-[11px]">Número Yape:</span>
                  <strong className="text-[#400012] text-sm">{STUDIO_INFO.yapeNumber}</strong>
                  <span className="text-[11px] text-[#a23255] ml-1.5">(Yanely)</span>
                </div>
                <button
                  type="button"
                  onClick={copyYapeNumber}
                  className="px-3 py-1.5 bg-white hover:bg-[#ffd9df] text-[#a23255] border border-[#ffb1c1] rounded-lg font-bold text-xs transition-colors flex items-center gap-1 shrink-0"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedYape ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedYape ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#705554] italic">
                * Si primero tienes dudas o consultas sobre algún diseño, puedes escribirnos libremente sin realizar ningún abono previo.
              </p>
            </div>

            {/* Quick Policies Summary */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#564145]">
              <div className="p-3.5 bg-white rounded-2xl border border-[#ffd9df] flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#a23255] text-lg shrink-0">timer</span>
                <span><strong>Tolerancia:</strong> 15 min de puntualidad</span>
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-[#ffd9df] flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#a23255] text-lg shrink-0">spa</span>
                <span><strong>Manicura Rusa:</strong> Incluida en todo set</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border-2 border-[#ffd9df] shadow-xl space-y-6">
            <div className="border-b border-[#ffd9df]/60 pb-4">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#400012]">
                Generador de Mensaje para WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#705554] mt-1">
                Selecciona tu opción y completa tus datos para escribirle directamente a Yanely:
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-5">
              
              {/* Service / Consultation Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#a23255]">
                  1. ¿Qué deseas consultar o reservar?
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full p-3.5 bg-[#fff9fa] border-2 border-[#ffd9df] rounded-2xl text-sm sm:text-base font-bold text-[#400012] focus:outline-none focus:border-[#a23255] transition-colors"
                >
                  <optgroup label="💬 Consultas y Asesoría Directa">
                    {SPECIAL_INQUIRY_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="💅 Acrílico & Poligel">
                    {SERVICES.filter((s) => s.category === 'acrilico-poligel').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.priceDisplay || `S/ ${s.price}.00`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="🌿 Rubber, Builder & Kapping Natural">
                    {SERVICES.filter((s) => s.category === 'rubber-gel').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.priceDisplay || `S/ ${s.price}.00`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="🎨 Nail Art & Diseños Extras">
                    {SERVICES.filter((s) => s.category === 'extras').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.priceDisplay || `S/ ${s.price}.00`}
                      </option>
                    ))}
                  </optgroup>
                </select>

                <p className="text-xs text-[#705554] pl-1">
                  {selectedSpecialInquiry
                    ? selectedSpecialInquiry.description
                    : selectedService?.description}
                </p>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#a23255]">
                  2. Tu Nombre:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Claudia Flores"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full p-3.5 bg-[#fff9fa] border-2 border-[#ffd9df] rounded-2xl text-sm sm:text-base text-[#400012] placeholder-[#a88d93] focus:outline-none focus:border-[#a23255] transition-colors"
                />
              </div>

              {/* Previous Material Selection (Only if specific service is selected) */}
              {!isConsultation && (
                <div className="space-y-1.5 animate-fadeIn">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#a23255]">
                    3. ¿Tienes acrílico o esmalte previo para retirar?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setHasPreviousMaterial('no')}
                      className={`p-3 rounded-xl border-2 text-xs sm:text-sm font-bold transition-all text-center ${
                        hasPreviousMaterial === 'no'
                          ? 'bg-[#a23255] text-white border-[#a23255] shadow-xs'
                          : 'bg-white text-[#564145] border-[#ffd9df] hover:bg-[#fff5f7]'
                      }`}
                    >
                      No, uñas naturales
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasPreviousMaterial('si')}
                      className={`p-3 rounded-xl border-2 text-xs sm:text-sm font-bold transition-all text-center ${
                        hasPreviousMaterial === 'si'
                          ? 'bg-[#a23255] text-white border-[#a23255] shadow-xs'
                          : 'bg-white text-[#564145] border-[#ffd9df] hover:bg-[#fff5f7]'
                      }`}
                    >
                      Sí, tengo material puesto
                    </button>
                  </div>
                </div>
              )}

              {/* Optional custom notes / question detail */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#a23255]">
                  {isConsultation
                    ? '3. ¿Qué diseño deseas o qué duda tienes? (opcional):'
                    : '4. Detalles opcionales o diseño de referencia (opcional):'}
                </label>
                <input
                  type="text"
                  placeholder={
                    isConsultation
                      ? 'Ej: Quiero enviar foto de TikTok con diseño coquette / consultar precio'
                      : 'Ej: Quiero diseño con lazo coquette o enviar foto por chat'
                  }
                  value={customDesignNotes}
                  onChange={(e) => setCustomDesignNotes(e.target.value)}
                  className="w-full p-3 bg-[#fff9fa] border border-[#ffd9df] rounded-xl text-xs sm:text-sm text-[#400012] placeholder-[#a88d93] focus:outline-none focus:border-[#a23255]"
                />
              </div>

              {/* Submit CTA WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-whatsapp-booking-btn"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
                  <span>
                    {isConsultation
                      ? 'Consultar por WhatsApp'
                      : 'Solicitar Cita por WhatsApp'}
                  </span>
                </button>
                <p className="text-center text-xs text-[#705554] mt-2">
                  {isConsultation
                    ? 'Yanely te responderá para asesorarte con tu diseño y cotización.'
                    : 'Te responderemos a la brevedad con los horarios y días disponibles.'}
                </p>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

