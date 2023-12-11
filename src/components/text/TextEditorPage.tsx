import { useState } from 'react';
import TextEditorPreview from './TextEditorPreview';
import TextEditorEditor from './TextEditorEditor';
import type { TextAlignType } from '../../lib/types'

export default function TextEditorPage() {
  const [title, setTitle] = useState<string>('');
  const [font, setFont] = useState<string>('');
  const [align, setAlign] = useState<TextAlignType | undefined>('left');
  const [textarea, setTextarea] = useState<string>('');


  return (
    <section className="textpage h-full">
      <TextEditorPreview
        title={title}
        font={font}
        align={align}
        textarea={textarea}
      />

      <TextEditorEditor
        title={title}
        setTitle={setTitle}
        font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
        textarea={textarea}
        setTextarea={setTextarea}
      />
    </section>
  );
}
