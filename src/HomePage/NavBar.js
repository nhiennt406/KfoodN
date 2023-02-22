/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./NavBar.css";
import "boxicons";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "../router";
import { Redirect } from "react-router";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      openNav: false,
      chooseHome: true,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
    };
  }

  componentDidMount() {
    this.setState({
      role: sessionStorage.getItem("role"),
    });
  }

  open = () => {
    this.setState({
      openNav: !this.state.openNav,
    });
  };

  chooseHome = () => {
    this.setState({
      chooseHome: true,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
    });
  };

  chooseNoti = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: true,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
    });
  };

  chooseChat = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: true,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
    });
  };

  chooseList = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: true,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
    });
  };

  chooseChart = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: true,
      chooseInfoTeacher: false,
      chooseProfile: false,
    });
  };

  chooseProfile = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: true,
    });
  };

  chooseLogout = () => {
    // this.setState({
    //   chooseHome: false,
    //   chooseNoti: false,
    //   chooseChat: false,
    //   chooseList: false,
    //   chooseChart: false,
    //   chooseInfoTeacher: false,
    //   chooseProfile: false,
    // });
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("msv");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("lop");
    sessionStorage.removeItem("item");
  };

  chooseInfoTeacher = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: true,
      chooseProfile: false,
    });
  };

  render() {
    if (localStorage.getItem("statusLogin") != "true") {
      return <Redirect to='/dangnhap' />;
    }
    var {
      role,
      openNav,
      chooseHome,
      chooseNoti,
      chooseChat,
      chooseList,
      chooseChart,
      chooseInfoTeacher,
      chooseProfile,
    } = this.state;
    return (
      <Router>
        <section className='body'>
          <div className={openNav ? "sidebar open" : "sidebar"}>
            <div className='logo-details'>
              {/* cai 3 gach */}
              <div className='logo_name'>MENU</div>
              <div id='btn' onClick={this.open}>
                <box-icon name='menu' color='#ffffff'></box-icon>
              </div>
            </div>
            <ul className='nav-list'>
              <li
                className={chooseHome ? "home" : ""}
                onClick={this.chooseHome}>
                <Link to='/home'>
                  <div className='icon'>
                    <AiOutlineHome />
                  </div>
                  <span className='links_name'>Trang chủ</span>
                </Link>
                <span className='tooltip'>Trang chủ</span>
              </li>

              <li
                className={chooseNoti ? "home" : ""}
                onClick={this.chooseNoti}>
                <Link to='/home/manage-user'>
                  {/* thong bao */}
                  <div className='icon'>
                  <span className='fa fa-user'></span>
                  </div>
                  <span className='links_name'>Quản Lý Người Dùng</span>
                </Link>
                <span className='tooltip'>Quản Lý Người Dùng</span>
              </li>
              <li
                className={chooseChat ? "home" : ""}
                onClick={this.chooseChat}>
                <Link to='/home/mange-group'>
                  <div className='icon'>
                  <span className='fa fa-users'></span>
                  </div>
                  <span className='links_name'>Quản Lý Nhóm Lớp Học</span>

                  <span className='tooltip'>Quản Lý Nhóm Lớp Học</span>
                </Link>
              </li>
              <li
                id='bangdiem'
                className={
                  (chooseList ? "home" : "") +
                  (role === "student" ? "student" : "")
                }
                onClick={this.chooseList}>
                <Link to='/home/manage-class'>
                  {/* danh sach sinh vien */}
                  <div className='icon'>
                  <span className='fa fa-users'></span>
                  </div>
                  <span className='links_name'>Quản Lý Lớp Học</span>
                </Link>
                <span className='tooltip'>Quản Lý Lớp Học</span>
              </li>
              <li
                className='chart'
                className={
                  (chooseChart ? "home" : "") +
                  (role === "student" ? "student" : "")
                }
                onClick={this.chooseChart}>
                <Link to='/home/manage-student'>
                  <div className='icon'>
                  <span className='fa fa-user'></span>
                  </div>
                  <span className='links_name'>Quản Lý Học Sinh</span>
                </Link>
                <span className='tooltip'>Quản Lý Học Sinh</span>
              </li>
              <li
                className={chooseNoti ? "home" : ""}
                onClick={this.chooseNoti}>
                <Link to='/home/manage-role'>
                  {/* thong bao */}
                  <div className='icon'>
                  <span className='fa fa-user'></span>
                  </div>
                  <span className='links_name'>Quản Lý Chức Vụ</span>
                </Link>
                <span className='tooltip'>Quản Lý Chức Vụ</span>
              </li>
              <li
                className='profile'
                className={
                  (chooseProfile ? "home" : "") +
                  (role === "student" ? "" : "student")
                }
                onClick={this.chooseProfile}>
                <Link to='/home/profile'>
                  <div className='icon'>
                    <span className='fa fa-id-card'></span>{" "}
                  </div>
                  <span className='links_name'>Hồ sơ</span>

                  <span className='tooltip'>Hồ sơ</span>
                </Link>
              </li>
              <li className='logout' onClick={this.chooseLogout}>
                <a href='/dangnhap'>
                  {/* Log out */}
                  <div className='icon'>
                    <BiLogOut />
                  </div>
                  <span className='links_name'>Đăng Xuất</span>
                </a>
                <span className='tooltip'>Đăng Xuất</span>
              </li>
            </ul>
          </div>
          <div className={openNav ? "nav_open" : "nav_close"}>
            <div>{this.show(routes)}</div>
          </div>
        </section>
      </Router>
    );
  }

  show = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default NavBar;
