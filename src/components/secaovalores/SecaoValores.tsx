
import React from 'react';
import styles from './SecaoValores.module.css';

interface ValorItem {
  icone: string;
  titulo: string;
  descricao: string;
}

interface SecaoValoresProps {
  titulo?: string;
  subtitulo?: string;
  valores?: ValorItem[];
}

const SecaoValores: React.FC<SecaoValoresProps> = ({
  titulo = "Nossos Valores",
  subtitulo = "Princípios que guiam o nosso trabalho",
  valores = [
    {
      icone: "🎯",
      titulo: "Missão",
      descricao: "Compromisso com a excelência e resultados consistentes."
    },
    {
      icone: "👥",
      titulo: "Colaboração",
      descricao: "Trabalho em equipe para alcançar objetivos comuns."
    },
    {
      icone: "💡",
      titulo: "Inovação",
      descricao: "Buscamos sempre novas soluções e abordagens criativas."
    },
    {
      icone: "🤝",
      titulo: "Transparência",
      descricao: "Comunicação clara e relações baseadas na confiança."
    }
  ]
}) => {
  return (
    <section className={styles.secaoValores}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.subtitulo}>{subtitulo}</p>
        </div>
        
        <div className={styles.valoresGrid}>
          {valores.map((valor, index) => (
            <div key={index} className={styles.valorItem}>
              <div className={styles.icone}>{valor.icone}</div>
              <h3 className={styles.valorTitulo}>{valor.titulo}</h3>
              <p className={styles.valorDescricao}>{valor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoValores;
