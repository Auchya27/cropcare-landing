import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'

const client = new QueryClient()


createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={client}>
      <Router>
        <App />
      </Router>
      
    </QueryClientProvider>

)
