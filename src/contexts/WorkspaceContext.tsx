import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WorkspaceDetails {
  id: number;
  name: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
}

interface WorkspaceContextType {
  currentWorkspace: WorkspaceDetails | null;
  workspaceId: number | null;
  setCurrentWorkspace: (workspace: WorkspaceDetails | null) => void;
  loading: boolean;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export const WorkspaceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentWorkspace, setCurrentWorkspace] = useState<WorkspaceDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize workspace from window context (set in standalone entry)
    if (typeof window !== 'undefined' && (window as any).__WORKSPACE_CONTEXT__) {
      const context = (window as any).__WORKSPACE_CONTEXT__;
      setCurrentWorkspace({
        id: context.workspaceId,
        name: context.workspaceName,
      });
    }
  }, []);

  const value = {
    currentWorkspace,
    workspaceId: currentWorkspace?.id || 892,
    setCurrentWorkspace,
    loading,
  };

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};

export default WorkspaceContext;
