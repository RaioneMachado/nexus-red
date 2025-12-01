import React, { useState } from 'react';
import styles from './SecaoValores.module.css';

interface Plano {
  nome: string;
  precoMensal: string;
  precoTrimestral: string;
  precoAnual: string;
  periodo: string;
  economiza?: string;
  popular?: boolean;
  beneficios: string[];
  corDestaque: string;
}

interface SecaoValoresProps {
  titulo?: string;
  subtitulo?: string;
}

const SecaoValores: React.FC<SecaoValoresProps> = ({
  titulo = "Escolha Seu Plano",
  subtitulo = "Assista onde quiser. Cancele quando quiser."
}) => {
  const [periodoAtivo, setPeriodoAtivo] = useState<'mensal' | 'trimestral' | 'anual'>('mensal');

  const planos: Plano[] = [
    {
      nome: "BÁSICO",
      precoMensal: "19,90",
      precoTrimestral: "52,90",
      precoAnual: "189,90",
      periodo: "mês",
      beneficios: [
        "1 tela simultânea",
        "Qualidade HD",
        "Assista no celular ou tablet",
        "Filmes e séries ilimitados",
        "Suporte 24/7"
      ],
      corDestaque: "#E50914"
    },
    {
      nome: "PADRÃO",
      precoMensal: "29,90",
      precoTrimestral: "79,90",
      precoAnual: "279,90",
      periodo: "mês",
      economiza: "Economize 10%",
      popular: true,
      beneficios: [
        "2 telas simultâneas",
        "Qualidade Full HD",
        "Assista em qualquer dispositivo",
        "Filmes e séries ilimitados",
        "Downloads para assistir offline",
        "Suporte prioritário"
      ],
      corDestaque: "#E50914"
    },
    {
      nome: "PREMIUM",
      precoMensal: "39,90",
      precoTrimestral: "104,90",
      precoAnual: "379,90",
      periodo: "mês",
      economiza: "Economize 15%",
      beneficios: [
        "4 telas simultâneas",
        "Qualidade 4K Ultra HD",
        "Assista em qualquer dispositivo",
        "Filmes e séries ilimitados",
        "Downloads ilimitados",
        "Conteúdo exclusivo",
        "Suporte VIP 24/7"
      ],
      corDestaque: "#E50914"
    }
  ];

  const getPrecoPorPeriodo = (plano: Plano) => {
    switch (periodoAtivo) {
      case 'mensal':
        return { preco: plano.precoMensal, periodo: '/mês' };
      case 'trimestral':
        return { preco: plano.precoTrimestral, periodo: '/trimestre' };
      case 'anual':
        return { preco: plano.precoAnual, periodo: '/ano' };
      default:
        return { preco: plano.precoMensal, periodo: '/mês' };
    }
  };

  const getPeriodoTexto = () => {
    switch (periodoAtivo) {
      case 'mensal': return 'Mensal';
      case 'trimestral': return 'Trimestral';
      case 'anual': return 'Anual';
      default: return 'Mensal';
    }
  };

  const handleAssinarClick = (planoNome: string) => {
    alert(`Você escolheu o plano ${planoNome} no período ${getPeriodoTexto()}`);
    // Aqui você pode implementar a lógica de redirecionamento ou modal de pagamento
  };

  return (
    <section className={styles.secaoPlanos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.subtitulo}>{subtitulo}</p>
        </div>
        
        {/* Seletor de Período */}
        <div className={styles.seletorPeriodo}>
          <button
            className={`${styles.periodoOpcao} ${periodoAtivo === 'mensal' ? styles.ativo : ''}`}
            onClick={() => setPeriodoAtivo('mensal')}
          >
            Plano Mensal
          </button>
          <button
            className={`${styles.periodoOpcao} ${periodoAtivo === 'trimestral' ? styles.ativo : ''}`}
            onClick={() => setPeriodoAtivo('trimestral')}
          >
            Plano Trimestral
          </button>
          <button
            className={`${styles.periodoOpcao} ${periodoAtivo === 'anual' ? styles.ativo : ''}`}
            onClick={() => setPeriodoAtivo('anual')}
          >
            Plano Anual
          </button>
        </div>

        <div className={styles.planosContainer}>
          <div className={styles.planosGrid}>
            {planos.map((plano, index) => {
              const precoInfo = getPrecoPorPeriodo(plano);
              
              return (
                <div 
                  key={index} 
                  className={`${styles.planoCard} ${plano.popular ? styles.planoPopular : ''}`}
                >
                  {plano.popular && (
                    <div 
                      className={styles.popularBadge}
                      style={{ background: `linear-gradient(90deg, ${plano.corDestaque}, #B81D24)` }}
                    >
                      MAIS POPULAR
                    </div>
                  )}
                  
                  <div className={styles.planoHeader}>
                    <h3 className={styles.planoNome}>{plano.nome}</h3>
                    <div className={styles.precoContainer}>
                      <span className={styles.preco}>R$ {precoInfo.preco}</span>
                      <span className={styles.periodo}>{precoInfo.periodo}</span>
                    </div>
                    {plano.economiza && (
                      <p className={styles.economiza}>{plano.economiza}</p>
                    )}
                  </div>

                  <ul className={styles.beneficios}>
                    {plano.beneficios.map((beneficio, beneficioIndex) => (
                      <li key={beneficioIndex} className={styles.beneficio}>
                        {beneficio}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={styles.botaoAssinar}
                    style={{ 
                      background: `linear-gradient(90deg, ${plano.corDestaque}, #B81D24)`,
                      border: `1px solid ${plano.corDestaque}`
                    }}
                    onClick={() => handleAssinarClick(plano.nome)}
                  >
                    ASSINAR AGORA
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.notaRodape}>
          <p>*Todos os planos incluem 7 dias grátis para teste. Cancele quando quiser.</p>
        </div>
      </div>
    </section>
  );
};

export default SecaoValores;
