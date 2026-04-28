import { Button } from "@components/form";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import {
  StyledFirstTable,
  StyledHallTicket,
  StyledInstruction,
  StyledPage,
} from "../style";
import govtlogo from "../../../assets/images/logo_endless_pvtltd.png";
import authorized from "../../../assets/images/authorized_sign.png";
import NTA from "../../../assets/images/nucleon_tn.png";
import { useProtectedImages } from "@utils/useProtectedImages";

export const AdmitCardPDF = ({ record }) => {

  const componentRef = useRef();

  const images = useProtectedImages(record);

const handleDownload = async () => {
  const pdf = new jsPDF("p", "mm", "a4");

  const pages = ["page-1", "page-2", "page-3"];

  for (let i = 0; i < pages.length; i++) {
    const element = document.getElementById(pages[i]);

    if (!element) continue;

    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.5);

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    if (i !== 0) pdf.addPage();

    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
  }

  pdf.save("AdmitCard.pdf");
};

  const showHeader = () => (
    <div class="neet-header">
      <div class="header-box left">
        <img src={govtlogo} alt="Govt Logo" />
      </div>

      <div class="header-box center">
        <h2>NEET MOCK EXAM 2026</h2>
        <h3>NEET (UG) - 2026</h3>
      </div>

      <div class="header-box right">
        <img src={NTA} alt="NTA Logo" class="nta" />
      </div>
    </div>
  );

  const showFooter = () => (
    <div className="footer">
      <p>Application Number: 08202603240001</p>
      <p>Roll Number: NTN20260324740001 </p>
      <p>Page 1 of 3</p>
    </div>
  );
  return (
    <StyledHallTicket >
      <div className="btn-style">
        <Button
          onClick={handleDownload}
          style={{ background: "#40bc3e", color: "#f5e607" }}
        >
          Download Hall Ticket
        </Button>
      </div>
      <div id="pdf-page" ref={componentRef}>
        <div id="page-1" className="pdf-single-page">
          {showHeader()}

          <StyledFirstTable>
            <table className="tableOne">
              <tbody>
                {/* Row1 */}
                <tr>
                  <th>Roll Number:</th>
                  <td>{record?.registerNumber}</td>
                  <th>Application Number:</th>
                  <td>{record?.hallTicketNumber}</td>
                  <td rowSpan="4" className="image-cell">
                    <img src={images?.profile} alt="photo" />
                  </td>
                </tr>

                {/* Row2 */}
                <tr>
                  <th>Candidate's Name:</th>
                  <td>{record?.name}</td>
                  <th>Father's Name :</th>
                  <td>{record?.parentName}</td>
                </tr>

                {/* Row3 */}
                <tr>
                  <th>Gender:</th>
                  <td>{record?.gender}</td>
                  <th>Date of Birth:</th>
                  <td>{record?.dob}</td>
                </tr>

                {/* Row4 */}
                {/* <tr>
                <th>Category:</th>
                <td>GENERAL</td>
                <th>State of Eligibility:</th>
                <td>TAMIL NADU</td>
              </tr> */}

                {/* Row5 */}
                {/* <tr>
                <th>Person with Disability (PwD)*:</th>
                <td>No</td>
                <th>Scribe required*:</th>
                <td>NA</td>
              </tr> */}

                {/* Row6 */}
                {/* <tr>
                <th>Type of Disability:</th>
                <td className="none">NA</td>
                <td className="none"></td>
                <td></td>
              </tr> */}

                {/* Row7 */}
                <tr className="image-col">
                  <td colSpan={2}>
                    <img src={images?.barcode} alt="barcode" />
                  </td>
                  <td colSpan={2}>
                    <img src={images?.signature} alt="signature" />
                  </td>
                </tr>

                {/* Row8 */}
                <tr>
                  <th style={{ textAlign: "center" }} colSpan={5}>
                    Test Details{" "}
                  </th>
                </tr>

                {/* Row9 */}
                <tr>
                  <th colSpan={2}>Question Paper Medium</th>
                  <td colSpan={3}>ENGLISH AND TAMIL</td>
                </tr>

                {/* Row10 */}
                <tr>
                  <th colSpan={2}>Date of Examination</th>
                  <td colSpan={3}>29 March 2026 (Sunday) </td>
                </tr>

                {/* Row11 */}
                <tr>
                  <th colSpan={2}>Reporting/Entry Time at Centre</th>
                  <td colSpan={3}>11:00 AM </td>
                </tr>

                {/* Row12 */}
                <tr>
                  <th colSpan={2}>Gate Closing Time of Centre</th>
                  <td colSpan={3}>01.30 PM</td>
                </tr>

                {/* Row13 */}
                <tr>
                  <th colSpan={2}>Timing of Test</th>
                  <td colSpan={3}>
                    02.00 PM to 05.20 PM (Indian Standard Time)
                  </td>
                </tr>

                {/* Row14 */}
                <tr>
                  <th colSpan={2}>Test Centre No</th>
                  <td colSpan={3}>SMRV001</td>
                </tr>

                {/* Row15 */}
                <tr>
                  <th colSpan={2}>Test Centre Name</th>
                  <td colSpan={3}>SMRV HIGHER SECONDARY SCHOOL</td>
                </tr>

                {/* Row16 */}
                <tr>
                  <th colSpan={2}>Test Centre Address (Venue of Test)</th>
                  <td colSpan={3}>SMRV Higher Secondary School, Vadasery</td>
                </tr>

                {/* Row17 */}
                <tr className="image-sign">
                  <th colSpan={5} style={{ textAlign: "center" }}>
                    <img src={authorized} alt="Authorized Signature" />
                    <h3>Senior Director</h3>
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="self-declare">
              <h4>SELF DECLARATION (UNDERTAKING)</h4>
              <p>
                I, -----------------------------------, resident
                of-----------------------------,do hereby, declare the
                following:
              </p>
              <p>
                1. I have read the Instructions, Guidelines, Information
                Bulletin, Instructions, and Notices related to this examination
                available on the website{" "}
                <a href="https://nucleontn.in/" target="_blank">
                  https://nucleontn.in/
                </a>{" "}
              </p>
              <p>
                2. I have read the detailed{" "}
                <strong>“IMPORTANT INSTRUCTIONS FOR CANDIDATES”</strong>
                as given on Page-3 and I undertake to abide by the same
              </p>
            </div>

            <div class="neet-header">
              <div class="header-box left">
                <div class="left-text">
                  <p className="sign-area">
                    Candidate’s Photo (Same as uploaded on the Application Form
                    to be affixed before reaching the Centre)
                  </p>
                </div>
              </div>

              <div class="header-box center">
                <p className="sign-area">
                  Candidate’s left-hand thumb Impression (To be affixed before
                  reaching the Centre)
                </p>
              </div>

              <div class="header-box right">
                <p className="sign-area">
                  Candidate’s Signature (To be signed on the Day of Examination
                  in the presence of the Invigilator only)
                </p>
              </div>
            </div>
            <h5>
              The above undertaking has to be filled up in advance before
              reaching the Centre, except for the candidate’s signature which
              has to be affixed in the presence of the Invigilator
            </h5>
            <h5>
              *Disclaimer:
              <span>
                The eligibility in the examination under the category "Persons
                with Disability" is purely provisional to appear in the
                examination and does not guarantee a seat to the candidate under
                the respective category. The candidature for admission to MBBS
                program under PwD category under various colleges will be
                governed as per relevant NMC guidelines which are given under
                Appendix-H1 of Guidelines regarding admission of students with
                "specified disabilities" under the Right of Persons with
                Disabilities Act, 2016 with respect to admission in MBBS course
                during post-examination and counselling process issued on
                01.08.2023. (Please refer Information Bulletin)
              </span>
            </h5>
          </StyledFirstTable>
        </div>
        {/* {showFooter()} */}

        <div id="page-2" className="pdf-single-page">
          {showHeader()}
          <StyledPage>
            <div className="post-card">
              <h5>
                Please paste a Postcard Size (4’’ x 6’’) colour Photograph here
                before reaching the Centre. (The Candidate and the Invigilator
                are to sign across the photograph as indicated in the
                instructions below.)
              </h5>
            </div>
          </StyledPage>

          <table className="locationTable">
            <tr>
              <th>Date of Examination:</th>
              <th>29 March 2026</th>
              <th>Timing </th>
              <th>2:00 PM - 5:20 PM</th>
            </tr>
            <tr>
              <th>Roll Number</th>
              <th>{record?.registerNumber}</th>
              <th>Application Number</th>
              <th>{record?.hallTicketNumber}</th>
            </tr>
            <tr>
              <th>Candidate Name</th>
              <th>{record?.name}</th>
              <th>Father's Name</th>
              <th>{record?.parentName}</th>
            </tr>
            <tr>
              <th>Language</th>
              <th>ENGLISH AND TAMIL</th>
            </tr>
            <tr>
              <th colSpan={2}>
                <p className="small-font">Signature of Invigilator</p>
              </th>
              <th colSpan={2}>
                <p className="small-font">
                  Candidate Signature (To be signed on the Day of Examination,
                  in the presence of the Invigilator only)
                </p>
              </th>
            </tr>
          </table>

          <div className="instruction-box">
            <pre>
              <h4>INSTRUCTIONS FOR CANDIDATES:</h4>
              <br />
              {`a) The Candidate is to paste the latest colored postcard size (4" x 6") photograph of his/her own in the 
 designated space.
b) Invigilator shall ensure that the photograph and signature on this page match with the photograph and signature
 of the Candidate on Page 1 of Admit Card.
c) The Candidate is to sign across the photograph on the left side.
d) The Invigilator should sign across the photograph of the candidate on the right side.
e) It is mandatory for the candidate to bring this page of the Admit Card with a pasted photograph. If he/she doesn't
 bring this, then he/she will not be allowed to sit in the examination,and this shall lead to his/her disqualification.
`}
            </pre>
          </div>
        </div>

        <div id="page-3" className="pdf-single-page">
          {showHeader()}
          <StyledInstruction>
            <h4>IMPORTANT INSTRUCTIONS FOR CANDIDATES </h4>
            <pre>
              {`
1. The candidate must reach the Centre at the time indicated against Reporting/Entry time at the 
   Centre in the Admit Card.
2. No candidate shall be permitted to enter the Centre after the Gate Closing Time.
3. No candidate shall be permitted to leave the Examination Room/Hall before the end of the examination.
4. On completion of the examination, please wait for instructions from Invigilator and do not get up from 
   your seat until advised.and this shall lead to his/her disqualification.
5. All candidates are required to download and carefully read the Instructions given with the Admit Card 
   and strictly adhere to them.
6. This Admit Card consists of three pages - Page 1 contains the Centre details and Self Declaration 
   (Undertaking) form, Page 2 has a Postcard Size Photograph, and Page 3 has Important Instructions
   for Candidates. The candidate must download all three pages.
7. The Admit Card is provisional, subject to satisfying the eligibility conditions as given in the 
   Information Bulletin.
8. Candidates are advised to verify the location of the examination venue in advance. 
   If religion/customs require specific attire,visit the Centre early for checking.
9. No candidate will be allowed to enter without Admit Card, valid ID proof, and proper frisking.
10. Candidates will be permitted to carry only the following items:
     1. Personal transparent water bottle.
     2. Additional photograph same as uploaded on Application Form.
     3. Admit Card with Self Declaration.
     4. Filled Undertaking before reaching Centre.
     5. PwD Certificate and Scribe-related documents, if applicable.
11. Candidate should put their signature and paste photograph properly and ensure thumb impression 
    is clear.
12. Candidate must carry valid Identity proof such as Aadhaar, PAN, Driving License, Voter ID, Passport, 
    School ID etc.
13. PwD candidates must bring valid certificate and related documents if applicable.
14. Candidates are NOT allowed to carry any personal belongings including mobile phones, 
    smart watches, or electronic devices.
15. No rough sheets will be provided. Rough work must be done only in the Test Booklet.
16. No candidate should indulge in unfair practices as exam centres are under CCTV surveillance.
17. After exam, candidates must submit OMR sheet properly signed.
18. No bio-break allowed during first one hour and last half hour of exam.
19. Biometric attendance and frisking will be done multiple times.
20. Candidates using unfair means will face strict action including debarment.
21. Important Advisories:
      1. AI tools are used to detect cheating.
      2. CCTV monitoring is active.
      3. Suspicious candidates are identified even after exam.
      4. AI-based systems monitor exam integrity continuously.
22. Candidates must check official websites regularly for updates.
23. For assistance, contact via email or helpline number
  `}
            </pre>
          </StyledInstruction>
        </div>
      </div>
    </StyledHallTicket>
  );
};
