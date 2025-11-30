import React from 'react';
import styles from './SecaoValores.module.css';

interface Plano {
  nome: string;
  preco: string;
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
  const planos: Plano[] = [
    {
      nome: "SEMANAL",
      preco: "8,90",
      periodo: "semana",
      economiza: "Ideal para testar",
      beneficios: [
        "✓ Acesso a todo conteúdo",
        "✓ Qualidade HD 1080p",
        "✓ 1 tela simultânea",
        "✓ Suporte 24/7",
        "✓ Cancelamento a qualquer momento"
      ],
      corDestaque: "#E50914"
    },
    {
      nome: "MENSAL",
      preco: "34,90",
      periodo: "mês",
      economiza: "Economize 10%",
      popular: true,
      beneficios: [
        "✓ Acesso a todo conteúdo",
        "✓ Qualidade Full HD 4K",
        "✓ 2 telas simultâneas",
        "✓ Download para assistir offline",
        "✓ Suporte prioritário 24/7",
        "✓ Cancelamento a qualquer momento"
      ],
      corDestaque: "#E50914"
    },
    {
      nome: "TRIMESTRAL",
      preco: "54,90",
      periodo: "3 meses",
      economiza: "Economize 35%",
      beneficios: [
        "✓ Acesso a todo conteúdo",
        "✓ Qualidade Full HD 4K",
        "✓ 4 telas simultâneas",
        "✓ Download para assistir offline",
        "✓ Conteúdo exclusivo",
        "✓ Suporte VIP 24/7",
        "✓ Cancelamento a qualquer momento"
      ],
      corDestaque: "#E50914"
    }
  ];

  return (
    <section className={styles.secaoPlanos}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.subtitulo}>{subtitulo}</p>
        </div>
        
        <div className={styles.planosGrid}>
          {planos.map((plano, index) => (
            <div 
              key={index} 
              className={`${styles.planoCard} ${plano.popular ? styles.planoPopular : ''}`}
            >
              {plano.popular && (
                <div 
                  className={styles.popularBadge}
                  style={{ backgroundColor: plano.corDestaque }}
                >
                  MAIS POPULAR
                </div>
              )}
              
              <div className={styles.planoHeader}>
                <h3 className={styles.planoNome}>{plano.nome}</h3>
                <div className={styles.precoContainer}>
                  <span className={styles.preco}>R$ {plano.preco}</span>
                  <span className={styles.periodo}>/{plano.periodo}</span>
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
                  backgroundColor: plano.corDestaque,
                  borderColor: plano.corDestaque
                }}
              >
                ASSINAR AGORA
              </button>
            </div>
          ))}
        </div>

        <div className={styles.notaRodape}>
          <p>*Todos os planos incluem 7 dias grátis para teste</p>
        </div>
      </div>
    </section>
  );
};

export default SecaoValores;
