import React, { useEffect, useState } from 'react';

import axios from 'axios';
import "./ListUser.css";
// import ListSV from "./Components/ListNL";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
// import "../table.scss"
import styled from "styled-components";
// import "../table.scss"
const ListUser = () => {

  const [dataList, setDataList] = useState([]);
  // axios('http://apikfood.kaviet.vn:5000/api/kfood/v1',)
  const dataListGroups = [
    {
      id_group: "1",
      ten_group: "Nhom hoc buoi chieu",

    }
  ]
  const tokenT = localStorage.getItem("token");
  console.log(tokenT);
  useEffect(() => {
    axios.get(`https://apifood.kaviet.vn/api/kfood/v1/showAllUser`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }

    ).then(
      ({ data }) => {
        //  console.log(data)
        setDataList(data.data)
      }
    )
  }, []);

  console.log(dataList)
  // const item={};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataListRole, setDataListRole] = useState([]);
  const [Role, setRole] = useState([]);
  const showModal = (id) => {
    setIsModalOpen(true);
    const params = new URLSearchParams({
      id_user: id
    }).toString();
    const url = `https://apifood.kaviet.vn/api/kfood/v1/detailUser?` + params
    axios.post(url, {},
      // https://apifood.kaviet.vn/api/kfood/v1/deleteStudent?id_student=${id}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
      }
    ).then(
      ({ data }) => {
        console.log(">>>.")
        // console.log(data.data.role)
        setRole(data.data.role)
        setDataListRole(data.data)
      }
    ).catch((err) => { console.log(err) })
  };
  const handleOk = () => {
    setIsModalOpen(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <Modal title="Thông Tin Chi Tiết" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* {dataList..map((item)=>{
    return( */}
        {/* role_id: 15, role_name: 'Phó hiệu trưởng', role_rank: 2, permission: null}
user_account
: 
"phtr3"
user_name
: 
"Phó hiệu trưởng - 3" */}
        <Infor_site>
          <Title_infor>Thông tin người dùng</Title_infor>
          <Infor>
            <Left_div>
              <p>ID Người Dùng: </p>

              <input
                type='text'
                // name='id_user'
                value={dataListRole.id}
                placeholder={dataListRole.id}
                // readOnly={true}
                // onChange={e => onChange(e)}
                // onChange={this.onChange}
                style={{ width: "150px" }}
              />
              <p>User Name: </p>

              <input
                type='text'
                // name='user_name'
                value={dataListRole.user_name}
                placeholder={dataListRole.user_name}
                // readOnly={true}
                // onChange={e => onChange(e)}
                // onChange={this.onChange}
                style={{ width: "150px" }}
              />

            </Left_div>
            <Right_div>
              <p>ID Chức Vụ: </p>

              <input
                type='text'
                // name='id_group'
                value={Role.role_id}
                placeholder={Role.role_id}
                // readOnly={true}
                // onChange={e => onChange(e)}
                // onChange={this.onChange}
                style={{ width: "150px" }}
              />
              <p>Tên Chức Vụ: </p>
              <input
                type='text'
                // name='class_name'
                placeholder={Role.role_name}
                // onChange={e => onChange(e)}
                // onChange={this.onChange}
                style={{ width: "150px" }}
              />

            </Right_div>
          </Infor>
        </Infor_site>
        {/* )
  })}  */}

      </Modal>

      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản Lý Người Dùng</h1>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          &nbsp;
          <div className='dropdown'>
            <button
              type='button'
              className='btn dropdown-toggle'
              id='dropdownMsv'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='true'>
              Nhóm &nbsp; <span className='fa fa-caret-square-o-down'></span>
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
              {/* {lop.map((item) => (
                <li
                  to='/home/list-students'
                  key={item}
                  onClick={() => this.ChooseClass(item)}>
                  <a role='button'>{item}</a>
                </li>
              ))} */}
            </ul>
          </div>
          <label
            style={{
              paddingTop: "8px",
              paddingBottom: "2px",
              marginRight: "10px",
            }}>
            {sessionStorage.getItem("item")}
          </label>

          &nbsp;

          &nbsp;
          <Link to='/home/manage-user/add'
            className='btn btn-primary data'>
            <span className='fa fa-file-import'></span>&nbsp; Thêm Người Dùng
          </Link>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <table className='table--container'>

                <tbody>
                  <tr className='thea'>
                    {/* <td className='header-text'>STT</td> */}
                    <td className='header-text'>ID Chức Vụ</td>
                    <td className='header-text'>ID Người Dùng</td>
                    <td className='header-text'>Tên Chức Vụ</td>
                    <td className='header-text'>User Name</td>
                    <td className='header-text'>Xử  Lý</td>
                  </tr>
                  {dataList && dataList.map(
                    (group, index) => {
                      return (
                        <tr key={index}>
                          {/* <td > {1}</td> */}
                          <td>{group.id_role}</td>
                          <td> {group.id} </td>
                          <td>
                            <a onClick={() => showModal(group.id)}>

                              <span> {group.role_name} </span>
                            </a>



                          </td>
                          <td> {group.user_name} </td>
                          <td style={{ textAlign: 'center' }}>
                            <button
                            // onClick={() => Dele(_id)}
                            >
                              Xóa
                            </button>
                          </td>

                        </tr>)
                    })}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>






    </>

  );
};

export default ListUser;

const Infor_site = styled.div`
  background-color: white;
  padding: 2rem 3rem;
  width: 100%;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2),
    8px 8px 8px 8px rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  background-color: whitesmoke;
`;
const Infor = styled.div`
  display: flex;
  // width:500px
`;
const Left_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 35%;
`;
const Right_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 35%;
  margin-left: 2rem;
`;
const Image_div = styled.div`
  padding-top: 30px;
`;
const Title_infor = styled.p`
  font-size: 2.5rem;
  width: 60%;
  margin: auto;
  padding-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
  //   0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Title_gpa = styled.p`
  font-size: 2.5rem;
  // width: 50%;
  // margin: auto;
  padding-bottom: 20px;
  font-weight: bold;
  //text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
  //   0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Gpa_site = styled.div`
  // border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 10px;
  width: 40%;
  padding: 2rem 3rem;
  margin-left: 5%;
  height: 50vh;
  align-items: center;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2),
    8px 8px 8px 8px rgba(0, 0, 0, 0.19);
  text-align: center;
`;
const Site = styled.div`
  display: flex;
  margin-top: 10%;
`;
const Btn_site = styled.div`
  position: static;
  margin-top: 5vh;
  text-align: center;
`;
