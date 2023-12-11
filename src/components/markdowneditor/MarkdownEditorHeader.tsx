import type { HeaderPropTypes } from "../../lib/types";

export default function MarkdownEditorHeader({ words, characters, title }: HeaderPropTypes) {

  const subtitle = `${words} ${words === 1 ? 'word' : 'words'} | ${characters} ${characters === 1 ? 'character' : 'characters'}`

  return (
    <header className="flex justify-between items-baseline mb-8">
      {title && <p className="text-lg sm:text-xl md:text-2xl font-normal tracking-tighter subpixel-antialiased">{title}</p>}
      {subtitle && <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-tighter subpixel-antialiased">{subtitle}</p>}
    </header>
  );
}
