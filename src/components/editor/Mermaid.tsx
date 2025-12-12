import mermaid from 'mermaid'
import { useEffect, useState } from 'react'
import { useTheme } from '@/components/theme-provider'

interface MermaidProps {
  chart: string
}

export function Mermaid({ chart }: MermaidProps) {
  const [svg, setSvg] = useState<string>('')
  const { theme } = useTheme()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const renderChart = async () => {
      try {
        const currentTheme =
          theme === 'system'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
              ? 'dark'
              : 'default'
            : theme === 'dark'
              ? 'dark'
              : 'default'

        mermaid.initialize({
          startOnLoad: false,
          theme: currentTheme,
          securityLevel: 'loose',
          suppressErrorRendering: true,
        })

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
        const { svg } = await mermaid.render(id, chart)
        setSvg(svg)
        setError(null)
      } catch (err) {
        // Mermaid throws incalid syntax error which happens often whilst typing
        console.debug('Mermaid render error:', err)
        setError('Invalid Mermaid syntax')
      }
    }

    // Debounce rendering to avoid flashing errors whilst typing
    const timeoutId = setTimeout(renderChart, 500)
    return () => clearTimeout(timeoutId)
  }, [chart, theme])

  if (error) {
    return (
      <div className="p-4 border border-destructive/50 rounded bg-destructive/10 text-destructive text-sm font-mono my-4">
        <p className="font-bold mb-2">Mermaid Error:</p>
        <pre className="whitespace-pre-wrap text-xs">{chart}</pre>
      </div>
    )
  }

  return (
    <div
      className="flex justify-center my-8 bg-background overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
