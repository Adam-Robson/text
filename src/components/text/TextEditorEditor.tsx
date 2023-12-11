import { PiTextAlignLeftDuotone, PiTextAlignCenterDuotone, PiTextAlignRightDuotone } from 'react-icons/pi'
import type { TextEditorPropTypes, TextAlignType } from '../../lib/types'

export default function TextEditorEditor({ title, setTitle, font, setFont, align, setAlign, textarea, setTextarea }: TextEditorPropTypes) {
  return (
    <div className="texteditor p-8">

      <div className="formcontrol">
        <label htmlFor="title" className="caption">Title</label>
        <input name="title" type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} />
      </div>

      <div className="formcontrol">
        <label className="caption">Font</label>
        <select value={font} onChange={(e) => { setFont(e.target.value); }}>
          <option value="--Please choose a font--">{"--Please choose a font--"}</option>
          <option value="josefin">Josefin Sans</option>
          <option value="bills">Stick No Bills</option>
          <option value="neon">Tilt Neon</option>
          <option value="poppins">Poppins</option>
          <option value="roboto">Roboto</option>
          <option value="robotomono">Roboto Mono</option>
          <option value="intertight">Inter Tight</option>
        </select>
      </div>

      <div className="formcontrol">
        <label className="caption">Alignment</label>
        <div className="radiogroup">
          <label>
            <input name="align" type="radio" value="left" checked={align === 'left'} onChange={(e) => { setAlign(e.target.value as TextAlignType); }} />
            <PiTextAlignLeftDuotone size={30} className="hover:cursor-pointer" />
          </label>
          <label>
            <input name="align" type="radio" value="center" checked={align === 'center'} onChange={(e) => { setAlign(e.target.value as TextAlignType); }} />
            <PiTextAlignCenterDuotone size={30} className="hover:cursor-pointer" />
          </label>
          <label>
            <input name="align" type="radio" value="right" checked={align === 'right'} onChange={(e) => { setAlign(e.target.value as TextAlignType); }} />
            <PiTextAlignRightDuotone size={30} className="hover:cursor-pointer" />
          </label>
        </div>
      </div>

      <div className="formcontrol">
        <label className="caption">Text</label>
        <textarea value={textarea} onChange={(e) => { setTextarea(e.target.value); }} style={{ height: '250px' }} />
      </div>

    </div>
  );
}
