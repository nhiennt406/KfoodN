/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

import logo from "./logo_byNhin.png";
import home from "./home_Nhin.png";
import "../NavBar.css";
import { Col, Divider, Row } from 'antd';
const style = {
  background: '#0092ff',
  padding: '15px',
  textAlign:'center',
};
export default class Home extends Component {
  render() {
    return (
      <div id='main'>
  
    <div id="fb-root"></div>


    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "108674048489679");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>


    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v16.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
        <div className='homepage'>
          <p className='elements' id='title'>
            KFOOD<span id='student'></span>
          </p>
          <hr className='elements' id='homehr' />
          <div className='introduction'>
            <h1 className='manage'>
              Mọi thứ
              <div id='_manage'>cần thiết cho việc</div> quản lý suất ăn mầm non
            </h1>
            <div className='manage_1'>
              <img
                src={logo}
                width='400rem'
                height='300rem'
                style={{ marginTop: "-15rem", marginRight: "7rem" }}
              />
            </div>
            <p id='_intro1'>
              KFOOD là 1 phần mềm tiện ích giúp quản lý suất ăn mầm non một cách
              ngắn gọn và đầy đủ nhất thông qua những thống kê xác thực nhất và
              nhanh nhất
            </p>
            <img className='homewallpaper' src={home} />
            <div className='footer1'>
              <br />
              <p id='_footer2'>
                Hàng ngàn tổ chức giáo dục ngày nay sử dụng hệ thống quản lý
                trường học phân mảnh và nền tảng phần mềm để quản lý các hoạt
                động hành chính và học tập của họ. KFOOD cung cấp một giải
                pháp hợp nhất tất cả trong một nền tảng đơn giản và đẹp mắt.
              </p>
            </div>

            {/* FOOTER CHUC NANG */}

            <div className='footer2'>
              <hr className='elements' id='homehr' />
              <h1 id='_footer1'>Các tính năng của KFOOD</h1>

             
              <div className='footer_icons'>
             
              </div>
              <br />
            </div>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" span={6}>
                <div style={style}>
                <center>  
                {/* <i class="fa-thin fa-screen-users"></i> */}
                  <span className='fa fa-user'></span>
                {/* <i class="fa-solid fa-users"></i> */}
                  <p>Quản Lý Người Dùng</p> </center>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>

              {/* <i class="fa-duotone fa-screen-users"></i> */}
                <div style={style}> 
                {/* <i class="fa-duotone fa-screen-users"></i> */}
                {/* <span className='fa-duotone fa-screen-users'></span> */}
                {/* <i class="fa-thin fa-screen-users"></i> */}
                {/* <span class="fa fa-user-group"></span> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-user-group" /> */}
                <span className='fa fa-users'></span>
               <p> Quản Lý Nhóm Lớp Học </p></div>
              </Col>
              <Col className="gutter-row" span={6}>

                <div style={style}> 
                <span className='fa fa-users'></span>
               <p>Quản Lý Lớp Học</p></div>
              </Col>
              <Col className="gutter-row" span={6}>
              
                <div style={style}>
               <span className='fa fa-user'></span>
                <p>Quản Lý Học Sinh</p></div>
                
              </Col>
            </Row>
            <br/>
            {/* <Row></Row> */}
          </div>
        </div>
      </div>
    );
  }
}
