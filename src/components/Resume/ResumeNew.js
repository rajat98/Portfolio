import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/RAJAT-PAWAR-PERSONAL-RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />


        <Row className="resume">
          <GoogleDocViewer docId={"1y3EhGsbLFXNk6LP9sJBFBOjjS48pQAEVazTt7-wtIjQ" }  className="d-flex justify-content-center" ><Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} /></GoogleDocViewer>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

class GoogleDocViewer extends React.Component {
  render() {
    const { docId } = this.props;
    const googleDocsUrl = `https://docs.google.com/viewer?url=https://docs.google.com/document/d/${docId}/export?format=pdf&embedded=true`;

    return (
        <div>
          <iframe src={googleDocsUrl} style={{ width: '1400px', height: '1100px', border: 'none' }} title="Google Doc Viewer"  className="d-flex justify-content-center" />
        </div>
    );
  }
}

export default ResumeNew;
