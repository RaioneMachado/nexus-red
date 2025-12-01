import React from 'react';
import styles from './SecaoValores.module.css';

interface Plano {
  nome: string;
  preco: string;
  periodo: string;
  descricao: string;
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
      nome: "GRÁTIS",
      preco: "0,00",
      periodo: "12 horas",
      descricao: "Teste gratuitamente",
      beneficios: [
        "Acesso limitado por 12 horas",
        "Qualidade HD",
        "1 tela simultânea",
        "Catálogo completo disponível",
        "Sem necessidade de cartão"
      ],
      corDestaque: "#46d369"
    },
    {
      nome: "MENSAL",
      preco: "34,90",
      periodo: "mês",
      descricao: "Plano mais popular",
      popular: true,
      beneficios: [
        "Acesso ilimitado",
        "Qualidade Full HD 4K",
        "2 telas simultâneas",
        "Download para assistir offline",
        "Suporte prioritário 24/7",
        "Cancelamento a qualquer momento"
      ],
      corDestaque: "#E50914"
    },
    {
      nome: "TRIMESTRAL",
      preco: "89,90",
      periodo: "3 meses",
      descricao: "Economize 15%",
      beneficios: [
        "Acesso ilimitado",
        "Qualidade Full HD 4K",
        "4 telas simultâneas",
        "Downloads ilimitados",
        "Conteúdo exclusivo",
        "Suporte VIP 24/7",
        "Cancelamento a qualquer momento"
      ],
      corDestaque: "#E50914"
    }
  ];

  const handleAssinarClick = (planoNome: string, preco: string) => {
    if (planoNome === "GRÁTIS") {
      alert(`🎬 Você ativou o teste gratuito de 12 horas!`);
    } else {
      alert(`💰 Você escolheu o plano ${planoNome} por R$ ${preco}`);
    }
    // Aqui você pode implementar a lógica de redirecionamento ou modal de pagamento
  };

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
              style={{ 
                borderColor: plano.popular ? plano.corDestaque : 'rgba(255, 255, 255, 0.1)',
                borderTopColor: plano.corDestaque
              }}
            >
              {plano.popular && (
                <div 
                  className={styles.popularBadge}
                  style={{ backgroundColor: plano.corDestaque }}
                >
                  MAIS ESCOLHIDO
                </div>
              )}
              
              <div className={styles.planoHeader}>
                <h3 className={styles.planoNome}>{plano.nome}</h3>
                <div className={styles.precoContainer}>
                  <span className={styles.preco}>R$ {plano.preco}</span>
                  <span className={styles.periodo}>/{plano.periodo}</span>
                </div>
                <p className={styles.descricao}>{plano.descricao}</p>
              </div>

              <ul className={styles.beneficios}>
                {plano.beneficios.map((beneficio, beneficioIndex) => (
                  <li key={beneficioIndex} className={styles.beneficio}>
                    <span className={styles.checkIcon}>✓</span>
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
                onClick={() => handleAssinarClick(plano.nome, plano.preco)}
              >
                {plano.nome === "GRÁTIS" ? "TESTAR GRÁTIS" : "ASSINAR AGORA"}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.notaRodape}>
          <p>*O plano gratuito oferece 12 horas de acesso completo. Não é necessário cartão de crédito.</p>
          <p>*Após o período gratuito, escolha um dos planos para continuar assistindo.</p>
        </div>
      </div>
    </section>
  );
};

export default SecaoValores;
