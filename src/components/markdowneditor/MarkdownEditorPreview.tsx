import ReactMarkdown from 'react-markdown';
import Header from './MarkdownEditorHeader'
import { useMarkdownContext } from '../../context/MarkdownContext';
import type { PreviewPropTypes } from '../../lib/types';

export default function MarkdownEditorPreview({ words, characters }: PreviewPropTypes) {

  const { markdown } = useMarkdownContext();
  const title = "Preview"

  return (
    <section className="markdownpreview">
      <div className="p-8 h-4/5">
        <div className="mx-4">
          <Header title={title} words={words} characters={characters} />
        </div>
        <div className="rounded-lg border-2 border-black h-full w-full p-4">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
