import { useState } from "react"
import MarkdownEditorPage from "./markdowneditor/MarkdownEditorPage"
import TextEditorPage from "./text/TextEditorPage"
import ToggleSwitch from "./ToggleSwitch";

export default function Home() {
  const [view, setView] = useState<boolean>(true);

  function toggleView() {
    setView(!view);
  }

  return (
    <section className="min-h-screen max-w-screen">
      {view ? <TextEditorPage /> : <MarkdownEditorPage />}
      <div className="absolute bottom-6 left-6 hover:cursor-pointer">
        <ToggleSwitch onToggle={toggleView} />
      </div>
    </section>
  )
}
