import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'
import { remarkMark } from 'remark-mark-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  vscDarkPlus,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useEditorStore } from '@/store/editorStore'
import { useTheme } from '@/components/theme-provider'
import { useEffect, useState } from 'react'
import { Mermaid } from './Mermaid'

export function MarkdownPreview() {
  const { markdown } = useEditorStore()
  const { theme } = useTheme()
  const [style, setStyle] = useState(vscDarkPlus)

  // Preprocess markdown to ensure block math is handled correctly
  // This adds a newline before $$ if it's at the end of a line preceded by text
  const processedMarkdown = markdown.replace(/([^\n])(\$\$)\s*$/gm, '$1\n$2')

  useEffect(() => {
    const updateStyle = () => {
      if (theme === 'dark') {
        setStyle(vscDarkPlus)
      } else if (theme === 'light') {
        setStyle(oneLight)
      } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light'
        setStyle(systemTheme === 'dark' ? vscDarkPlus : oneLight)
      }
    }

    updateStyle()

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = () => updateStyle()
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
  }, [theme])

  return (
    <div className="h-full w-full overflow-auto bg-background p-4">
      <article className="prose prose-sm dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm, remarkEmoji, remarkMark]}
          rehypePlugins={[
            [rehypeKatex, { strict: false, throwOnError: false }],
            rehypeRaw,
          ]}
          components={{
            pre: ({ children }: any) => <>{children}</>,
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')

              if (!inline && match && match[1] === 'mermaid') {
                return <Mermaid chart={String(children).replace(/\n$/, '')} />
              }

              return !inline ? (
                <SyntaxHighlighter
                  {...props}
                  style={style}
                  language={match ? match[1] : 'text'}
                  PreTag="div"
                  CodeTag="code"
                  className="not-prose rounded-md my-4!"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {processedMarkdown}
        </ReactMarkdown>
      </article>
    </div>
  )
}
