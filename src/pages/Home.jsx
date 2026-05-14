function Home({ onShowResumen, onShowEstructura }) {
  return (
    <section className="home">
      <header className="home-hero">
        <p className="eyebrow">Informe Schrub · Unidad 2</p>
        <h1>Una lectura clara, directa y verificable.</h1>
        <p className="lead">
          Un informe construido a partir de fuentes internas. Cada seccion es un
          componente que nace del contenido en docs_schrub.
        </p>
        <div className="hero-actions">
          <button className="btn primary" type="button" onClick={onShowResumen}>
            Ver resumen
          </button>
          <button className="btn ghost" type="button" onClick={onShowEstructura}>
            Ver estructura
          </button>
        </div>
      </header>

      <section className="home-grid">
        <article className="card">
          <h2>Resumen ejecutivo</h2>
          <p>
            Sintesis de hallazgos y contexto general. Primer punto de lectura
            recomendado.
          </p>
          <span className="tag">01_resumen</span>
        </article>
        <article className="card">
          <h2>Marco conceptual</h2>
          <p>Definiciones y contexto historico para comprender el informe.</p>
          <span className="tag">02_marco</span>
        </article>
        <article className="card">
          <h2>Delitos y comparacion</h2>
          <p>Analisis de hechos y comparativas para sustentar conclusiones.</p>
          <span className="tag">03_04</span>
        </article>
        <article className="card">
          <h2>Datos y responsabilidades</h2>
          <p>Fuentes, cifras clave y responsables identificados.</p>
          <span className="tag">05_06</span>
        </article>
      </section>

      <section className="home-steps">
        <div>
          <h3>Como se arma</h3>
          <p>
            Los contenidos viven en docs_schrub. Cada archivo se renderiza como
            componente.
          </p>
        </div>
        <div>
          <h3>Como se publica</h3>
          <p>
            React consume el markdown y lo presenta con estilos consistentes para
            lectura.
          </p>
        </div>
        <div>
          <h3>Como se mantiene</h3>
          <p>Actualizar un markdown actualiza automaticamente la vista.</p>
        </div>
      </section>
    </section>
  )
}

export default Home
