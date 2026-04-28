import { THEME } from '@theme/index';
import styled from 'styled-components';

export const InvoiceContainer = styled.div`
  margin: 20px auto;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

export const InvoiceHeader = styled.div`
  background:#212529;
  color: white;
  padding: 5px;
  text-align: center;
`;

export const InvoiceTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const InvoiceSubtitle = styled.p`
  margin: 8px 0 0 0;
  font-size: 16px;
  opacity: 0.9;
`;

export const InvoiceBody = styled.div`
  padding: 30px;
`;

export const InvoiceTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const BillTo = styled.div`
  flex: 1;
`;

export const BillToHeader = styled.h3`
  margin: 0 0 15px 0;
  color: #212529;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 8px;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const CustomerDetails = styled.div`
  h4 {
    margin: 0;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
  }
  h5{
   margin: 0;
    color: #1f2937;
    font-size: 14px;
    font-weight: 600;  
  }
  
  p {
    margin: 4px 0;
    color: #6b7280;
    font-size: 14px;
  }
`;

export const InvoiceInfo = styled.div`
  text-align: right;
  min-width: 200px;
`;

export const InvoiceNumber = styled.div`
  background: #f3f4f6;
  padding: 5px;
  border-radius: 8px;
  /* border-left: 4px solid #2563eb; */
  margin-bottom: 15px;
`;

export const InvoiceLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const InvoiceValue = styled.div`
  font-size: 16px;
  color: #1f2937;
  font-weight: 600;
`;

export const ItemsSection = styled.div`
  margin: 30px 0;
`;
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 10px;
`;

export const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #212529;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background: #212529;
  color: white;
`;

export const TableHeaderCell = styled.th`
  padding: 15px 12px;
  text-align: ${props => props.align || 'left'};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8fafc;
  }
  
  &:hover {
    background: #e2e8f0;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  text-align: ${props => props.align || 'left'};
  color: #212529;
  
  &.item-name {
    font-weight: 500;
  }
  
  &.amount {
    font-weight: 600;
    color: #059669;
  }
`;

export const InvoiceFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PaymentTerms = styled.div`
  flex: 1;
  max-width: 300px;
`;

export const TermsHeader = styled.h4`
  margin: 0 0 10px 0;
  color: #212529;
  font-size: 16px;
  font-weight: 600;
`;

export const TermsText = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.5;
`;

export const TotalSection = styled.div`
  min-width: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

export const TotalHeader = styled.div`
  background: #212529;
  color: white;
  padding: 12px 16px;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TotalRow = styled.div`
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
    background: #f9fafb;
    font-weight: 700;
    font-size: 16px;
  }
  
  &.balance-due {
    background: ${props => props.isPositive ? '#fef2f2' : '#f0fdf4'};
    color: ${props => props.isPositive ? '#dc2626' : '#16a34a'};
  }
`;

export const TotalLabel = styled.div`
  flex: 1;
  font-weight: 500;
  color: #212529;
`;

export const TotalValue = styled.div`
  font-weight: 600;
  color: #1f2937;
  min-width: 100px;
  text-align: right;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #e5e7eb;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #6b7280;
  font-style: italic;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
`;

export const NoItemsMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;
  font-style: italic;
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
`;

export const TaxSection = styled.div`
  margin: 20px 0;
  background: #f8fafc;
  border-radius: 8px;
  padding: 15px;
`;

export const TaxHeader = styled.h4`
  margin: 0 0 10px 0;
  color: #212529;
  font-size: 16px;
  font-weight: 600;
`;

export const TaxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
    font-weight: 600;
    border-top: 1px solid #e5e7eb;
    padding-top: 5px;
  }
`;
export const ReportTitle = styled.h1`
    font-size:1.3rem;
    color:${THEME.primary_color};
    text-transform:capitalize;
    letter-spacing:1px;
    padding:15px;
    text-align:center;
`