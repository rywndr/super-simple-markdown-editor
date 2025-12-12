import { createFileRoute } from '@tanstack/react-router'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Toolbar } from '@/components/editor/Toolbar'
import { EditorPane } from '@/components/editor/EditorPane'
import { MarkdownPreview } from '@/components/editor/MarkdownPreview'

export const Route = createFileRoute('/write')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col h-[calc(100vh-73px)]">
      <Toolbar />
      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel defaultSize={50} minSize={30}>
            <EditorPane />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={30}>
            <MarkdownPreview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
