import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import axios from 'axios';
import "./ListStudent.css";
import styled from "styled-components";
// import ListSV from "./Components/ListNL";
import { Link } from "react-router-dom";
// import bg_link from "./Components/avtar.png";
import avatar from "./Components/avatar.png"
// import "../table.scss"
const ListStudent = () => {

  const [dataList, setDataList] = useState([]);
  // axios('http://apikfood.kaviet.vn:5000/api/kfood/v1',)
  const dataListStudents = [
    {
      id_group: "1",
      ten_group: "Nhom hoc buoi chieu",

    }
  ]
  const tokenT = localStorage.getItem("token");
  // console.log(tokenT);

  useEffect(() => {
    axios.get(`https://apifood.kaviet.vn/api/kfood/v1/viewStudent`,
      {
        headers: {

          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }

    ).then(
      ({ data }) => {
        // console.log(data.data)
        setDataList(data.data)
      }
    )
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataStudent, setDataStudent] = useState([]);


  
  // const {role_name}=formData;
  // const onChange = e => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const showModal = (id) => {
    setIsModalOpen(true);
    const params = new URLSearchParams({
      id_student: id
    }).toString();
    const url = `https://apifood.kaviet.vn/api/kfood/v1/detailStudent?` + params
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
        //  alert(" thành công")
        // dataList.
        //  console.log(data)
        setDataStudent(data.data)
        //  setDataList(data.data)
      }
    ).catch((err) => { console.log(err) })
  };
  const handleOk = () => {
    setIsModalOpen(false);
    Update();
    console.log("run update")
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [dataListTemp, setDataListTemp] = useState([]);
  const Dele = (id) => {
    const params = new URLSearchParams({

      id_student: id
    }).toString();
    const url = `https://apifood.kaviet.vn/api/kfood/v1/deleteStudent?` + params
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
        // console.log(data)
        //  setDataList(data.data)
      }
    )
  }
  // console.log("k",dataStudent)
  // console.log("ob",Object.toString(dataStudent))
  // console.log("json",JSON.stringify(dataStudent))
  // console.log("dataLisst", dataList)
  console.log("db",dataStudent)
  const [formData,setFormData]=useState({
    student_name: "",
    student_birthday:"",
    student_gender: "",
    id_class:"",
    id_student:"",
  });
  const { student_name, student_birthday, student_gender,id_student,id_class } = formData;
console.log("form",formData);
const onChange = e => {
  setFormData({
    // if(e.target.name == )
    
    ...formData,
    [e.target.name]: e.target.value,
    
  });
  // console.log(formData)
};
const Update = ()=>{
  const params = new URLSearchParams({
    student_birthday:formData.student_birthday.split('-').join(''),
    student_gender:formData.student_gender,
    student_name:formData.student_name,
    id_class:formData.id_class,
    id_student:formData.id_student
  }).toString();
  const url = `https://apifood.kaviet.vn/api/kfood/v1/updateStudent?` + params
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
      alert("Cập nhật thành công")
      // dataList.
      console.log(data)
      //  setDataList(data.data)
    }
  ).catch(err=> console.log(err))
}
  return (
    <>

{/* json {"id":7,"id_class":null,"student_name":"NVA","student_gender":1,"student_birthday":20000908} */}
{/* student_name: undefined, student_birthday: undefined, student_gender: undefined, id_class: undefined} */}
      <Modal width={"50%"} title="Thông Tin Chi Tiết" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    
            <Infor_site>
              <Title_infor>Thông tin cá nhân</Title_infor>
              <Infor>
                <Image_div>
                  <img
                    className='avatar'
                    src={avatar}
                    width='150px'
                    height='150px'
                  />
                </Image_div>
                <Left_div>
                  <p>ID Học Sinh: </p>
                  {/* <label>{dataStudent.id}</label> */}
                  <input
                    type='text'
                    name='id_student'
                    // value={dataStudent.id}
                    placeholder={dataStudent.id}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  />
                  <p style={{ marginTop: "10px" }}>Họ và tên: </p>
                  <input
                    type='text'
                    name='student_name'
                    placeholder={dataStudent.student_name}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  />
                  <p style={{ marginTop: "10px" }}>Ngày sinh:</p>
                  <input
                    type='text'
                    name='student_birthday'
                    placeholder={(dataStudent.student_birthday)}
                    // onChange={this.onChange}
                    onChange={e => onChange(e)}
                    style={{ width: "150px" }}
                  />
                
                </Left_div>
                <Right_div>
                  <p>ID Lớp:</p>
                  {/* <label>{dataStudent.id_class}</label> */}
                  <input
                    type='text'
                    name='id_class'
                    placeholder={dataStudent.id_class}
                    // onChange={this.onChange}
                    onChange={e => onChange(e)}
                    style={{ width: "175px" }}
                  />
                    <p style={{ marginTop: "10px" }}>Giới tính:</p>
                  {/* <input
                    type='text'
                    name='student_gender'
                    placeholder={dataStudent.student_gender}
                    onChange={e => onChange(e)}
                    // onChange={this.onChange}
                    style={{ width: "150px" }}
                  /> */}
                    <select
                  className="form-control"
                  name="student_gender"
                  required
                  value={dataStudent.student_gender}
                  placeholder={dataStudent.student_gender}
                  onChange={e => onChange(e)}
                >
                  <option>--Select--</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
                </Right_div>
              </Infor>
            </Infor_site>
        

      </Modal>
      <div className='Container'>
        <div className='text_center'>
          <h1 id='qlsv'>Quản Lý Học Sinh</h1>
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
          <Link to='/home/manage-student/add'
            className='btn btn-primary data'>
            <span className='fa fa-file-import'></span>&nbsp; Thêm Học Sinh
          </Link>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <table className='table--container'>
                {/* <tr className='TT'>
          <td colSpan="5"> QUẢN LÝ TIN XE CỘ  </td></tr> */}
                <tbody>
                  <tr className='thea'>
                    {/* <td className='header-text'>STT</td> */}
                    <td className='header-text'>ID Học Sinh</td>
                    <td className='header-text'>Tên Học Sinh</td>

                    <td className='header-text'>Xử  Lý</td>
                  </tr>

                  {dataList.map(
                    (group) => {
                      return (

                        <tr >
                          {/* <td > {1}</td> */}
                          <td>{group.id}</td>
                          <td>
                            <a onClick={() => showModal(group.id)}>

                              <span> {group.student_name} </span>
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

export default ListStudent;

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
