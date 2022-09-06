import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import EDResume from '../../images/ElaineDanahyResume.pdf';
import './Resume.css';

const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>Resume</h1>
    <div className="resume">
      <Document file={ EDResume } onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      
    </div>
    <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
 
export default Resume


