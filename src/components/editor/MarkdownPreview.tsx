import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEditorStore } from '@/store/editorStore'

export function MarkdownPreview() {
  const { markdown } = useEditorStore()

  return (
    <div className="h-full w-full overflow-auto bg-background p-4">
      <article className="prose prose-sm dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  )
}
