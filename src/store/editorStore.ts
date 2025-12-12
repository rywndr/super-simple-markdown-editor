import { create } from 'zustand'

interface EditorState {
  markdown: string
  setMarkdown: (markdown: string) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  markdown: '# Hello World\n\nStart writing markdown here...',
  setMarkdown: (markdown) => set({ markdown }),
}))
