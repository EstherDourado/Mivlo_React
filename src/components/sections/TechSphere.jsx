import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Reveal } from '../ui/Reveal';
import { Sparkles, Cpu } from 'lucide-react';

const TECH_ITEMS = [
  { name: 'React', category: 'Frontend', desc: 'Aplicações web modernas, reativas e com arquitetura escalável.' },
  { name: 'JavaScript', category: 'Linguagem', desc: 'Lógica dinâmica client-side e integrações assíncronas de alta performance.' },
  { name: 'HTML5', category: 'Frontend', desc: 'Estruturação semântica, acessibilidade e SEO técnico impecável.' },
  { name: 'CSS3', category: 'Estilização', desc: 'Design systems fluidos, animações a 60fps e responsividade precisa.' },
  { name: 'PHP', category: 'Backend', desc: 'Desenvolvimento backend seguro, APIs e integração com legados.' },
  { name: 'C#', category: 'Backend', desc: 'Sistemas corporativos robustos, regras de negócio críticas e alta tipagem.' },
  { name: '.NET', category: 'Framework', desc: 'Arquitetura de microsserviços, segurança empresarial e alto throughput.' },
  { name: 'SQL Server', category: 'Banco de Dados', desc: 'Modelagem relacional, queries de alta eficiência e integridade de dados.' },
  { name: 'Git', category: 'Controle de Versão', desc: 'Versionamento disciplinado de código, branching strategy e histórico seguro.' },
  { name: 'GitHub', category: 'DevOps & Cloud', desc: 'CI/CD automatizado, repositórios em nuvem e governança de código.' },
  { name: 'VS Code', category: 'Ambiente', desc: 'Produtividade de ponta com linting e esteira de desenvolvimento limpo.' },
  { name: 'Figma', category: 'Design & UX', desc: 'Prototipagem de alta fidelidade, design systems e alinhamento visual.' },
  { name: 'Gemini', category: 'IA & Inovação', desc: 'Inteligência artificial generativa aplicada a fluxos avançados e automação.' },
  { name: 'Claude', category: 'IA & Raciocínio', desc: 'Modelagem analítica, raciocínio complexo e assistência de engenharia.' },
  { name: 'UiPath Studio', category: 'Automação / RPA', desc: 'Automação robótica de processos repetitivos para eficiência operacional.' },
];

export const TechSphere = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeTech, setActiveTech] = useState(null);

  // Fibonacci Sphere distribution
  const points = useMemo(() => {
    const pts = [];
    const n = TECH_ITEMS.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      pts.push({
        x,
        y,
        z,
        origX: x,
        origY: y,
        origZ: z,
        tech: TECH_ITEMS[i],
      });
    }
    return pts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let displayWidth = canvas.offsetWidth;
    let displayHeight = canvas.offsetHeight;
    let radius = Math.min(displayWidth, displayHeight) * 0.38;

    // Speeds and Angles
    let rotX = 0.002;
    let rotY = 0.003;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let dragRotX = 0;
    let dragRotY = 0;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      displayWidth = canvas.offsetWidth;
      displayHeight = canvas.offsetHeight;
      radius = Math.min(displayWidth, displayHeight) * 0.38;
    };

    window.addEventListener('resize', handleResize);

    // Mouse / Touch Handlers for Dragging
    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        dragRotY = dx * 0.004;
        dragRotX = -dy * 0.004;
        startX = e.clientX;
        startY = e.clientY;
      }

      // Detect hover on projected points
      let hovered = null;
      for (const p of points) {
        const projX = displayWidth / 2 + p.x * radius;
        const projY = displayHeight / 2 + p.y * radius;
        const dist = Math.hypot(mouseX - projX, mouseY - projY);
        if (dist < 32 && p.z > -0.2) {
          hovered = p.tech;
          break;
        }
      }
      setActiveTech(hovered);
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for Mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        dragRotY = dx * 0.005;
        dragRotX = -dy * 0.005;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        const touchY = e.touches[0].clientY - rect.top;

        let hovered = null;
        for (const p of points) {
          const projX = displayWidth / 2 + p.x * radius;
          const projY = displayHeight / 2 + p.y * radius;
          const dist = Math.hypot(touchX - projX, touchY - projY);
          if (dist < 36 && p.z > -0.2) {
            hovered = p.tech;
            break;
          }
        }
        if (hovered) setActiveTech(hovered);
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Inertia & Natural Rotation
      if (isDragging) {
        rotX = dragRotX;
        rotY = dragRotY;
      } else {
        dragRotX *= 0.95;
        dragRotY *= 0.95;
        rotX = 0.0018 + dragRotX;
        rotY = 0.0028 + dragRotY;
      }

      // Rotate coordinates
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      points.forEach((p) => {
        // Rotate around Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;
      });

      // Sort points by z for proper depth rendering
      const sortedPoints = [...points].sort((a, b) => a.z - b.z);

      // Draw subtle connecting lines between close points
      ctx.lineWidth = 0.75;
      for (let i = 0; i < sortedPoints.length; i++) {
        for (let j = i + 1; j < sortedPoints.length; j++) {
          const p1 = sortedPoints[i];
          const p2 = sortedPoints[j];
          const dist3D = Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);

          if (dist3D < 0.75) {
            const avgZ = (p1.z + p2.z) / 2;
            const alpha = Math.max(0.04, (avgZ + 1) * 0.12);
            ctx.strokeStyle = `rgba(176, 106, 179, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(displayWidth / 2 + p1.x * radius, displayHeight / 2 + p1.y * radius);
            ctx.lineTo(displayWidth / 2 + p2.x * radius, displayHeight / 2 + p2.y * radius);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      sortedPoints.forEach((p) => {
        const projX = displayWidth / 2 + p.x * radius;
        const projY = displayHeight / 2 + p.y * radius;
        const scale = (p.z + 1.6) / 2.6; // Scale factor 0.5 to 1.1
        const alpha = Math.max(0.25, (p.z + 1.2) / 2.2);
        const isHovered = activeTech?.name === p.tech.name;

        // Outer glow on hover or front node
        if (isHovered || p.z > 0.4) {
          const glowGrad = ctx.createRadialGradient(projX, projY, 0, projX, projY, 20 * scale);
          glowGrad.addColorStop(0, isHovered ? 'rgba(217, 70, 239, 0.6)' : 'rgba(69, 104, 220, 0.25)');
          glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(projX, projY, 20 * scale, 0, Math.PI * 2);
          ctx.fill();
        }

        // Center dot
        ctx.fillStyle = isHovered ? '#ffffff' : `rgba(224, 220, 237, ${alpha})`;
        ctx.beginPath();
        ctx.arc(projX, projY, (isHovered ? 6 : 4) * scale, 0, Math.PI * 2);
        ctx.fill();

        // Label Badge
        const fontSize = Math.max(10, Math.round(13 * scale));
        ctx.font = `${isHovered ? '700' : '600'} ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        const text = p.tech.name;
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const pillPaddingX = 8 * scale;
        const pillHeight = 22 * scale;

        // Badge pill background
        const pillX = projX - textWidth / 2 - pillPaddingX;
        const pillY = projY + 8 * scale;

        ctx.fillStyle = isHovered
          ? 'rgba(176, 106, 179, 0.95)'
          : `rgba(27, 1, 59, ${Math.max(0.4, alpha * 0.85)})`;
        ctx.strokeStyle = isHovered
          ? '#ffffff'
          : `rgba(224, 220, 237, ${alpha * 0.4})`;
        ctx.lineWidth = 1;

        // Rounded pill
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, textWidth + pillPaddingX * 2, pillHeight, 6 * scale);
        ctx.fill();
        ctx.stroke();

        // Text inside pill
        ctx.fillStyle = isHovered ? '#ffffff' : `rgba(255, 255, 255, ${alpha})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, projX, pillY + pillHeight / 2);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [points, activeTech]);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-brand-graphite/40 border-y border-brand-border/40">
      <div className="container mx-auto px-6" ref={containerRef}>
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 inline-flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              Stack & Engenharia
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              Meu universo <span className="text-amber-gradient">tecnológico</span>
            </h2>
            <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
              Uma síntese das tecnologias, linguagens, ferramentas de automação e modelos de IA que utilizo para projetar e entregar soluções de alta performance na MIVLO.
            </p>
          </div>
        </Reveal>

        {/* Container da Esfera 3D e Tooltip Lateral */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Canvas da Esfera 3D Interativa */}
          <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">
            {/* Anéis decorativos de fundo */}
            <div className="absolute inset-0 rounded-full border border-brand-amber/15 pointer-events-none animate-pulse-glow"></div>
            <div className="absolute inset-8 rounded-full border border-brand-amber2/10 pointer-events-none"></div>

            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none z-10"
              style={{ width: '100%', height: '100%' }}
              aria-label="Esfera 3D interativa de tecnologias da Esther"
            />

            {/* Dica interativa no rodapé da esfera */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-sand/50 bg-brand-graphite/80 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                Arraste para girar • Passe o cursor
              </span>
            </div>
          </div>

          {/* Painel de Detalhes / Tooltip da Tecnologia em Foco */}
          <div className="w-full lg:w-96 flex flex-col gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-brand-border/80 bg-brand-muted/40 shadow-xl transition-all duration-300 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-amber px-2.5 py-0.5 rounded-full bg-brand-amber/10 border border-brand-amber/30">
                    {activeTech ? activeTech.category : 'Interativo'}
                  </span>
                  <Sparkles className="w-4 h-4 text-brand-amber animate-pulse" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {activeTech ? activeTech.name : 'Explore a Esfera'}
                </h3>

                <p className="text-sm text-brand-sand/80 font-light leading-relaxed">
                  {activeTech
                    ? activeTech.desc
                    : 'Passe o cursor sobre os nós da esfera 3D ou toque na tela para conhecer o papel de cada tecnologia no desenvolvimento de software e nas automações da MIVLO.'}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-sand/50 font-mono">
                <span>15 Tecnologias Core</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Full Stack + IA
                </span>
              </div>
            </div>

            {/* Badges Rápidas para Mobile / Acessibilidade */}
            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
              {TECH_ITEMS.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTech(t)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all ${
                    activeTech?.name === t.name
                      ? 'bg-brand-amber text-white border-brand-amber shadow-md'
                      : 'bg-white/5 text-brand-sand/70 border-white/5 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
