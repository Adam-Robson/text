export interface MarkdownContextPropTypes {
  markdown: string | undefined;
  setMarkdown: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface HeaderPropTypes {
  words: number;
  characters: number;
  title: string;
}

export interface PreviewPropTypes {
  words: number;
  characters: number;
}

export interface EditorPropTypes {
  words: number;
  setWords: React.Dispatch<React.SetStateAction<number>>,
  characters: number;
  setCharacters: React.Dispatch<React.SetStateAction<number>>,
  handleWordCount: (typedString: string | null | undefined) => number | undefined,
  handleCharacterCount: (typedString: string) => number
}

export type TextAlignType = "left" | "right" | "center" | "justify" | "initial" | "inherit";

export interface TextPreviewPropTypes {
  title: string;
  font: string;
  align: TextAlignType | undefined;
  textarea: string;
}

export interface TextEditorPropTypes {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
  align?: TextAlignType;
  setAlign: React.Dispatch<React.SetStateAction<TextAlignType | undefined>>;
  textarea: string;
  setTextarea: React.Dispatch<React.SetStateAction<string>>;
}

export interface ToggleSwitchProps {
  onToggle: (isChecked: boolean) => void;
}
