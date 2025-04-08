import { useEffect, useState } from "react";
import styles from "./Repositorio.module.css";

const Repositorio = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setCarregando(false);
          setRepos(resJson);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {carregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.listItemName}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.listItemLanguage}>
                <b>Linguagem:</b> {language}
              </div>
              <a
                className={styles.listItemLink}
                target="_blank"
                href={html_url}
              >
                Visitar
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Repositorio;
