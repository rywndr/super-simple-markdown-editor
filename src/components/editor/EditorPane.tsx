import { Textarea } from '@/components/ui/textarea'
import { useEditorStore } from '@/store/editorStore'

export function EditorPane() {
  const { markdown, setMarkdown } = useEditorStore()

  return (
    <div className="h-full w-full bg-background">
      <Textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="h-full w-full resize-none border-0 p-4 focus-visible:ring-0 rounded-none font-mono text-sm field-sizing-fixed"
        placeholder="Start writing..."
      />
    </div>
  )
}
