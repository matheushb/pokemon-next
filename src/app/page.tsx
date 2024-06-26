import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CardSection from "@/components/card-section/Card-Section";

export default function Home() {
  return (
    <>
      <Header pokemon="Squirtle" />
      <main className={styles.main}>
        <CardSection title="Informações sobre Squirtle">
          <div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
              alt="Squirtle 1"
            />
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
              alt="Squirtle 2"
            />
          </div>
          <p>
            Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
            Kanto e evolui para Wartortle.
          </p>
        </CardSection>

        <CardSection title="Curiosidades">
          <ul>
            <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
            <li>
              Seu nome deriva das palavras &quot;squirrel&quot; (esquilo) e
              &quot;turtle (tartaruga).
            </li>
            <li>
              Squirtle é frequentemente escolhido por treinadores para começar
              sua jornada Pokémon.
            </li>
          </ul>
        </CardSection>
        <CardSection title="Recursos Adicionais">
          <ul>
            <li>
              <a
                href="https://www.pokemon.com/br/pokedex/squirtle"
                target="_blank"
              >
                Pokédex - Squirtle
              </a>
            </li>
            <li>
              <a
                href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
                target="_blank"
              >
                Bulbapedia - Squirtle
              </a>
            </li>
          </ul>
        </CardSection>
        <CardSection title="Evoluções">
          <ul>
            <li>
              <a href="./pages/pokemon/index.html?name=squirtle">
                <figure>
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
                    alt="Squirtle"
                  />
                  <figcaption>1. Squirtle</figcaption>
                </figure>
              </a>
            </li>

            <li>
              <a href="./pages/pokemon/index.html?name=wartortle">
                <figure>
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
                    alt="Wartortle"
                  />
                  <figcaption>2. Wartortle</figcaption>
                </figure>
              </a>
            </li>

            <li>
              <a href="./pages/pokemon/index.html?name=blastoise">
                <figure>
                  <img
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
                    alt="Blastoise"
                  />
                  <figcaption>3. Blastoise</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </CardSection>
      </main>
      <Footer />
    </>
  );
}
