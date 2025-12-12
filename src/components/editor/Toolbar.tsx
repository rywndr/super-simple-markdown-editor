import { Button } from '@/components/ui/button'
import {
  Bold,
  Italic,
  Heading,
  List,
  ListOrdered,
  Quote,
  Code,
} from 'lucide-react'

export function Toolbar() {
  return (
    <div className="border-b p-2 flex items-center gap-1 bg-background">
      <Button variant="ghost" size="icon" title="Bold">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Italic">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Heading">
        <Heading className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-2" />

      <Button variant="ghost" size="icon" title="Unordered List">
        <List className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Ordered List">
        <ListOrdered className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-2" />

      <Button variant="ghost" size="icon" title="Blockquote">
        <Quote className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" title="Code Block">
        <Code className="h-4 w-4" />
      </Button>
    </div>
  )
}
