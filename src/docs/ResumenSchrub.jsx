import ReactMarkdown from 'react-markdown'
import resumenSource from '../../docs_schrub/01_resumen_schrub.md?raw'

function ResumenSchrub() {
  return (
    <article className="doc">
      <ReactMarkdown>{resumenSource}</ReactMarkdown>
    </article>
  )
}

export default ResumenSchrub
