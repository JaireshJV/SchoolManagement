import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import numToWord from "num-to-text";
import dayjs from "dayjs";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useFetchImageAsBase64 } from "@utils/fetchImageAsBase64";
import { IMG_BASE_URL } from "@request/request";
import { THEME } from "@theme/index";
import { Switch } from "antd";
import { ThemeProvider } from "styled-components";
import * as S from "../style";
import { Flex } from "@components/others";
import { Button } from "@components/form";

const ITEMS_PER_PAGE = 18;

const printStyles = `
@media print {

  @page {
    size: A4;
    margin: 12mm;
  }

  body {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    background: #fff !important;
  }

  /* ❌ Stop browser from breaking tables */
  // table {
  //   page-break-inside: avoid !important;
  //   break-inside: avoid !important;
  // }

  // thead {
  //   display: table-header-group; /* repeat header nicely */
  // }

  // tfoot {
  //   display: table-footer-group;
  // }

  // tr {
  //   page-break-inside: avoid !important;
  //   break-inside: avoid !important;
  // }

  // td, th {
  //   page-break-inside: avoid !important;
  //   break-inside: avoid !important;
  // }

  /* ✔ Only break where YOU want */
  .page-break {
    page-break-before: always !important;
    break-before: page !important;
  }

  .no-print {
    display: none !important;
  }

  .pdf-page {
  margin-bottom: 20mm ;   /* 👈 space between pages */
  position: "relative" ;
}

.table-space{
margin-top : 20px !important ;
}

// .cancelledSeal {
//     position: "absolute",
//     zIndex: 2,
//     margin: auto ,
//     color : blue ,
//     background : green ,
//     fontsize: 100px ,
//   },

}
  
`;

export const HallTicketView = ({ record }) => {
  console.log(record, "recordrecord");

  const [companyProfile, setCompanyProfile] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [qrImage, setQrImage] = useState(null);
  const [signatureImage, setSignatureImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPdfMode, setIsPdfMode] = useState(false);
  const [isExportMode, setIsExportMode] = useState(false);

  const componentRef = useRef();
  const { fetchImageAsBase64 } = useFetchImageAsBase64();

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = printStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const themeColors = {
    primary: isDarkMode ? THEME.primary_color : THEME.secondary_color_dark,
    secondary: isDarkMode ? THEME.primary_color : THEME.secondary_color_dark,
    background: "#ffffff",
    text: "#000000",
    lightText: "#666666",
  };

  useEffect(() => {
    if (record) {
      setCompanyProfile({
        companyname: record.companyname || "",
        address: record.companyaddress || "",
        location: record.companylocation || "",
        state: record.companystate || "",
        pincode: record.companypincode || "",
        district: record.companydistrict || "",
        country: record.companycountry || "",
        gstno: record.companygstno || "",
        code: record.companycode || "",
        email: record.companyemail || "",
        phoneno: record.companyphoneno1 || "",
        bankname: record.companybankname || "",
        account_no: record.companyaccount_no || "",
        branch: record.companybranch || "",
        ifsc_code: record.companyifsc_code || "",
        profile: record.companyprofile || "",
        qr: record.companyqr || "",
        signature: record.companysignature || "",
      });
    }
  }, [record]);

  useEffect(() => {
    if (companyProfile) {
      fetchCompanyImages();
    }
  }, [companyProfile]);

  const fetchCompanyImages = async () => {
    try {
      if (companyProfile?.profile) {
        const profileUrl = `${IMG_BASE_URL}${companyProfile.profile}`;
        const profileBase64 = await fetchImageAsBase64(profileUrl);
        setProfileImage(profileBase64);
      }

      if (companyProfile?.qr) {
        const qrUrl = `${IMG_BASE_URL}${companyProfile.qr}`;
        const qrBase64 = await fetchImageAsBase64(qrUrl);
        setQrImage(qrBase64);
      }

      if (companyProfile?.signature) {
        const signatureUrl = `${IMG_BASE_URL}${companyProfile.signature}`;
        const signatureBase64 = await fetchImageAsBase64(signatureUrl);
        setSignatureImage(signatureBase64);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setIsExportMode(true);
      return Promise.resolve();
    },
    onAfterPrint: () => {
      setIsExportMode(false);
    },
  });

  const amount = Number(record?.roundoff_amount || 0);
  const NumConvert =
    amount === 0
      ? "Zero Rupees Only"
      : !isNaN(amount)
        ? numToWord(amount, "in")
        : "Invalid amount";

  const formattedDate = dayjs(record?.invoice_date).format("DD-MM-YYYY");

  if (!record) {
    return <div>No record data available</div>;
  }

  const handleDownload = async () => {
    setIsPdfMode(true);
    await new Promise((r) => requestAnimationFrame(r));

    const pdf = new jsPDF("p", "mm", "a4");
    const pages = componentRef.current.querySelectorAll(".pdf-page");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 12;
      const usableWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * usableWidth) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", margin, margin, usableWidth, imgHeight);
    }

    pdf.save(`invoice-${record.invoice_no}.pdf`);
    setIsPdfMode(false);
    setIsExportMode(false);
  };

  const hallTicket = record ;

  console.log(hallTicket.dob,'hallTicket');
  
  const renderHeader = () => (
    <>
      <S.Header theme={themeColors}>
        <S.HeaderTitle theme={themeColors}>Tax Invoice</S.HeaderTitle>
      </S.Header>

      {/* <S.CompanySection theme={themeColors}>
        <S.LogoSection theme={themeColors}>
          {profileImage && <S.Logo src={profileImage} alt="Company Logo" />}
        </S.LogoSection>
        <S.CompanyDetails>
          <S.CompanyName theme={themeColors}>
            {record.dob}
          </S.CompanyName>
          {companyProfile.location && (
            <S.DetailText theme={themeColors}>
              {companyProfile.location}
            </S.DetailText>
          )}
          {companyProfile.address && (
            <S.DetailText theme={themeColors}>
              Building/Address: {companyProfile.address}
            </S.DetailText>
          )}
          {companyProfile.district && (
            <S.DetailText theme={themeColors}>
              District: {companyProfile.district}
            </S.DetailText>
          )}
          {companyProfile.state && (
            <S.DetailText theme={themeColors}>
              State: {companyProfile.state}
            </S.DetailText>
          )}
          {companyProfile.pincode && (
            <S.DetailText theme={themeColors}>
              Pincode: {companyProfile.pincode}
            </S.DetailText>
          )}
          {(companyProfile.phoneno || companyProfile.email) && (
            <S.DetailText theme={themeColors}>
              {companyProfile.phoneno && `Phone no.: ${companyProfile.phoneno}`}
              {companyProfile.phoneno && companyProfile.email && " "}
              {companyProfile.email && `Email: ${companyProfile.email}`}
            </S.DetailText>
          )}
          {companyProfile.gstno && (
            <S.DetailText theme={themeColors}>
              <strong>
                GSTIN: {companyProfile.gstno}, State: {companyProfile.code}-
                {companyProfile.state}
              </strong>
            </S.DetailText>
          )}
        </S.CompanyDetails>
      </S.CompanySection> */}

      {/* <S.AddressSection theme={themeColors}>
        <S.BillTo theme={themeColors}>
          <S.SectionTitle theme={themeColors}>Bill To</S.SectionTitle>
          <S.AddressText theme={themeColors} bold large>
            {record.customerName || record.name}
          </S.AddressText>
          {record.address && (
            <S.AddressText theme={themeColors}>{record.address}</S.AddressText>
          )}
          {(record.phone_number || record.phoneno) && (
            <S.AddressText theme={themeColors}>
              Contact No.: {record.phone_number || record.phoneno}
            </S.AddressText>
          )}
          {record.customerGst && (
            <S.AddressText theme={themeColors}>
              <strong>GSTIN: {record.customerGst}</strong>
            </S.AddressText>
          )}
          {record.code && record.state && (
            <S.AddressText theme={themeColors}>
              <strong>
                State: {record.code}-{record.state}
              </strong>
            </S.AddressText>
          )}
        </S.BillTo>

        <S.ShipTo theme={themeColors}>
          <S.SectionTitle theme={themeColors}>Ship To</S.SectionTitle>
          <S.AddressText theme={themeColors} bold large>
            National Eligibility cum Entrance Test NEET (UG) - 2024
          </S.AddressText>
          {record.shipTo && (
            <S.AddressText theme={themeColors}>{record.shipTo}</S.AddressText>
          )}
          {record.gstno && (
            <S.AddressText theme={themeColors}>
              <strong>GSTN: {record.gstno}</strong>
            </S.AddressText>
          )}
        </S.ShipTo>

        <S.InvoiceDetails theme={themeColors}>
          <S.SectionTitle theme={themeColors}>Invoice Details</S.SectionTitle>
          {record.invoice_no && (
            <S.AddressText theme={themeColors}>
              <strong>Invoice No.:</strong> {record.invoice_no}
            </S.AddressText>
          )}
          {record.invoice_date && (
            <S.AddressText theme={themeColors}>
              <strong>Date:</strong> {formattedDate}
            </S.AddressText>
          )}
          {record.code && record.state && (
            <S.AddressText theme={themeColors}>
              <strong>Place of supply:</strong> {record.code}-{record.state}
            </S.AddressText>
          )}
          {record.billingType && (
            <S.AddressText theme={themeColors}>
              <strong>Billing Type:</strong> {record.billingType}
            </S.AddressText>
          )}
          {record.dispatchfrom && (
            <S.AddressText theme={themeColors}>
              <strong>Dispatch from:</strong> {record.dispatchfrom}
            </S.AddressText>
          )}
        </S.InvoiceDetails>
      </S.AddressSection> */}
    </>
  );

  const renderFooter = (isLastPage) => (
    <>
      <S.TotalSection theme={themeColors}>
        <S.AmountWords theme={themeColors}>
          <S.SectionTitle
            theme={themeColors}
            style={{ display: "inline-block" }}
          >
            Invoice Amount In Words
          </S.SectionTitle>
          <S.AmountWordsText>{NumConvert}</S.AmountWordsText>
        </S.AmountWords>

        <S.AmountDetails>
          <S.SectionTitle theme={themeColors} style={{ marginBottom: "15px" }}>
            Amounts
          </S.SectionTitle>
          <S.AmountRow theme={themeColors}>
            <span>Sub Total</span>
            <span>
              ₹{" "}
              {(record.roundoff_amount || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </S.AmountRow>
          <S.AmountRow theme={themeColors}>
            <span>Round off</span>
            <span>
              - ₹{" "}
              {(record.roundoff || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </S.AmountRow>
          <S.AmountRow theme={themeColors} grandTotal>
            <span>Total</span>
            <span>
              ₹{" "}
              {(record.roundoff_amount || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </S.AmountRow>
          <S.AmountRow theme={themeColors}>
            <span>Received</span>
            <span>
              ₹{" "}
              {(record.received || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </S.AmountRow>
          <S.AmountRow theme={themeColors}>
            <span>Balance</span>
            <span>
              ₹{" "}
              {(record.balance || 0).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </span>
          </S.AmountRow>
        </S.AmountDetails>
      </S.TotalSection>

      {/* Tax Details Table */}
      {record.taxlist && record.taxlist.length > 0 && (
        <S.TaxTable theme={themeColors}>
          <thead>
            <tr>
              <S.TableHeader theme={themeColors}>Tax type</S.TableHeader>
              <S.TableHeader theme={themeColors} align="right">
                Taxable amount
              </S.TableHeader>
              <S.TableHeader theme={themeColors} align="center">
                Rate
              </S.TableHeader>
              <S.TableHeader theme={themeColors} align="right">
                Tax amount
              </S.TableHeader>
            </tr>
          </thead>
          <tbody>
            {record.taxlist.map((tax, index) => (
              <React.Fragment key={index}>
                {tax.gst_type ? (
                  <>
                    <tr>
                      <S.TableCell theme={themeColors}>CGST</S.TableCell>
                      <S.TableCell theme={themeColors} align="right">
                        ₹{" "}
                        {((tax.tax || 0) / 2).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </S.TableCell>
                      <S.TableCell theme={themeColors} align="center">
                        {tax.cgst_tax || 0}%
                      </S.TableCell>
                      <S.TableCell theme={themeColors} align="right">
                        ₹{" "}
                        {(tax.cgst || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </S.TableCell>
                    </tr>
                    <tr>
                      <S.TableCell theme={themeColors}>SGST</S.TableCell>
                      <S.TableCell theme={themeColors} align="right">
                        ₹{" "}
                        {((tax.tax || 0) / 2).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </S.TableCell>
                      <S.TableCell theme={themeColors} align="center">
                        {tax.sgst_tax || 0}%
                      </S.TableCell>
                      <S.TableCell theme={themeColors} align="right">
                        ₹{" "}
                        {(tax.sgst || 0).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                        })}
                      </S.TableCell>
                    </tr>
                  </>
                ) : (
                  <tr>
                    <S.TableCell theme={themeColors}>IGST</S.TableCell>
                    <S.TableCell theme={themeColors} align="right">
                      ₹{" "}
                      {(tax.tax || 0).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </S.TableCell>
                    <S.TableCell theme={themeColors} align="center">
                      {tax.igst_tax || 0}%
                    </S.TableCell>
                    <S.TableCell theme={themeColors} align="right">
                      ₹{" "}
                      {(tax.igst || 0).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </S.TableCell>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </S.TaxTable>
      )}
      {isLastPage && (
        <>
          {/* Tax Details Table */}
          {record.taxlist && record.taxlist.length > 0 && (
            <S.TaxTable theme={themeColors}>
              <thead>
                <tr>
                  <S.TableHeader theme={themeColors}>Tax type</S.TableHeader>
                  <S.TableHeader theme={themeColors} align="right">
                    Taxable amount
                  </S.TableHeader>
                  <S.TableHeader theme={themeColors} align="center">
                    Rate
                  </S.TableHeader>
                  <S.TableHeader theme={themeColors} align="right">
                    Tax amount
                  </S.TableHeader>
                </tr>
              </thead>
              <tbody>
                {record.taxlist.map((tax, index) => (
                  <React.Fragment key={index}>
                    {tax.gst_type ? (
                      <>
                        <tr>
                          <S.TableCell theme={themeColors}>CGST</S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {((tax.tax || 0) / 2).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="center">
                            {tax.cgst_tax || 0}%
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {(tax.cgst || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                        </tr>
                        <tr>
                          <S.TableCell theme={themeColors}>SGST</S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {((tax.tax || 0) / 2).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="center">
                            {tax.sgst_tax || 0}%
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {(tax.sgst || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <S.TableCell theme={themeColors}>IGST</S.TableCell>
                        <S.TableCell theme={themeColors} align="right">
                          ₹{" "}
                          {(tax.tax || 0).toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}
                        </S.TableCell>
                        <S.TableCell theme={themeColors} align="center">
                          {tax.igst_tax || 0}%
                        </S.TableCell>
                        <S.TableCell theme={themeColors} align="right">
                          ₹{" "}
                          {(tax.igst || 0).toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}
                        </S.TableCell>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </S.TaxTable>
          )}

          {/* Total Section */}
          <S.TotalSection theme={themeColors}>
            <S.AmountWords theme={themeColors}>
              <S.SectionTitle
                theme={themeColors}
                style={{ display: "inline-block" }}
              >
                Invoice Amount In Words
              </S.SectionTitle>
              <S.AmountWordsText>{NumConvert}</S.AmountWordsText>
            </S.AmountWords>

            <S.AmountDetails>
              <S.SectionTitle
                theme={themeColors}
                style={{ marginBottom: "15px" }}
              >
                Amounts
              </S.SectionTitle>
              <S.AmountRow theme={themeColors}>
                <span>Sub Total</span>
                <span>
                  ₹{" "}
                  {(record.roundoff_amount || 0).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </S.AmountRow>
              <S.AmountRow theme={themeColors}>
                <span>Round off</span>
                <span>
                  - ₹{" "}
                  {(record.roundoff || 0).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </S.AmountRow>
              <S.AmountRow theme={themeColors} grandTotal>
                <span>Total</span>
                <span>
                  ₹{" "}
                  {(record.roundoff_amount || 0).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </S.AmountRow>
              <S.AmountRow theme={themeColors}>
                <span>Received</span>
                <span>
                  ₹{" "}
                  {(record.received || 0).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </S.AmountRow>
              <S.AmountRow theme={themeColors}>
                <span>Balance</span>
                <span>
                  ₹{" "}
                  {(record.balance || 0).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </S.AmountRow>
            </S.AmountDetails>
          </S.TotalSection>
        </>
      )}

      {/* Footer with Bank Details and Signature - appears on every page */}
      <S.Footer theme={themeColors}>
        <S.BankDetails theme={themeColors}>
          <S.SectionTitle theme={themeColors} noMargin>
            Bank Details
          </S.SectionTitle>
          {qrImage && <S.QRCode src={qrImage} alt="QR Code" />}
          {companyProfile.bankname && (
            <S.DetailText theme={themeColors} style={{ marginTop: "10px" }}>
              <strong>Bank:</strong> {companyProfile.bankname}
            </S.DetailText>
          )}
          {companyProfile.account_no && (
            <S.DetailText theme={themeColors}>
              <strong>Account No.:</strong> {companyProfile.account_no}
            </S.DetailText>
          )}
          {companyProfile.ifsc_code && (
            <S.DetailText theme={themeColors}>
              <strong>IFSC:</strong> {companyProfile.ifsc_code}
            </S.DetailText>
          )}
          {companyProfile.companyname && (
            <S.DetailText theme={themeColors}>
              <strong>Account holder's name:</strong>{" "}
              {companyProfile.companyname}
            </S.DetailText>
          )}
        </S.BankDetails>

        <S.Signature>
          <S.SectionTitle theme={themeColors} noMargin>
            Terms and Conditions
          </S.SectionTitle>
          <S.TermsText>Thanks for doing business with us!</S.TermsText>
          {companyProfile.companyname && (
            <S.CompanyFooterName>
              For : {companyProfile.companyname}
            </S.CompanyFooterName>
          )}
          {signatureImage && (
            <S.SignatureImg src={signatureImage} alt="Signature" />
          )}
          <S.AuthorizedText>Authorized Signatory</S.AuthorizedText>
        </S.Signature>
      </S.Footer>
    </>
  );

  // Calculate pagination
  const totalPages = Math.ceil(hallTicket.length / ITEMS_PER_PAGE);

  return (
    <ThemeProvider theme={themeColors}>
      <S.Container theme={themeColors}>
        <h1>Jithhhhhhhh</h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "flex-end",
            margin: "20px 0",
            alignItems: "center",
          }}
          className="no-print"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: themeColors.text }}>Dark Mode</span>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </div>
          <Flex gap={"20px"} end={"true"}>
            <Button.Primary text={"Click To Print"} onClick={handlePrint} />
            <Button.Danger text="Download PDF" onClick={handleDownload} />
          </Flex>
        </div>

        <S.PrintContainer ref={componentRef} theme={themeColors}>
          {Array.from({ length: totalPages }, (_, pageIdx) => {
            const startIdx = pageIdx * ITEMS_PER_PAGE;
            const endIdx = Math.min(
              startIdx + ITEMS_PER_PAGE,
              hallTicket.length,
            );
            const pageItems = hallTicket.slice(startIdx, endIdx);
            const isLastPage = pageIdx === totalPages - 1;

            return (
              <React.Fragment key={pageIdx}>
                {/* {pageIdx > 0 && <div className="page-break" />} */}

                <S.Page className="pdf-page" theme={themeColors}>
                  {/* Header repeats doesnot on EVERY page */}
                  {renderHeader()}
                  <S.Table theme={themeColors}>
                    <thead>
                      <tr>
                        <S.TableHeader theme={themeColors}>#</S.TableHeader>
                        <S.TableHeader theme={themeColors}>Item</S.TableHeader>
                        {!isPdfMode && (
                          <S.TableHeader theme={themeColors}>
                            Category
                          </S.TableHeader>
                        )}
                        <S.TableHeader theme={themeColors}>
                          HSN/SAC
                        </S.TableHeader>
                        <S.TableHeader theme={themeColors}>
                          Quantity
                        </S.TableHeader>
                        <S.TableHeader theme={themeColors}>Unit</S.TableHeader>
                        <S.TableHeader theme={themeColors} align="right">
                          Price/Unit
                        </S.TableHeader>
                        <S.TableHeader theme={themeColors} align="right">
                          GST
                        </S.TableHeader>
                        <S.TableHeader theme={themeColors} align="right">
                          Amount
                        </S.TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {pageItems.map((item, index) => (
                        <tr key={index}>
                          <S.TableCell theme={themeColors}>
                            {startIdx + index + 1}
                          </S.TableCell>
                          <S.TableCell theme={themeColors}>
                            {item.productname || ""}
                          </S.TableCell>
                          {!isPdfMode && (
                            <S.TableCell theme={themeColors}>
                              {item.category || ""}
                            </S.TableCell>
                          )}
                          <S.TableCell theme={themeColors}>
                            {item.hsn_code || ""}
                          </S.TableCell>
                          <S.TableCell theme={themeColors}>
                            {item.qty || 0}
                          </S.TableCell>
                          <S.TableCell theme={themeColors}>
                            {item.unitname || ""}
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {(item.price || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {(item.tax_amt || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}{" "}
                            ({item.tax_percentage || 0}%)
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right">
                            ₹{" "}
                            {(item.price_tot_amt || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                        </tr>
                      ))}

                      {/* Show total row only on last page */}
                      {isLastPage && (
                        <tr>
                          <S.TableCell
                            theme={themeColors}
                            colSpan={!isPdfMode ? 7 : 6}
                            bold
                          >
                            Total
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right" bold>
                            ₹{" "}
                            {(record.total_tax || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                          <S.TableCell theme={themeColors} align="right" bold>
                            ₹{" "}
                            {(record.total_price || 0).toLocaleString("en-IN", {
                              minimumFractionDigits: 2,
                            })}
                          </S.TableCell>
                        </tr>
                      )}
                    </tbody>
                  </S.Table>

                  {/* Show footer sections only on last page */}
                  {isLastPage && (
                    <>
                      {/* Total Section */}

                      {renderFooter()}
                    </>
                  )}
                </S.Page>
              </React.Fragment>
            );
          })}
        </S.PrintContainer>
      </S.Container>
    </ThemeProvider>
  );
};
