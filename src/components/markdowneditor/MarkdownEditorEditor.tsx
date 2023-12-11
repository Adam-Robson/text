import React from 'react'
import { useMarkdownContext } from '../../context/MarkdownContext';
import { EditorPropTypes } from '../../lib/types';
import Header from './MarkdownEditorHeader'

export default function MarkdownEditorEditor({
  words,
  characters,
  setWords,
  setCharacters,
  handleWordCount,
  handleCharacterCount
}: EditorPropTypes) {

  const { markdown, setMarkdown } = useMarkdownContext();

  function handleMarkdownUpdate(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const typedValue = event.target.value;
    setMarkdown(typedValue);
    setWords(handleWordCount(typedValue) ?? 0);
    setCharacters(handleCharacterCount(typedValue));
  }

  function downloadNewFile() {
    const link = document.createElement('a');
    const file = new Blob([markdown as BlobPart], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = 'untitled_markdown_file.md';
    link.click()
    URL.revokeObjectURL(link.href);
  }

  const title = "Editor"


  return (
    <div className="markdowneditor">
      <section className="p-8 h-4/5 w-full">
        <Header words={words} characters={characters} title={title} />
        <textarea
          id="userinput"
          name="userinput"
          className="rounded-lg border-2 border-black h-full w-full p-4"
          cols={30}
          rows={10}
          value={markdown}
          onChange={handleMarkdownUpdate}
        />
        <div className="flex justify-center">
          <button
            className="download"
            onClick={downloadNewFile}
          >download</button>
        </div>
      </section>
    </div>
  )
}
