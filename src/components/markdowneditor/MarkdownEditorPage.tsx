import { useState } from 'react'
import Preview from './MarkdownEditorPreview'
import Editor from './MarkdownEditorEditor'

export default function MarkdownEditorPage() {
  const [words, setWords] = useState<number>(0)
  const [characters, setCharacters] = useState<number>(0)

  function handleWordCount(wordString: string |
    undefined | null) {
    if (wordString) {
      return wordString.match(/(\w+)/g)?.length;
    }
    return 0;
  }

  function handleCharacterCount(characterString: string) {
    return characterString.length;
  }

  return (
    <section className="markdownpage h-full">
      <Editor
        words={words}
        setWords={setWords}
        characters={characters}
        setCharacters={setCharacters}
        handleWordCount={handleWordCount}
        handleCharacterCount={handleCharacterCount}
      />
      <Preview
        words={words}
        characters={characters}
      />
    </section>
  )
}
