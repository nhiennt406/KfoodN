import React, { useEffect, useState } from 'react';
import {  Container, Header, Icon } from 'semantic-ui-react'
import axios from 'axios';
import "./ListGroup.css";
// import ListSV from "./Components/ListNL";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
// import "../table.scss"
const ListGroup = () => {

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
    axios.get(`https://apifood.kaviet.vn/api/kfood/v1/viewClassGroup`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }

    ).then(
      ({ data }) => {
        console.log(data.data)
        setDataList(data.data)
      }
    )
  }, []);
  // useEffect(() => {
  //   axios.post(`http://apikfood.kaviet.vn:5000/api/kfood/v1/viewRole`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }

  //   ).then(
  //     ({ data }) => {
  //   console.log(data)
  //   //  setDataList(data.data)
  //     }
  //   )
  // }, []);

  // const item={};
  const [dataListTemp, setDataListTemp] = useState([]);
  const Dele = (id) => {
    const params = new URLSearchParams({
      // id_class

      id_group: id
    }).toString();
    const url = `https://apifood.kaviet.vn/api/kfood/v1/deleteClassGroup?` + params
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
        alert("Xóa thành công")
        // dataList.
        console.log(data)
        //  setDataList(data.data)
      }
    )
  }
  const [opened, setOpened] = useState(true);
  const [open, setOpen]=useState(false)
  // const [opened, setOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (id) => {
    setIsModalOpen(true);
    // console.log(id);
    localStorage.setItem("id",id);
    // console.log(">>",localStorage.getItem("id"))
  
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
  return (
    <>
              
      <a onClick={showModal}>
        Open Modal
      </a>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       {dataList.map((item) =>{ 
         const id_temp=localStorage.getItem("id")
          return item.id==id_temp?
      (
        
        <table className='table--container'>
        <tbody>
          <tr className='thea'>
            {/* <td className='header-text'>STT</td> */}
            <td className='header-text'>ID Nhóm Lớp Học</td>
            <td className='header-text'>Tên Nhóm Lớp Học</td>

            <td className='header-text'>Xử  Lý</td>
          </tr>

        

                <tr >
                  {/* <td > {1}</td> */}
                  <td>{item.id}</td>


                  <td>
                  {/* <Button onClick={() => setOpened(false)}>dđ</Button> */}
                    <a >
                
                      <span> {item.group_name} </span>
                      </a>
                  </td>

                  <td style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => Dele(item.id)}
                    >
                      Xóa
                    </button>
                  </td>

                </tr>
        </tbody>
      </table>

        ):("")

      })}
      </Modal>
 
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản Lý Nhóm Lớp Học</h1>
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
          <Link to='/home/manage-group/add'
            className='btn btn-primary data'>
            <span className='fa fa-file-import'></span>&nbsp; Thêm Nhóm Lớp Học
          </Link>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <table className='table--container'>
                <tbody>
                  <tr className='thea'>
                    {/* <td className='header-text'>STT</td> */}
                    <td className='header-text'>ID Nhóm Lớp Học</td>
                    <td className='header-text'>Tên Nhóm Lớp Học</td>

                    <td className='header-text'>Xử  Lý</td>
                  </tr>

                  {dataList.map(
                    (group) => {
                      return (

                        <tr >
                          {/* <td > {1}</td> */}
                          <td>{group.id}</td>


                          <td>
                          {/* <Button onClick={() => setOpened(false)}>dđ</Button> */}
                            <a onClick={()=>showModal(group.id)}>
                        
                              <span> {group.group_name} </span>
                              </a>
                          </td>

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

export default ListGroup;
