import React, { Fragment, useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Grid,
  Pagination,
  Select,
  Tooltip,
} from "antd";
import { CustomStandardTable, CustomTable } from "@components/form";
import {
  CommonLoading,
  CustomModal,
  CustomRow,
  Flex,
} from "@components/others";
import { TableIconHolder } from "@components/others/Style";
import { THEME } from "@theme/index";
import CustomSearch from "@components/form/CustomSearch";
import { useDispatch } from "react-redux";
import { baseRequest, IMG_BASE_URL } from "@request/request";
import errorHandler from "@request/errorHandler";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  CaretLeftFilled,
  CaretRightFilled,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { StudentModal } from "./StudentView";
import { FaRegEye } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import CustomResizableDrawer from "@components/form/CustomDrawerResizable";
import CustomDrawer from "@components/form/CustomDrawer";
import { useNavigate } from "react-router-dom";
import { useFetchImageAsBase64 } from "@utils/fetchImageAsBase64";
import { PDFViewer } from "@react-pdf/renderer";
import { HallTicketView } from "./HallTicket";
import { AdmitCardPDF } from "./AdmitCardPDF";
import AddNewStudent from "./AddStudent";

const { useBreakpoint } = Grid;

const ViewStudent = () => {
  console.log("cameeee");

  const { fetchImageAsBase64 } = useFetchImageAsBase64();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([]);
  const [searchTexts, setSearchTexts] = useState("");
  const [loading, setLoading] = useState(false);
  const [base64Images, setBase64Images] = useState({});

  // Pagination states
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // ====== Modal States ========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [width, setWidth] = useState(0);

  // ======= Drawer States =========

  const [open, setOpen] = useState(false);

  const [selectedRecord, setSelectedRecord] = useState(null);

  const footer = (
    <Flex gap="medium" justify="flex-end">
      <Button onClick={() => setOpen(false)}>Cancel</Button>

      <Button type="primary" onClick={() => setOpen(true)}>
        Submit
      </Button>
    </Flex>
  );

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

  const FormExternalClose = () => {
    handleOk();
    fetchStudentDetails();
  };

  // ===== Search =====
  const handleSearchs = (value) => {
    setPageSize(totalRecords);
    setSearchTexts(value);
  };

  // ===== Fetch Student Data =====
  const fetchStudentDetails = async (pageNo = currentPage, size = pageSize) => {
    setLoading(true);

    const params = {
      page: pageNo - 1,
      size: size,
    };

    try {
      const response = await baseRequest.get("/api/neet/register/details", {
        params,
      });

      if (response?.data) {
        setDataSource(response.data.data);
        setTotalRecords(response.data.totalItems);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      console.error(error);
      errorHandler(error, "Failed to Student details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentDetails(currentPage, pageSize);
  }, [currentPage, pageSize]);

  /* ================= FETCH IMAGES ================= */
  useEffect(() => {
    const fetchImages = async () => {
      if (!dataSource?.length) return;

      try {
        const imageEntries = await Promise.all(
          dataSource
            .filter((item) => item?.profileUrl)
            .map(async (item) => {
              try {
                const full = IMG_BASE_URL + item.profileUrl;

                const base64 = await fetchImageAsBase64(full);

                return [item.profileUrl, base64];
              } catch (err) {
                console.error("Image failed:", item.profileUrl);
                return [item.profileUrl, null];
              }
            }),
        );

        const imageMap = Object.fromEntries(imageEntries);

        setBase64Images(imageMap);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, [dataSource, fetchImageAsBase64]);
  // ===== Table Pagination Change =====
  // const handleTableChange = (pagination) => {
  //   console.log(pagination, "page");

  //   setPage(pagination.current);
  //   setPageSize(pagination.pageSize);
  // };

  // ===== Table Columns =====
  const TableColumn = [
    {
      title: "SI No",
      render: (value, item, index) => {
        return (
          <Flex center={true} centervertically={true} gap={"10px"}>
            <p>{(currentPage - 1) * pageSize + index + 1}</p>
          </Flex>
        );
      },
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <Flex center={true} gap={"10px"}>
            <Tooltip title="View Student">
              <TableIconHolder
                color={THEME.blue}
                size={"22px"}
                onClick={() => ViewStudentDetails(record)}
              >
                <FaRegEye />
              </TableIconHolder>
            </Tooltip>

            <Tooltip title="Download Hall Ticket">
              <TableIconHolder
                color={THEME.blue}
                size={"22px"}
                onClick={() => DownloadHallTicket(record)}
              >
                <AiFillPrinter />
              </TableIconHolder>
            </Tooltip>
          </Flex>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Parent Name",
      dataIndex: "parentName",
      sorter: (a, b) => a.parentName.localeCompare(b.parentName),
    },
    {
      title: "Register Number",
      dataIndex: "registerNumber",
      sorter: (a, b) => a.registerNumber.localeCompare(b.registerNumber),
    },
    {
      title: "HallTicket Number",
      dataIndex: "hallTicketNumber",
      sorter: (a, b) => a.hallTicketNumber.localeCompare(b.hallTicketNumber),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "DOB",
      dataIndex: "dob",
      sorter: (a, b) => a.dob.localeCompare(b.dob),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Profile",
      dataIndex: "profileUrl",
      render: (_, record, index) => {
        const image = base64Images[record.profileUrl];

        return (
          <div key={index} style={{ height: 40, width: 40 }}>
            {image ? (
              <img
                src={image}
                alt="Profile"
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 4,
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  height: 40,
                  width: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f0f0f0",
                  borderRadius: 4,
                  fontSize: 10,
                }}
              >
                ...
              </div>
            )}
          </div>
        );
      },
    },
  ];

  // ===== Sorting =====
  const sortedData = [...dataSource].sort(
    (a, b) => b.registrationId - a.registrationId,
  );

  // ===== Search Filter =====

  const filteredData = sortedData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTexts.toLowerCase()),
  );

  // let content;

  // if (loading) {
  //   content = <CommonLoading />;
  // } else {
  //   const rowKey = (record) => record.registrationId;

  //   content = (
  //     <CustomStandardTable
  //       columns={TableColumn}
  //       data={filteredData}
  //       rowKey={rowKey}
  //       pagination={false}
  //     />
  //   );
  // }

  const ViewStudentDetails = (record) => {
    // setModalTitle("STUDENT DETAILS");
    // setWidth(600);
    // setModalContent(<StudentModal FormExternalClose={FormExternalClose} record={record}/>);
    // showModal();
    // navigate('/studentDetails',{state:{record}})
    navigate(`/studentDetails/${record?.registrationId}`);
  };

  // const DownloadHallTicket = (record) => {
  //   setSelectedRecord(record);
  //   setOpen(true);
  // };
  // console.log(selectedRecord,'selectedRecord');

  const AddStudents = () => {
    setModalTitle("ADD STUDENT");
    setWidth(800);
    setModalContent(
      <AddNewStudent
        FormExternalClose={FormExternalClose}
        fetchStudentDetails={fetchStudentDetails}
      />,
    );
    showModal();
  };

  const DownloadHallTicket = (record) => {
    setModalTitle("DOWNLOAD HALLTICKET");
    setWidth(1000);
    // setModalContent(
    //   <PDFViewer style={{ width: "100%", height: "100vh" }}>
    //     <AdmitCardPDF  />
    //   </PDFViewer>,
    // );

    setModalContent(<AdmitCardPDF record={record} />);

    showModal();
  };

  return (
    <Fragment>
      <CustomRow
        space={[24, 24]}
        style={{
          marginTop: "30px",
          boxShadow: "0px 0px 12px 1px grey",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
      >
        <Col span={24} md={12}>
          <h2>View Students</h2>
          <Breadcrumb
            style={{ marginLeft: "10px" }}
            items={[
              {
                href: "",
                title: (
                  <>
                    <HomeOutlined />
                    <span>Home</span>
                  </>
                ),
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Student Details</span>
                  </>
                ),
              },
              {
                title: "View Students",
              },
            ]}
          />
        </Col>
        <Col span={24} md={12}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              style={{ background: "#40bc3e", color: "#f5e607" }}
              onClick={AddStudents}
            >
              Add
            </Button>
          </div>
        </Col>
        <Col
          span={24}
          md={24}
          style={{
            boxShadow: "0px 0px 1px 1px grey",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <CustomRow space={[24, 24]}>
            <Col span={24} md={8}>
              <CustomSearch
                placeholder={"Search . . ."}
                onSearch={handleSearchs}
                onChange={(e) => handleSearchs(e.target.value)}
              />
            </Col>

            <Col span={24} md={16}>
              <div style={{ display: "flex", justifyContent: "end", gap: 8 }}>
                <span>Rows per page :</span>
                <Select
                  value={pageSize}
                  style={{ width: 75 }}
                  onChange={(value) => {
                    setPageSize(value);
                    setcurrentPage(1);
                  }}
                  options={[
                    { value: 5, label: "5" },
                    { value: 10, label: "10" },
                    { value: 20, label: "20" },
                    { value: 50, label: "50" },
                    { value: 100, label: "100" },
                  ]}
                />
              </div>
            </Col>
          </CustomRow>
        </Col>
      </CustomRow>
      {/* <Button onClick={() => navigate(`/studentDetails/1`)}>
        View Student Profile
      </Button> */}
      <CustomRow>
        <Col span={24} md={24}>
          <div
            style={{
              boxShadow: "0px 0px 12px 1px grey",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {/* {content} */}
            <CustomStandardTable
              columns={TableColumn}
              data={filteredData}
              // rowKey={rowKey}
              pagination={false}
            />
          </div>
        </Col>
        <Col span={24} md={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              boxShadow: "0px 0px 12px 1px grey",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Pagination
              responsive
              size={isMobile ? "small" : "default"}
              showLessItems
              current={currentPage}
              pageSize={pageSize}
              total={totalRecords}
              onChange={(page) => {
                // setPageSize(5)
                setcurrentPage(page);
              }}
              showQuickJumper={!isMobile}
              showTotal={
                !isMobile
                  ? (total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`
                  : undefined
              }
              itemRender={(page, type, originalElement) => {
                if (type === "prev") {
                  return (
                    <Button
                      icon={<CaretLeftFilled />}
                      size="small"
                      disabled={currentPage === 1}
                    >
                      {!isMobile && "Prev"}
                    </Button>
                  );
                }
                if (type === "next") {
                  return (
                    <Button
                      icon={<CaretRightFilled />}
                      size="small"
                      disabled={currentPage === totalPages}
                    >
                      {!isMobile && "Next"}
                    </Button>
                  );
                }
                return originalElement;
              }}
            />
          </div>
        </Col>

        <CustomModal
          isVisible={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          width={width}
          modalTitle={modalTitle}
          modalContent={modalContent}
        />

        <br />

        <CustomDrawer
          open={open}
          onClose={() => setOpen(false)}
          title="Student HallTicket"
          placement="right"
          drawerSize={600}
          height={1000}
          footer={footer}
        >
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <AdmitCardPDF record={selectedRecord} />
          </PDFViewer>
        </CustomDrawer>
      </CustomRow>
    </Fragment>
  );
};

export default ViewStudent;
