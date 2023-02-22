import React, { useEffect, useState } from 'react';

import axios from 'axios';
import "./ListRole.css";
// import ListSV from "./Components/ListNL";
import { Link } from "react-router-dom";
import { API_URL } from '../API/Config';
import { Button, Modal } from 'antd';
// import "../table.scss"
const ListRole = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataClass, setDataClass]=useState([]);

  const showModal = (id) => {
    setIsModalOpen(true);
    const params = new URLSearchParams({
      id_role:id}).toString();
       const url=`https://apifood.kaviet.vn/api/kfood/v1/detailRole?`+ params
       axios.post(url,{},
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
          //  alert(" thành công")
           // dataList.
           console.log(data)
           //  setDataList(data.data)
         }
       ).catch((err)=>{console.log(err)})
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
const [dataList,setDataList]=useState([]);

 const dataListRoles=[
  {
    id_group:"1",
    ten_group:"Nhom hoc buoi chieu",
  
  }
 ]

  axios.post(`https://apifood.kaviet.vn/api/kfood/v1/viewRole`,{},
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },params:{}
  }
  
  ).then(
    ({ data }) => {
  // console.log(data)
  setDataList(data.data)
  // console.log(localStorage.getItem("token"))
  //  setDataList(data.data)
    }
  )

  const [dataListTemp, setDataListTemp] = useState([]);
  const Dele = (id) => {
    const params = new URLSearchParams({

   id_role:id}).toString();
    const url=`https://apifood.kaviet.vn/api/kfood/v1/deleteRole?`+ params
    axios.post(url,{},
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
        // setDataClass(data)
        alert("Xóa thành công")
        // dataList.
        console.log(data)
        //  setDataList(data.data)
      }
    )
  }
  return (
    <>
 <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  hihi
 </Modal>
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản Lý Chức Vụ</h1>
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
          <Link to='/home/manage-role/add'
            className='btn btn-primary data'>
            <span className='fa fa-file-import'></span>&nbsp; Thêm Chức Vụ
          </Link>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <table className='table--container'>
        {/* <tr className='TT'>
          <td colSpan="5"> QUẢN LÝ TIN XE CỘ  </td></tr> */}
        <tbody>
          <tr className='thea'>
            {/* <td className='header-text'>STT</td> */}
            <td className='header-text'>ID Chức Vụ</td>
            <td className='header-text'>Tên Chức Vụ</td>
          
            <td className='header-text'>Xử  Lý</td>
          </tr>

          {dataList.map(
            (group) => {
              return (

                   <tr >
               
                  <td>{group.id}</td>
                  <td>
                     {/* {group.role_name}  */}
                  <a onClick={()=>showModal(group.id)}>
                        
                        <span> {group.role_name} </span>
                        </a></td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => Dele(group.id)}
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

export default ListRole;
