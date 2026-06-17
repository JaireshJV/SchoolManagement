import React from "react";
import { Row, Col, Pagination, Button } from "antd";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

const CommonCardGrid = ({
  data = [],
  renderCard,
  currentPage,
  pageSize,
  totalRecords,
  setCurrentPage,
  totalPages,
  isMobile,
}) => {
  return (
    <>
      <Row gutter={[20, 20]}>
        {data?.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            {renderCard(item)}
          </Col>
        ))}
      </Row>

      {totalRecords > pageSize && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 12px 1px #d9d9d9",
            background: "#fff",
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
              setCurrentPage(page);
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
      )}
    </>
  );
};

export default CommonCardGrid;