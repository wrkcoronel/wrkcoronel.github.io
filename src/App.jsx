import './App.css'

// Troque estes dados para personalizar o portfólio.
const projects = [
  {
    number: '01',
    title: 'Análise & BI',
    type: 'Painéis e relatórios',
    description:
      'Painéis em Power BI para acompanhar os números do dia a dia, comparar resultados e identificar o que precisa de atenção, sem se perder em várias planilhas.',
    tags: ['Power BI', 'SQL', 'DAX'],
    color: 'gold',
  },
  {
    number: '02',
    title: 'Fluxo de Dados',
    type: 'Organização e automação de dados',
    description:
      'Rotinas que reúnem e organizam informações de planilhas e sistemas, deixando os dados prontos para uso e reduzindo o trabalho de copiar, colar e conferir tudo à mão.',
    tags: ['Python', 'Power Query', 'APIs'],
    color: 'ink',
  },
  {
    number: '03',
    title: 'Aplicativos sob medida',
    type: 'Soluções simples para desktop',
    description:
      'Pequenos aplicativos para computador, cada um focado em resolver um problema da rotina: organizar arquivos, registrar informações ou facilitar uma tarefa repetitiva.',
    tags: ['Azure', 'SQL', '.NET / WPF'],
    color: 'paper',
  },
]

const skills = [
  'Power BI',
  'Python',
  'SQL',
  'Azure',
  'Power Query',
  'VBA',
  'SharePoint',
  '.NET / WPF',
]

function ArrowUpRight() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  )
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          Pedro
          <br />
          Coronel
        </a>

        <nav aria-label="Navegação principal">
          <a href="#projetos">projetos</a>
          <a href="#sobre">sobre</a>
          <a href="#contato">contato</a>
        </nav>

        <div className="availability">
          <i /> disponível para projetos
        </div>
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              dados, automação & sistemas
            </p>
            <h1 id="hero-title">
              Dados que
              <br />
              viram <em>ação.</em>
            </h1>
            <p className="intro">
              Desenvolvo soluções de dados, automações e sistemas para
              transformar processos complexos em informação clara e decisões mais
              inteligentes.
            </p>
            <a className="text-link" href="#projetos">
              ver soluções <ArrowUpRight />
            </a>
          </div>

          <div className="hero-art" role="img" aria-label="Gráfico ilustrativo de uma operação que sofre uma queda por um problema e se recupera após um ajuste.">
            <svg viewBox="0 0 440 440" fill="none">
              <path className="regression-grid" d="M48 160H408M48 270H408" />
              <path className="regression-axes" d="M48 60V380H408" />
              <g className="regression-labels">
                <text x="48" y="42">RESULTADO</text>
                <text x="408" y="405" textAnchor="end">TEMPO</text>
                <text x="408" y="82" textAnchor="end">recuperação ↑</text>
                <text x="48" y="405">dados observados</text>
              </g>
              <path className="regression-line" d="M60 151C109 162 133 181 166 204S224 269 252 288S302 252 326 218S371 151 402 122" />
              <path className="event-guide problem-guide" d="M252 288V360" />
              <path className="event-guide recovery-guide" d="M326 218V116" />
              <text className="event-label problem-label" x="252" y="377" textAnchor="middle">problema</text>
              <text className="event-label recovery-label" x="326" y="105" textAnchor="middle">ajuste</text>
            </svg>
          </div>
        </section>

        <section className="ticker" aria-label="Especialidades">
          <span>dados + automação + resultado</span>
          <b>✳</b>
          <span>dados + automação + resultado</span>
          <b>✳</b>
          <span>dados + automação + resultado</span>
        </section>

        <section className="projects section" id="projetos" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / soluções selecionadas</p>
              <h2 id="projects-title">Do dado à solução.</h2>
            </div>
            <p className="section-note">
              Tecnologia aplicada a problemas
              <br />
              reais do dia a dia.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={'project-card ' + project.color}
                key={project.number}
              >
                <div className="project-info">
                  <div className="project-meta">
                    <p className="project-type">{project.type}</p>
                    <span className="project-index" aria-hidden="true">{project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">02 / um pouco sobre</p>
          </div>

          <div className="about-content">
            <h2 id="about-title">Organizo o caos dos dados para <em>revelar o que importa.</em></h2>
            <div>
              <p>
                Atuo na interseção entre dados, negócios e tecnologia. Crio
                dashboards, integrações e automações que ajudam equipes a
                acompanhar resultados e trabalhar com mais clareza.
              </p>
              <p>
                Minha base está em Power BI, Python, SQL, Azure e ferramentas
                Microsoft. Também estou expandindo esse repertório com
                desenvolvimento .NET e WPF.
              </p>
              <a
                className="text-link"
                href="https://wa.me/556592806043"
                target="_blank"
                rel="noreferrer"
              >
                vamos conversar <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="toolbox section" aria-labelledby="toolbox-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / caixa de ferramentas</p>
              <h2 id="toolbox-title">As ferramentas<br />por trás das ideias.</h2>
            </div>
          </div>

          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={skill}>
                <b aria-hidden="true">0{index + 1}</b>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer" id="contato">
        <div>
          <p className="eyebrow">04 / contato</p>
          <h2>
            Vamos tirar
            <br />
            <em>ideias do papel.</em>
          </h2>
        </div>

        <div className="footer-contact">
          <p className="contact-label">Tem uma ideia em mente?</p>
          <a href="mailto:pedrogcoronel@outlook.com">
            <span>pedrogcoronel@outlook.com</span> <ArrowUpRight />
          </a>
          <div className="socials">
            <a
              href="https://github.com/wrkcoronel?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/pedrogcoronel/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pedro Coronel</span>
          <span>data · automation · systems</span>
          <a href="#top">voltar ao topo ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
