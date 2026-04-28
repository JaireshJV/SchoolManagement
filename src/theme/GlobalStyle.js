import { Styles } from "@components/form/CommonProperties";
import { createGlobalStyle } from "styled-components";
import { THEME } from ".";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        font-family: "DM Sans", sans-serif; 
    } 
   
  & .ant-menu-item-icon {
    font-size: 23px !important;
   }

   .ant-form-item .ant-form-item-explain-error {
    color: ${Styles.errorColor};
    font-weight: ${Styles.errorFontWeight};
    font-size: ${Styles.errorFontSize};
    }
   .ant-drawer .ant-drawer-body {
    padding: 0% !important;
    overflow: hidden !important;
   }

   .scroll {
    overflow-y: scroll;
   }

    ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #212529; 
        cursor: pointer;
        border-radius: 10px;

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(3 108 255 / 43%);
        border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(3 108 255 / 43%);
        visibility: visible;
    }

    /* Antd Form  */
    .ant-form-item {
        margin-bottom: 6px !important;
    }
&.ant-drawer.ant-drawer-content{
    // background-color: #212529 !important;
}
    &.ant-drawer-right>.ant-drawer-content-wrapper{
        top:50px;
        right:0;
        bottom:50px;
        transition:0.5s;

        @media ${THEME.MOBILEL} {
            right:50px;
        }
    }

    &.ant-drawer .ant-drawer-panel-motion-right-leave-active{
        transform:translateX(150%)
    }

   &.ant-drawer .ant-drawer-body {
        /* padding:20px !important; */
        overflow-y:scroll !important;
    }

    .ant-menu-light .ant-menu-submenu-selected >.ant-menu-submenu-title{
        color: ${THEME.primary_color};
        background : #40bc3e ;
    }

    .ant-form-item .ant-form-item-control-input-content {
        display: flex;
        gap: 50px;
    }
    .ant-tabs .ant-tabs-tab {
        padding: 0 12px 0 12px !important;
        border-left: 2px solid !important;
        font-size: 15px;
        font-weight: 600;
        
    }
    /* .ant-tabs .ant-tabs-tab:active {
        border-bottom: 2px solid red;
    } */
    .ant-tabs-ink-bar {
       background-color: #0000 !important; 
    }
    .ant-tabs-tab:first-child {
        border: none !important;
    }
    .ant-popconfirm .ant-popconfirm-message .ant-popconfirm-description {
        color: #212529 ;
    }
    .ant-dropdown .ant-dropdown-menu{
        background-color: #212529 ;
        border-radius: 10px;
    }

    .ant-popover .ant-popover-inner {
        background-color: white;
        font-size: 16px;
        height: 105px;
        border-radius: 10px;

    }

    :where(.css-dev-only-do-not-override-2i2tap).ant-popconfirm .ant-popconfirm-buttons {
       display: flex;
       justify-content: space-around;
    }

    .ant-btn.ant-btn-sm {
        height: 38px;
    padding: 4px 24px;
    border-radius: 4px;


    }
.ant-drawer .ant-drawer-content {
    // background: #212529 !important;
}
.ant-menu .ant-menu-submenu-title{
    color: #fff !important;
}
.ant-menu.ant-menu-inline .ant-menu-item {
    color: #fff !important;
}
.ant-menu .ant-menu-item-selected{
   background: #40bc3e !important; 
   color : #EA1B25 !important; 
} 
.ant-menu-item:not(.ant-menu-item-selected):hover {
    background-color: #fff !important;
    color: #000 !important;
    background : yellow ;
}

.ant-menu-submenu-title:hover{
    color: #fff !important;
}

.ant-layout sc-kzkBiZ bcwxto css-dev-only-do-not-override-mzwlov{
background : green !important ;
}
  /* &.ant-btn-default{
      background: #EA1B25 !important;
      color: #fff !important;
    } */
    .ant-layout-header {
        // background: #212529 !important;
    }

.ant-drawer-header{
    background :#fff ;
    }
    .ant-drawer .ant-drawer-body{
    background :#fff ;
    }

    .sc-gEvEer{
background : white !important ;
}

.iBIOwO{
background : white !important ;
}

.ant-layout-header sc-kFWlue kIkuHc css-dev-only-do-not-override-mzwlov
{
background : red !important ;
}
`;

export default GlobalStyle;
