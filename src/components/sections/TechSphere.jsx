import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Reveal } from '../ui/Reveal';
import { Cpu } from 'lucide-react';
import { asset } from '../../config/site';

// Imagens oficiais das tecnologias em alta definição fornecidas pelo usuário
const TECH_ITEMS = [
  { name: 'React', category: 'Frontend', icon: asset('icons/tech/logos--react.png') },
  { name: 'JavaScript', category: 'Linguagem', icon: asset('icons/tech/logos--javascript.png') },
  { name: 'HTML5', category: 'Estruturação', icon: asset('icons/tech/vscode-icons--file-type-html.png') },
  { name: 'CSS3', category: 'Estilização', icon: asset('icons/tech/thesvg-color--css.png') },
  { name: 'PHP', category: 'Backend & Web', icon: asset('icons/tech/logos--php.png') },
  { name: 'CapCut', category: 'Edição Audiovisual', icon: asset('icons/tech/selfhst--capcut-dark.png') },
  { name: 'Antigravity', category: 'IA & Engenharia', icon: asset('icons/tech/logos--antigravity.png') },
  { name: 'C#', category: 'Backend & Desktop', icon: asset('icons/tech/devicon--csharp.png') },
  { name: '.NET', category: 'Framework & API', icon: asset('icons/tech/dotnet.svg') },
  { name: 'SQL Server', category: 'Banco de Dados', icon: asset('icons/tech/Microsoft_SQL_Server_2025_icon.svg.webp') },
  { name: 'MySQL', category: 'Banco de Dados', icon: asset('icons/tech/devicon--mysql.png') },
  { name: 'Python', category: 'Linguagem & Automação', icon: asset('icons/tech/selfhst--python.png') },
  { name: 'Java', category: 'Backend & Sistemas', icon: asset('icons/tech/devicon--java.png') },
  { name: 'Git', category: 'Controle de Versão', icon: asset('icons/tech/devicon--git.png') },
  { name: 'GitHub', category: 'DevOps & Repositório', icon: asset('icons/tech/ant-design--github-outlined.png') },
  { name: 'VS Code', category: 'Ambiente de Dev', icon: asset('icons/tech/vscode-icons--file-type-vscode.png') },
  { name: 'Visual Studio', category: 'IDE Completa', icon: asset('icons/tech/devicon--visualstudio.png') },
  { name: 'Figma', category: 'Design UI/UX', icon: asset('icons/tech/devicon--figma.png') },
  { name: 'Canva', category: 'Design & Criativos', icon: asset('icons/tech/thesvg-color--canva.png') },
  { name: 'Gemini', category: 'Inteligência Artificial', icon: asset('icons/tech/thesvg-color--gemini.png') },
  { name: 'Claude', category: 'IA & Raciocínio', icon: asset('icons/tech/thesvg-color--claude.png') },
  { name: 'OpenAI', category: 'Inteligência Artificial', icon: asset('icons/tech/thesvg-color--openai-light.png') },
];

export const TechSphere = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeTech, setActiveTech] = useState(null);
  const imageCacheRef = useRef({});

  // Precarrega as imagens oficiais das tecnologias com suas cores autênticas
  useEffect(() => {
    TECH_ITEMS.forEach((item) => {
      if (!imageCacheRef.current[item.name]) {
        const img = new Image();
        img.src = item.icon;
        imageCacheRef.current[item.name] = img;
      }
    });
  }, []);

  // Distribuição esférica de Fibonacci
  const points = useMemo(() => {
    const pts = [];
    const n = TECH_ITEMS.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Ângulo de ouro

    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
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

      // Detecta hover no nó baseado na posição projetada com hit target expandido
      let hovered = null;
      for (const p of points) {
        const projX = displayWidth / 2 + p.x * radius;
        const projY = displayHeight / 2 + p.y * radius;
        const dist = Math.hypot(mouseX - projX, mouseY - projY);
        if (dist < 34 && p.z > -0.35) {
          hovered = p.tech;
          break;
        }
      }
      setActiveTech(hovered);
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Suporte touch e toque no celular
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        const touchY = e.touches[0].clientY - rect.top;

        let tapped = null;
        for (const p of points) {
          const projX = displayWidth / 2 + p.x * radius;
          const projY = displayHeight / 2 + p.y * radius;
          const dist = Math.hypot(touchX - projX, touchY - projY);
          if (dist < 38 && p.z > -0.35) {
            tapped = p.tech;
            break;
          }
        }
        if (tapped) {
          setActiveTech((prev) => (prev?.name === tapped.name ? null : tapped));
        }
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

    // Loop de renderização
    const render = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      if (isDragging) {
        rotX = dragRotX;
        rotY = dragRotY;
      } else {
        dragRotX *= 0.95;
        dragRotY *= 0.95;
        rotX = 0.0018 + dragRotX;
        rotY = 0.0028 + dragRotY;
      }

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      points.forEach((p) => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y2;
        p.z = z2;
      });

      const sortedPoints = [...points].sort((a, b) => a.z - b.z);

      // Linhas orbitais de conexão sutis
      ctx.lineWidth = 0.75;
      for (let i = 0; i < sortedPoints.length; i++) {
        for (let j = i + 1; j < sortedPoints.length; j++) {
          const p1 = sortedPoints[i];
          const p2 = sortedPoints[j];
          const dist3D = Math.hypot(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z);

          if (dist3D < 0.75) {
            const avgZ = (p1.z + p2.z) / 2;
            const alpha = Math.max(0.04, (avgZ + 1) * 0.12);
            ctx.strokeStyle = `rgba(97, 40, 200, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(displayWidth / 2 + p1.x * radius, displayHeight / 2 + p1.y * radius);
            ctx.lineTo(displayWidth / 2 + p2.x * radius, displayHeight / 2 + p2.y * radius);
            ctx.stroke();
          }
        }
      }

      // Renderiza cada tecnologia como ícone flutuante proporcional com suas cores originais
      sortedPoints.forEach((p) => {
        const projX = displayWidth / 2 + p.x * radius;
        const projY = displayHeight / 2 + p.y * radius;
        const scale = (p.z + 1.6) / 2.6;
        const alpha = Math.max(0.35, (p.z + 1.2) / 2.2);
        const isHovered = activeTech?.name === p.tech.name;

        // Dimensão máxima proporcional aumentada
        const maxDim = isHovered ? 56 : Math.max(28, 42 * scale);

        // Glow suave no hover ao redor do ícone
        if (isHovered) {
          const glowGrad = ctx.createRadialGradient(projX, projY, 0, projX, projY, maxDim * 0.85);
          glowGrad.addColorStop(0, 'rgba(149, 87, 245, 0.45)');
          glowGrad.addColorStop(1, 'rgba(149, 87, 245, 0)');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(projX, projY, maxDim * 0.85, 0, Math.PI * 2);
          ctx.fill();
        }

        // Desenha o ícone em suas cores originais preservando rigorosamente o aspect ratio natural (sem distorção)
        const img = imageCacheRef.current[p.tech.name];
        let drawW = maxDim;
        let drawH = maxDim;

        if (img && img.complete && img.naturalWidth !== 0) {
          const naturalW = img.naturalWidth || 1;
          const naturalH = img.naturalHeight || 1;

          // Escala proporcional exata (contain) para que o ícone nunca seja achatado ou esticado
          const scaleRatio = Math.min(maxDim / naturalW, maxDim / naturalH);
          drawW = naturalW * scaleRatio;
          drawH = naturalH * scaleRatio;

          ctx.save();
          if (isHovered) {
            ctx.shadowColor = 'rgba(149, 87, 245, 0.65)';
            ctx.shadowBlur = 18;
          }
          ctx.globalAlpha = isHovered ? 1.0 : alpha;
          ctx.drawImage(
            img,
            projX - drawW / 2,
            projY - drawH / 2,
            drawW,
            drawH
          );
          ctx.restore();
        }

        // Exibe o nome da tecnologia via tooltip flutuante APENAS no hover/touch
        if (isHovered) {
          const text = p.tech.name;
          ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
          const textMetrics = ctx.measureText(text);
          const pillPaddingX = 12;
          const pillWidth = textMetrics.width + pillPaddingX * 2;
          const pillHeight = 26;

          // Evita que o tooltip seja cortado nas bordas da tela
          const pillX = Math.max(10, Math.min(displayWidth - pillWidth - 10, projX - pillWidth / 2));
          const pillY = Math.max(10, projY - drawH / 2 - pillHeight - 8);

          // Caixa do tooltip escura com borda violeta
          ctx.fillStyle = '#100D18';
          ctx.strokeStyle = '#9557F5';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 8);
          ctx.fill();
          ctx.stroke();

          // Pequena seta apontando para o nó
          ctx.beginPath();
          ctx.moveTo(projX - 4, pillY + pillHeight);
          ctx.lineTo(projX + 4, pillY + pillHeight);
          ctx.lineTo(projX, pillY + pillHeight + 4);
          ctx.closePath();
          ctx.fillStyle = '#100D18';
          ctx.fill();

          // Texto do nome
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, pillX + pillWidth / 2, pillY + pillHeight / 2);
        }
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
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#F6F4FA] text-[#08070D] w-full max-w-full">
      {/* Transição sutil do escuro acima para o claro */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#08070D] to-transparent opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6" ref={containerRef}>
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="text-[10px] md:text-xs font-mono font-semibold tracking-widest uppercase text-[#6128C8] mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6128C8]/10 border border-[#6128C8]/20">
              <Cpu className="w-3.5 h-3.5 text-[#6128C8]" />
              Stack & Engenharia
            </span>
            <h2 className="fluid-h2 font-extrabold text-[#08070D] mb-4">
              Meu universo <span className="text-purple-gradient-dark">tecnológico</span>
            </h2>
            <p className="text-sm md:text-base text-[#393340] font-light leading-relaxed">
              As ferramentas que nos conectam, criam e transformam ideias em resultados. Passe o cursor ou toque nos ícones para identificar cada tecnologia.
            </p>
          </div>
        </Reveal>

        {/* Esfera 3D Centralizada (caixa lateral removida conforme solicitado) */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
          <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center overflow-hidden">
            {/* Anéis orbitais decorativos em violeta */}
            <div className="absolute inset-0 rounded-full border border-[#6128C8]/15 pointer-events-none animate-pulse-glow"></div>
            <div className="absolute inset-10 rounded-full border border-[#9557F5]/10 pointer-events-none"></div>

            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none z-10"
              style={{ width: '100%', height: '100%' }}
              aria-label="Esfera 3D interativa de tecnologias com logos oficiais"
            />

            {/* Dica interativa no rodapé da esfera */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-20 w-full px-2 flex justify-center">
              <span className="text-[8px] sm:text-[10px] font-mono tracking-wider uppercase text-[#393340]/80 bg-white/95 px-3 py-1 rounded-full border border-[#E5E0EB] shadow-sm backdrop-blur-sm text-center max-w-[94%] truncate">
                Arraste para girar • Toque para ver o nome
              </span>
            </div>
          </div>
        </div>

        {/* Lista acessível para leitores de tela e navegação assistiva */}
        <div className="sr-only">
          <h3>Tecnologias que compõem o ecossistema MIVLO:</h3>
          <ul>
            {TECH_ITEMS.map((tech) => (
              <li key={tech.name}>{tech.name} — {tech.category}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
