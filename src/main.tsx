import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ?preview=<name> renders an in-progress scaffold or mock instead of the
// live site, so it can be checked without swapping files back and forth.
const PREVIEWS: Record<string, ReturnType<typeof lazy>> = {
  snap: lazy(() => import('./SnapPreview.tsx')),
}
const previewName = new URLSearchParams(window.location.search).get('preview')
const Preview = previewName ? PREVIEWS[previewName] : undefined

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {Preview ? (
      <Suspense fallback={null}>
        <Preview />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
)
