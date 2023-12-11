import { useState, useContext, createContext } from 'react';
import type { MarkdownContextPropTypes } from '../lib/types';

const MarkdownContext = createContext<MarkdownContextPropTypes | undefined>(undefined);

export function MarkdownProvider({ children }: { children: React.ReactNode }) {
  const [markdown, setMarkdown] = useState<string | undefined>('');

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  )
}

export const useMarkdownContext = () => {
  const context = useContext(MarkdownContext);
  if (context === undefined) {
    throw new Error('useMarkdownContext must be used within a MarkdownProvider');
  }
  return context
}
