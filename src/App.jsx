import './App.css'

// Troque estes dados para personalizar o portfólio.
const projects = [
  { number: '01', title: 'Analytics Hub', type: 'Business intelligence', description: 'Dashboards e indicadores em Power BI para transformar dados operacionais em decisões mais rápidas.', tags: ['Power BI', 'SQL', 'DAX'], color: 'gold' },
  { number: '02', title: 'Data Flow', type: 'Automação e ETL', description: 'Integrações e rotinas de tratamento de dados conectando planilhas, ERP, SharePoint e relatórios.', tags: ['Python', 'Power Query', 'APIs'], color: 'ink' },
  { number: '03', title: 'Delivery Control', type: 'Business systems', description: 'Sistema de controle de entregas integrando diferentes áreas e dando visibilidade ao andamento das operações.', tags: ['Azure', 'SQL', '.NET / WPF'], color: 'paper' },
]

const skills = ['Power BI', 'Python', 'SQL', 'Azure', 'Power Query', 'VBA', 'SharePoint', '.NET / WPF']

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Voltar ao início">[ Pedro<span>Coronel</span> ]</a>
        <nav aria-label="Navegação principal"><a href="#projetos">projetos</a><a href="#sobre">sobre</a><a href="#contato">contato</a></nav>
        <div className="availability"><i /> disponível para projetos</div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">data & automation engineer / portfolio</p>
          <h1>Dados que viram<br /><em>ação.</em></h1>
          <p className="intro">Desenvolvo soluções de dados, automações e sistemas para transformar processos complexos em informação clara e decisões mais inteligentes.</p>
          <a className="text-link" href="#projetos">ver soluções <ArrowUpRight /></a>
        </div>
        <div className="hero-art" aria-label="Ilustração abstrata de uma janela de código">
          <div className="sun" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="window-card">
            <div className="window-bar"><span /><span /><span /><b>pipeline.py</b></div>
            <pre><code>{'pipeline = {\n  source: [\'ERP\', \'Sheets\'],\n  transform: \'Python + SQL\',\n  insight: True\n}'}</code></pre>
            <div className="window-foot">// dados em movimento_</div>
          </div>
          <div className="stamp">EST. 2018<br /><strong>✳</strong></div>
        </div>
      </section>

      <section className="ticker" aria-label="Especialidades"><span>dados + automação + resultado</span><b>✳</b><span>dados + automação + resultado</span><b>✳</b><span>dados + automação + resultado</span></section>

      <section className="projects section" id="projetos">
        <div className="section-heading"><p className="eyebrow">01 / soluções selecionadas</p><p className="section-note">Tecnologia aplicada a problemas<br />reais do dia a dia.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={'project-card ' + project.color} key={project.number}>
              <div className="project-visual"><span className="project-number">{project.number}</span><span className="visual-mark">✳</span><span className="project-label">{project.title.toLowerCase()} / case study</span></div>
              <div className="project-info"><p className="project-type">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href="#contato">conhecer projeto <ArrowUpRight /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="section-heading"><p className="eyebrow">02 / um pouco sobre</p></div>
        <div className="about-content"><h2>Organizo o caos dos dados para revelar o que importa.</h2><div><p>Atuo na interseção entre dados, negócios e tecnologia. Crio dashboards, integrações e automações que ajudam equipes a acompanhar resultados e trabalhar com mais clareza.</p><p>Minha base está em Power BI, Python, SQL, Azure e ferramentas Microsoft. Também estou expandindo esse repertório com desenvolvimento .NET e WPF.</p><a className="text-link" href="mailto:pedrogcoronel@outlook.com">vamos conversar <ArrowUpRight /></a></div></div>
      </section>

      <section className="toolbox section"><div className="section-heading"><p className="eyebrow">03 / caixa de ferramentas</p></div><div className="skill-list">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></section>

      <footer className="footer" id="contato"><div><p className="eyebrow">04 / contato</p><h2>Vamos tirar<br /><em>ideias do papel.</em></h2></div><div className="footer-contact"><a href="mailto:pedrogcoronel@outlook.com">pedrogcoronel@outlook.com <ArrowUpRight /></a><div className="socials"><a href="https://github.com/wrkcoronel?tab=repositories" target="_blank" rel="noreferrer">github</a><a href="https://www.linkedin.com/in/pedrogcoronel/" target="_blank" rel="noreferrer">linkedin</a></div></div><div className="footer-bottom"><span>© 2025 Pedro Coronel</span><span>data · automation · systems</span><a href="#top">voltar ao topo ↑</a></div></footer>
    </main>
  )
}

export default App
