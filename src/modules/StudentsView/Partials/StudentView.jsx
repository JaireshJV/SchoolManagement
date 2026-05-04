import { CustomModal, CustomRow } from "@components/others";
import { Col, Image, Row, Space, Tooltip } from "antd";
import { useLocation, useParams } from "react-router-dom";
import {
  IconContainer,
  IconWrapper,
  SignatureCard,
  SpaceHeight,
  SpaceHeightSmall,
  StyledImageSection,
  StyledProfileSection,
  StyledStudentView,
} from "../style";

import Company from "../../../assets/icons/favicon_endless_pvtltd.png";
import { FaBirthdayCake, FaTransgender, FaUserTie } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GiGrowth } from "react-icons/gi";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  ShowImageModal,
  ShowImageModalPro,
  ShowImageModalSign,
} from "./ShowImageModal";
import errorHandler from "@request/errorHandler";
import { baseRequest } from "@request/request";
import { useProtectedImages } from "@utils/useProtectedImages";
import { DownloadOutlined } from "@ant-design/icons";

export const StudentModal = () => {
  // const location = useLocation();
  // const record = location.state;

  const { id } = useParams();

  // ====== Modal States ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [width, setWidth] = useState(0);

  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState({});

  const profilesection = [
    {
      key: "1",
      title: "Gender",
      icon: <FaTransgender />,
      value: dataSource?.gender || "",
    },
    {
      key: "2",
      title: "Parent name",
      icon: <FaUserTie />,
      value: dataSource?.parentName || "",
    },
    {
      key: "3",
      title: "Date of Birth",
      icon: <FaBirthdayCake />,
      value: dataSource?.dob || "",
    },

    {
      key: "4",
      title: "Parent Profession",
      icon: <MdOutlineWorkOutline />,
      value: dataSource?.parentProfession || "",
    },
    {
      key: "5",
      title: "Email",
      icon: <FaTransgender />,
      value: dataSource?.email || "",
    },
    {
      key: "6",
      title: "School Type",
      icon: <BiSolidCalendarHeart />,
      value: dataSource?.schoolType || "",
    },
    {
      key: "7",
      title: "Phone Number",
      icon: <FaTransgender />,
      value: dataSource?.phone || "",
    },
    {
      key: "8",
      title: "Payment Status",
      icon: <GiGrowth />,
      value: dataSource?.paymentstatus || "",
    },
  ];

  const oddSection = profilesection.filter((item) => item.key % 2 !== 0);
  const evenSection = profilesection.filter((item) => item.key % 2 === 0);

  const images = useProtectedImages(dataSource);

  const imagesection = [
    {
      key: "1",
      name: "AADHAR",
      color: "5px solid green",
      image: images?.aadhaar,
    },
    {
      key: "2",
      name: "ID CARD",
      color: "5px solid red",
      image: images?.idcard,
    },
    {
      key: "3",
      name: "BARCODE",
      color: "5px solid violet",
      image: images?.barcode,
    },
  ];

  // ===== Fetch Student Data =====
  const fetchStudentDetails = async () => {
    setLoading(true);

    try {
      const response = await baseRequest.get(`/api/neet/register/view/${id}`);

      if (response.data) {
        setDataSource(response.data);
      }
    } catch (error) {
      console.error(error);
      errorHandler(error, "Failed to Fetch Student details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentDetails();
  }, [dataSource]);

  // ===== Modal Functions =====
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  const downloadImage = (url, filename = "image.jpg") => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const ShowImage = (elem) => {

  const imageUrl = elem?.image;

  setModalTitle(
    <Space style={{ width: "100%", justifyContent: "space-between" }}>
      <span>Viewing {elem.name}</span>

      <Tooltip title="Download Image">
        <DownloadOutlined
          style={{ cursor: "pointer", fontSize: 25,color:"green" }}
          onClick={() =>
            downloadImage(imageUrl, `${elem.name}.jpg`)
          }
        />
      </Tooltip>
    </Space>
  );

  setWidth(600);

  setModalContent(
    <ShowImageModal imgsrc={imageUrl} />
  );

  showModal();
};

  const ShowImagePro = (images) => {
    const imageUrl = images?.profile;

    setModalTitle(
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <span>Viewing {dataSource?.name}' Photo</span>

        <Tooltip title="Download Image">
          <DownloadOutlined
            style={{ cursor: "pointer", fontSize: 25,color:"green"}}
            onClick={() => downloadImage(imageUrl, `${dataSource?.name}.jpg`)}
          />
        </Tooltip>
      </Space>,
    );
    setWidth(600);
    setModalContent(<ShowImageModalPro imgsrc={imageUrl} />);
    showModal();
  };

  const ShowImageSign = (images) => {
    const imageUrl = images?.signature;

    setModalTitle(
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <span>Viewing {dataSource?.name}'s Signature</span>

        <Tooltip title="Download Signature">
          <DownloadOutlined
            style={{ cursor: "pointer", fontSize: 25,color:"green"}}
            onClick={() =>
              downloadImage(imageUrl, `${dataSource?.name}_signature.jpg`)
            }
          />
        </Tooltip>
      </Space>,
    );

    setWidth(600);

    setModalContent(<ShowImageModalSign imgsrc={imageUrl} />);

    showModal();
  };

  return (
    <StyledStudentView>
      <CustomRow space={[24, 24]}>
        <Col span={24} md={18}>
          <StyledProfileSection>
            <CustomRow>
              <Col span={24} md={24}>
                <div className="top-section">
                  <div>
                    <div
                      className="profile"
                      onClick={() => ShowImagePro(images)}
                    >
                      <img src={images?.profile} alt="profile" />
                    </div>
                  </div>
                  <h2
                    style={{
                      textAlign: "center",
                      alignContent: "center",
                      color: "#216020",
                    }}
                  >
                    STUDENT DETAILS{" "}
                  </h2>
                  <div className="cover-image">
                    <img src={Company} alt="company" />
                  </div>
                </div>
              </Col>
              <SpaceHeight></SpaceHeight>
              <Col span={24} md={12}>
                <h1 className="name-title">{dataSource?.name}</h1>
                <p>Student</p>
              </Col>
              <Col span={24} md={12}>
                <h1 className="name-title">{dataSource?.registerNumber}</h1>
              </Col>
              <SpaceHeightSmall></SpaceHeightSmall>
              {oddSection.map((item) => (
                <Col span={24} md={12}>
                  <div className="icon-with-label">
                    <IconContainer>
                      <IconWrapper>{item.icon}</IconWrapper>
                    </IconContainer>

                    <h4>{item.title} :</h4>
                    <p>{item.value}</p>
                  </div>
                </Col>
              ))}

              {evenSection.map((item) => (
                <Col span={24} md={12}>
                  <div className="icon-with-label">
                    <IconContainer>
                      <IconWrapper>{item.icon}</IconWrapper>
                    </IconContainer>

                    <h4>{item.title} :</h4>
                    <p>{item.value}</p>
                  </div>
                </Col>
              ))}
              <Col span={24} md={18}>
                <div className="address-portion">
                  <IconContainer>
                    <IconWrapper>
                      <FaLocationDot />
                    </IconWrapper>
                  </IconContainer>
                  <h4 className="name-title">Hall ticket number :</h4>
                  <h3>{dataSource?.hallTicketNumber}</h3>
                </div>
              </Col>
              <Col span={24} md={6}>
                <SignatureCard onClick={() => ShowImageSign(images)}>
                  <img
                    src={images?.signature}
                    alt="sign"
                    width={"150px"}
                    height={"70px"}
                  />
                </SignatureCard>
              </Col>
            </CustomRow>
          </StyledProfileSection>
        </Col>
        <Col span={24} md={6}>
          {imagesection?.map((elem) => (
            <Tooltip title={`View ${elem.name}`}>
              <StyledImageSection
                style={{ borderLeft: `${elem.color}`, cursor: "pointer" }}
                onClick={() => ShowImage(elem)}
              >
                <div className="image-row">
                  <div className="text">{elem.name}</div>
                  <div className="image-container">
                    <img src={elem.image} alt={`${elem.name}`} />
                  </div>
                </div>
              </StyledImageSection>
            </Tooltip>
          ))}
        </Col>
      </CustomRow>

      <CustomModal
        isVisible={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        width={width}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
    </StyledStudentView>
  );
};
