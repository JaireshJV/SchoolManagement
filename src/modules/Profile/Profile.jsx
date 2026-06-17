import { CustomRow } from "@components/others";
import { Col } from "antd";
import { HeaderCard } from "./style";
import { useSelector } from "react-redux";
import { selectCurrentRoleName } from "@modules/Auth/authSlice";

export const Profile = () => {
  const RoleName = useSelector(selectCurrentRoleName);
  return (
    <div>
      <CustomRow>
        <Col span={24} md={12}>
          <HeaderCard>
            <Col span={24} md={12}>
              <h4>{RoleName} </h4>
              <p>Administrator · EduPro Institute</p>
              <button className="system-admin">System Admin</button>
              <button className="super-user">Super User</button>
            </Col>
          </HeaderCard>
        </Col>

        <Col span={24} md={12}></Col>
      </CustomRow>
    </div>
  );
};
