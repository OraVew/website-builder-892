import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '../contexts/AuthContext'
import { WorkspaceProvider } from '../contexts/WorkspaceContext'
import VendorWebsite from '../pages/vendor-websites/VendorWebsite'
import '../index.css'

// Set workspace ID in localStorage and window context for standalone site
// This allows WorkspaceProvider to know about the workspace without authentication
if (typeof window !== 'undefined') {
  localStorage.setItem('workspaceId', '892');
  localStorage.setItem('currentWorkspaceId', '892');
  (window as any).__WORKSPACE_CONTEXT__ = {
    workspaceId: 892,
    workspaceName: "Nia’s Purpose LLC"
  };
}

// Create a QueryClient instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <WorkspaceProvider>
              <VendorWebsite />
            </WorkspaceProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
)
