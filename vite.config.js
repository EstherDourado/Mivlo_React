import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Plugin para duplicar index.html como 404.html para SPAs funcionarem sem erro no GitHub Pages
const spa404Plugin = () => ({
  name: 'spa-404-plugin',
  closeBundle() {
    const distDir = path.resolve(__dirname, 'dist')
    const indexPath = path.join(distDir, 'index.html')
    const notFoundPath = path.join(distDir, '404.html')
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath)
      console.log('✓ 404.html gerado com sucesso para suporte a SPA no GitHub Pages')
    }
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), spa404Plugin()],
    // Em produção no GitHub Pages utiliza o subcaminho '/Mivlo_React/' (ou via variável VITE_BASE_PATH)
    // Em desenvolvimento local roda normalmente na raiz '/'
    base: env.VITE_BASE_PATH || (mode === 'production' ? '/Mivlo_React/' : '/'),
  }
})
