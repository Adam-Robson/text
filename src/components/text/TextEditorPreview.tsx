import type { TextPreviewPropTypes } from '../../lib/types'

export default function TextEditorPreview({
  title,
  font,
  align,
  textarea }: TextPreviewPropTypes) {
  return (
    <div className="textpreview p-8">
      <div className={`${font}`} style={{ textAlign: align ?? undefined }}>
        <h2 className="title text-3xl">{title}</h2>
        <p className="body text-xl">{textarea}</p>
      </div>
    </div>
  );
}
