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
    <div className="flex flex-col">
      <div className="sticky top-0 z-10 bg-background">
        <Toolbar />
      </div>
      <div className="min-h-[calc(100vh-53px)]">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[calc(100vh-53px)] w-full items-stretch h-auto"
        >
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
