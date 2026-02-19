import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import posthog from 'posthog-js'
posthog.init('phc_rb2CASkCUqxJwyOjpXqzmbvtJXgeNW9mKiF5dw4VxBH', {
  api_host: 'https://app.posthog.com'
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
