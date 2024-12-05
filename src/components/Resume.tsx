import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
//import "./Pdf.scss";
 
interface IProps {
  pdfUrl: string;
}
 
const Pdf = ({ pdfUrl }: IProps): JSX.Element => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
  const [numOfPages, setNumOfPages] = useState<number>(0);
 
  const onLoadSuccess = ({ numPages }: { numPages: number }): void => setNumOfPages(numPages);
 
  return (
    <Document file={pdfUrl} onLoadSuccess={onLoadSuccess}>
      {Array(numOfPages)
        .fill(null)
        .map((_, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
    </Document>
  );
};
 
export default Pdf;
