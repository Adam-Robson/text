import { useRef } from 'react';

interface DownloadButtonProps {
  textcontent: string | undefined;
}

export default function DownloadButton({ textcontent }: DownloadButtonProps) {
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  function handleDownload() {
    const contentToDownload = `${textcontent}`;

    const file = new Blob([contentToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(file);

    if (downloadRef.current) {
      downloadRef.current.href = url;
      downloadRef.current.download = 'new_document.txt';
      downloadRef.current.click();
    }

    // Revoke the object URL to free up resources
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
      <a ref={downloadRef} style={{ display: 'none' }} />
    </div>
  );
}
