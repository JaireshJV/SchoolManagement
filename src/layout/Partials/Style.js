// import { THEME } from '@theme/index';
// import { Layout, Menu } from 'antd';
// import styled from 'styled-components'


// export const MainLayout = styled.section`
//     min-height:100vh;
//     display:flex;
//     width:100%;
//     overflow:hidden;
//     transition:0.5s;
//     /* overflow-y: hidden !important; */
// `;
// export const ImageProfile = styled.div`
// display: flex;
// align-items: center;
//     cursor: pointer;
//     & img {
//         width: 50px;
//         height: 50px;
//         margin: auto;
//         border-radius: 50%;
//     }
//     h2{
//         font-size: 18px;
//         font-weight: 400;
//     }
// `

// export const MenuImageProfile = styled.div`
//     width:46px;
//     height:46px;
//     position:relative;
//     border-radius: 50%;
//     overflow:hidden;
//     margin-bottom:20px;
//     box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
//     transition:0.3s;

//     & img {
//         position:absolute;
//         top:0;
//         left:0;
//         width:100%;
//         height:100%;
//         /* object-fit:cover; */
//     }

//     &.active{
//         width:50px;
//         height:50px;
//     }
// `

// export const MenuHolder = styled.div`
//     margin-top: 10px;
//     /* height:calc(100vh - 380px); // NO Img calc(100vh - 100) */
//     height: calc(-223px + 100vh); 
//     /* height: calc(100vh + 195px  );  */
//     overflow:auto;

//     .ant-menu .ant-menu-submenu-arrow::after {
//     transform: rotate(-45deg) translateY(2.5px);
// }
// .ant-menu-inline .ant-menu-submenu-arrow::before {
//     transform: rotate(45deg) translateX(-0.5px) translateY(-3px);
// }
// .custom-sidebar-menu {
// background: white !important;
// }

// .ant-menu-title-content {
//   color: #1e251eff !important;
// }

// // .ant-menu-item ant-menu-item-selected {
// //   color: #d72e2eff !important;
// // }

// .ant-menu-item-icon {
//   color: #1e251eff !important;
// }
// .ant-menu-item-group-title {
//   color: #40bc3e !important;
//   font-weight: 300;
//   font-size: 12px;
//   padding-left: 12px;
// }

// `

// export const Profile = styled.div`
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: ${(props) => props.collapsed && props.drawerModal == 'true' ? '60px 0px 0px' : '5px 0 0 0'};
    

//     /* gap: 10px; */
//     /* padding: 5px 20px; */
// `

// export const MenuText = styled.div`
//     font-size: 16px;
//     color: #545454;
//     padding-left: 7px;
// `

// export const HeaderNav = styled.div`
//     display: flex;
//     align-items: center;
//     background: white;
//     padding: 13px 21px;
//     z-index: 999;
//     & p {
//         padding-left: 10px;
//     }

//     .menuIcon{
//         position: absolute;
//         right: -7px;
//         top: 30px;
//         color: #f5e607 !important;
//     }

//     .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
//     background-color: transparent !important;
// }
// `

// export const NavTopDraw = styled.div`

//     height: inherit;
    
//     .ant-btn {
//         border-radius: 0px !important;
//     }

//     .notify{
//         cursor: pointer;
//     }

//  @media (min-width: 901px) {
//     .DrawBtn {
//       display: none;

//     }
//     .Btnresponsive{
//         width:100%;
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;
//         gap: 15px !important;
//     }
//   }

//   @media (max-width: 901px){
//     .DrawBtn{
//         cursor: pointer;
//         padding:5px;
//               background-color: #fff !important;
//     }

//     .Btnresponsive {
//         display:flex;
//         align-items:center;
//         gap: 15px !important;
//     }
//     .logo{
//         display: none;
//     }
//   }

//   &.btnborder .icon {
//     font-size: 3px;
//     margin-right: 10px;
//   }



// `

// export const SideMenuLayout = styled(Layout.Sider)`
  
//     height: 100vh;
//     position: fixed;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.08) ;
    

//     @media (max-width:900px){
//         display: none;
//     }

//     .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
//         background-color: rgba(0,0,0,0.1);
//     }
//     .ant-btn {
//         border-radius: 0px !important;
//     }
//     .anticon svg {
//         font-size: 18px;
//         color: #545454 !important;
//     }
//     .ant-layout .ant-layout-sider-children {
//         background: white;

//     }
//     .ant-layout-sider-children {
//         background: white;
//         /* box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.08) */
//         border-right: 1px solid #e8e8e8;
//     }
//     .ant-menu-dark {
//         background: #fff !important;
//         color: red !important ;
//     }

//     .ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):active {
//         /* background-color: #e6f4ff; */
//         border-radius: 0% !important;
//     }

//     .ant-menu .ant-menu-item {
//         border-radius: 0% !important;
//         /* border-right: 1px solid; */
//     }

//     .ant-menu-light .ant-menu-item-selected {
//         /* border-right: 2px solid !important; */
//     }

//     .ant-menu-light .ant-menu-item:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected):hover {
//         background: #212529;
//         color: #fff !important;
//     }
//     .ant-menu-light:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):hover {
//         background-color: #fff !important;
//         color:#212529 !important;
//     }
//     .ant-menu-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:hover {
//         background-color: transparent !important;
//     }
//     .ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
//         background-color: transparent !important;
//     }
//     .ant-menu-item .ant-menu-item-icon +span {
//         margin-inline-start: 20px !important;

//     }
//     .ant-menu .ant-menu-submenu-title .ant-menu-item-icon +span {
//         margin-inline-start: 20px !important;
//     }

//     .ant-menu-light .ant-menu-item-selected{
//         background-color: #40bc3e !important;
//         color: white !important;
//     }
// `

// export const BodyLayout = styled(Layout)`
//     height:100vh;
//     overflow-y:scroll;
// `

// export const TopHeader = styled(Layout.Header)`
//    height: ${THEME.header_height} !important;
//    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.08) !important;
//     background: white !important;
//     line-height:0;

// `

// export const BodyContent = styled(Layout.Content)`
//     height: calc(100vh - ${THEME.header_height});
//     /* background:green; */
//     flex:none;
//     /* overflow:hidden; */
//     overflow-y: scroll;
//     padding: 1rem 1rem;
    
// & .ant-menu-item-icon {
//     font-size: 20px !important;
// }
// & .ant-menu .ant-menu-item .ant-menu-item-icon {
//     font-size: 20px !important;
// }

// /* @media (max-width:900px){
//     & .ant-layout-content {
//     width:100% !important;
//     margin:0 !important;
//    }
// } */

// `

// export const AntdStyledMenu = styled(Menu)`
//     position: absolute !important;
//     right: 3px;
//     box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px !important;
//     .ant-dropdown-menu-item{
//         padding:10px 12px !important;
//         color: '#757575' !important;
//     }
//     .ant-dropdown-menu-item-icon {
//         margin-inline-end: 16px !important;
//     }
// `

// export const BtnProfile = styled.div`
// margin: 0 10px;
// padding: 9px;
// display: flex;
// color: black !important;
// border-radius: 25px;
// cursor: pointer;
// align-items: center;
// justify-content: flex-end;
// padding-right: 20px;

// & h1{
// display: flex;
// justify-content: flex-start;
// font-weight: 600;
// padding-right: 9px;
// }

// & svg{
//     font-size:1.5rem;
//     color:'#111827';
// }

// &:hover {
//    background: #d9d9e75e;
// }

// & .header__icon{
//     font-size: 26px;
//     color:'white';
// }

// `














