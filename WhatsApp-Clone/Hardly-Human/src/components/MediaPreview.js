import "./MediaPreview.css";
import { CloseRounded } from "@material-ui/icons";

export default function MediaPreview({ src, closePreview }) {
  if (!src) return null;

  return (
    <div className="mediaPreview">
      <CloseRounded onClick={closePreview} />
      <img src={src} alt="Preview" />
    </div>
  );
}
