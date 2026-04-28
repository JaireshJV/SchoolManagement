import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllAppointmentNotifications,
  AllBillingNotifications,
  AllHealthCareNotifications,
  AllNotifications,
  appointmentNotify,
  billingNotify,
  healthcareNotify,
  notificationGet,
} from "../NotificationSlice";
import { CustomCardView, CustomRow, Flex } from "@components/others";
import { Col } from "antd";
import { NotificationStyle } from "../Style";
import AlertNoImg from "@assets/images/alertimg.png";
import { selectCurrentUserRole } from "@modules/Auth/authSlice";
import { userRolesConfig } from "@router/config/roles";
import nonotification_image from '@assets/images/nonotification_image.jpg'

const Notification = () => {
  const dispatch = useDispatch();
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("today");

  useEffect(() => {
    dispatch(notificationGet());
    dispatch(appointmentNotify());
    dispatch(billingNotify());
    dispatch(healthcareNotify());
  }, []);

  const Role = useSelector(selectCurrentUserRole);

  const allNotificationDetails = useSelector(AllNotifications);
  console.log(allNotificationDetails, "allNotificationDetails");
  const allAppointments = useSelector(AllAppointmentNotifications);
  const allBilling = useSelector(AllBillingNotifications);
  const allHealthCare = useSelector(AllHealthCareNotifications);

  // const filteredNotifications = allNotificationDetails[0]?.[selectedTimeFrame] || [];
  let filteredNotifications;

  if (Role === userRolesConfig.FRONTOFFICE) {
    filteredNotifications = allAppointments[0]?.[selectedTimeFrame];
  } else if (Role === userRolesConfig.BILLING) {
    filteredNotifications = allBilling[0]?.[selectedTimeFrame];
  } else if (Role === userRolesConfig.HEALTHCARE) {
    filteredNotifications = allHealthCare[0]?.[selectedTimeFrame];
  } else if (Role === userRolesConfig.AUDITING) {
    filteredNotifications = allBilling[0]?.[selectedTimeFrame];
  } else {
    filteredNotifications =
      allNotificationDetails[0]?.[selectedTimeFrame] || [];
  }

  return (
    <CustomCardView>
      <NotificationStyle>
        <Flex end={"true"} gap={"35px"} style={{ marginRight: "25px" }}>
          <div
            className={`clickfunction ${
              selectedTimeFrame === "today" ? "active" : ""
            }`}
            onClick={() => setSelectedTimeFrame("today")}
          >
            Today
          </div>
          <div
            className={`clickfunction ${
              selectedTimeFrame === "7days" ? "active" : ""
            }`}
            onClick={() => setSelectedTimeFrame("7days")}
          >
            7&nbsp;Days
          </div>
          <div
            className={`clickfunction ${
              selectedTimeFrame === "year" ? "active" : ""
            }`}
            onClick={() => setSelectedTimeFrame("year")}
          >
            All
          </div>
        </Flex>

        <div className="maildata">
          {filteredNotifications.length > 0 ? (
            <>
              {filteredNotifications?.map((item, index) => (
                <div className="maildatainside" key={index}>
                  <CustomRow space={[24, 24]} gap={"20px"}>
                    <Col span={4} md={4}>
                      <div className="imgiconresponsive">
                        {/* {item.title} */}
                        <img src={AlertNoImg} alt="Notification" />
                      </div>
                    </Col>
                    <Col span={20} md={20}>
                      <div className="">
                        <h3>
                          {item.tile}&nbsp;:&nbsp;
                          <span>{item.reason} </span>
                        </h3>
                        <p>{item.time}</p>
                      </div>
                    </Col>
                  </CustomRow>
                </div>
              ))}
            </>
          ) : (
             <div className="nonotices">
               <img src={nonotification_image} width={"50%"}/>
              </div>
          )}
        </div>
      </NotificationStyle>
    </CustomCardView>
  );
};

export default Notification;

// import { CustomCardView, CustomRow, Flex } from "@components/others";
// import { Col } from "antd";
// import React, { useEffect } from "react";
// import { NotificationStyle } from "../Style";
// import AlertNoImg from "@assets/images/alertimg.png";
// import { useDispatch, useSelector } from "react-redux";
// import { AllNotifications, notificationGet } from "../NotificationSlice";

// const Notification = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(notificationGet());
//   }, []);

//   const Allnotificationdetails = useSelector(AllNotifications)

//   console.log(Allnotificationdetails,'Allnotificationdetails');

//   const getSevenDays = Allnotificationdetails[0]?.today?.map((item) => ({
//     label:item.reason,
//     value:item.reason
//   }))

//   console.log(getSevenDays,'getSevenDays');

//   const ItemData = [
//     {
//       icon: <img src={AlertNoImg} />,
//       heading: "Claim Submission Confirmation",
//       details:
//         "We have received your insurance claim for [Patient Name], Claim ID [####]. Please allow [Number of Days] business days for processing.",
//       hover: "2hr ago",
//     },
//     {
//       icon: <img src={AlertNoImg} />,
//       heading: "Claim Submission 476",
//       hover: "2hr ago",
//       details:
//         "We have received your insurance claim for [Patient Name], Claim ID [####]. Please allow [Number of Days] business days for processing.",
//     },
//     {
//       icon: <img src={AlertNoImg} />,
//       heading: "Claim Submission 476",
//       hover: "7hr ago",
//       details:
//         "We have received your insurance claim for [Patient Name], Claim ID [####]. Please allow [Number of Days] business days for processing.",
//     },
//     {
//       icon: <img src={AlertNoImg} />,
//       heading: "Claim Submission 476",
//       hover: "8hr ago",
//       details:
//         "We have received your insurance claim for [Patient Name], Claim ID [####]. Please allow [Number of Days] business days for processing.",
//     },
//     {
//       icon: <img src={AlertNoImg} />,
//       heading: "Claim Submission 476",
//       details:
//         "We have received your insurance claim for [Patient Name], Claim ID [####]. Please allow [Number of Days] business days for processing.",
//     },
//     {
//       icon: <img src={AlertNoImg} />,
//       heading: "Claim Submission 476",
//       details:
//         "We have received your insurance claim for [Patient Name], Claim ID [####]. Please allow [Number of Days] business days for processing.",
//     },
//   ];

//   return (
//     <CustomCardView>
//       <NotificationStyle>
//         <Flex end={true} gap={"35px"} style={{ marginRight: "25px" }}>
//           <div className="clickfunction">Today</div>
//           <div className="clickfunction">7&nbsp;Days</div>
//           <div className="clickfunction">All</div>
//         </Flex>

//         <div className="maildata">
//           {/* {Allnotificationdetails[0]?.today?.map((item, index) => { */}
//    {ItemData.map((item, index) => {

//             return (
//               <div className="maildatainside">
//                 <CustomRow space={[24, 24]} key={index} gap={"20px"}>
//                   <Col span={4} md={4}>
//                     <div className="imgiconresponsive">{item.icon}</div>
//                   </Col>
//                   <Col span={20} md={20}>
//                     <div className="">
//                       <h3>
//                         {item.heading}&nbsp;&nbsp;
//                         <span>{item.details} </span>
//                       </h3>
//                       <p>{item.hover}</p>
//                     </div>
//                   </Col>
//                 </CustomRow>
//               </div>
//             );
//           })}
//         </div>

//         {/* <div className='NotdataYet'>                 // Use API Connection (future use)
//                     <h3>No Messages Yet</h3>
//                     <p>It looks like your inbox is empty!</p>
//                 </div> */}
//       </NotificationStyle>
//     </CustomCardView>
//   );
// };

// export default Notification;
