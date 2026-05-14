import { useState } from 'react'
import './App.css'
import ResumenSchrub from './docs/ResumenSchrub.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [view, setView] = useState('home')
  const showResumen = () => setView('resumen')
  const showHome = () => setView('home')
  const showEstructura = () => setView('estructura')

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" type="button" onClick={showHome}>
          Informe Schrub
        </button>
        <nav className="nav">
          <button
            className={view === 'home' ? 'nav-link active' : 'nav-link'}
            type="button"
            onClick={showHome}
          >
            Home
          </button>
          <button
            className={view === 'resumen' ? 'nav-link active' : 'nav-link'}
            type="button"
            onClick={showResumen}
          >
            Resumen
          </button>
          <button
            className={view === 'estructura' ? 'nav-link active' : 'nav-link'}
            type="button"
            onClick={showEstructura}
          >
            Estructura
          </button>
        </nav>
      </header>

      <main className="content">
        {view === 'home' && (
          <Home onShowResumen={showResumen} onShowEstructura={showEstructura} />
        )}

        {view === 'resumen' && (
          <section className="doc-shell">
            <aside className="doc-nav">
              <h3>Secciones</h3>
              <ul>
                <li className="active">01 Resumen</li>
                <li>02 Marco</li>
                <li>03 Delitos</li>
                <li>04 Comparacion</li>
                <li>05 Responsabilidades</li>
                <li>06 Datos</li>
                <li>07 Conclusiones</li>
                <li>08 Prompts</li>
              </ul>
            </aside>
            <div className="doc-panel">
              <p className="doc-meta">Actualizado · 14 may 2026</p>
              <ResumenSchrub />
            </div>
          </section>
        )}

        {view === 'estructura' && (
          <section className="structure">
            <h2>Estructura del informe</h2>
            <div className="structure-grid">
              <div>
                <h3>Documento</h3>
                <p>
                  Cada archivo de docs_schrub es un componente. El markdown es la
                  fuente de verdad.
                </p>
              </div>
              <div>
                <h3>Renderizado</h3>
                <p>React consume el markdown y lo presenta con estilos.</p>
              </div>
              <div>
                <h3>Mantenimiento</h3>
                <p>Editar un archivo actualiza la vista sin tocar React.</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
