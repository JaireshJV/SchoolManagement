import styled from "styled-components";

export const NotificationStyle = styled.div`
  .clickfunction {
    /* color: #212529 ; */
    color: #000000;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;

    :hover {
      color: #212529;
    }
  }

  .maildata {
    margin: 40px 20px 0 20px;
    height: 410px;
    overflow-y: auto;
    .ant-row {
      margin-bottom: 25px !important;
    }
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #212529 ;
    }
    & h3 {
      & span {
        font-weight: 500;
        font-size: 16px;
      }
    }

    .nonotices {
      display: flex;
        justify-content: center;
        align-items: center;
      
    }

    .maildatainside {
      width: 70%;
      & p {
        color: #919191;
        margin-top: 10px;
        font-size: 15px;
      }
    }

    .imgiconresponsive {
      background-color: #f2eeee;
      border-radius: 30px;
      display: inline-block;
      padding: 5px;
      & img {
        width: 25px;
      }
    }
  }

  /* Not data Yet */

  .NotdataYet {
    text-align: center;
    height: 300px;
    overflow: hidden;
    margin: auto;
    margin-top: 150px;
    & h3 {
      color: #919191;
      margin-bottom: 10px;
    }
    & p {
      color: #919191;
      font-size: 15px;
    }
  }

  @media screen and (max-width: 767px) {
    .maildata {
      margin: 40px 0 0 0;
      .maildatainside {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .maildata {
      height: 100%;
      overflow-y: auto;
    }
  }
`;
