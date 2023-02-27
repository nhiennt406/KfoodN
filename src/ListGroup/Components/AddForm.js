import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import CallApi from "../../API/CallApi";
import axios from "axios";
import { API_URL } from "../../API/Config";
const AddForm = () => {
  const [formData, setFormData] = useState({
    group_name: ""
  });
  const { group_name } = formData;
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const params = new URLSearchParams({
    group_name: formData.group_name,
  
  }).toString();
  const url=`https://apifood.kaviet.vn/api/kfood/v1/createClassGroup?`+ params
  const onSubmit = e => {
    e.preventDefault();
    // createPost(formData);
    // createClassGroup?group_name=test1
    axios.post(url,{},
    
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    ).then((res) => {
      alert("Them thanh congo");
      console.log(res)
    })
      .catch((err) => {
        alert("Them thất bại");
      }
      )
  };

  return (
    <div className="addForm">
      <div className="back">
        <Link to="/home/mange-group" className="btn btn-danger">
          <span className="fa fa-arrow-left"></span> &nbsp; Quay lại
        </Link>
      </div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 center">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm Nhóm Lớp Học</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label>Tên nhóm lớp học: </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="group_name"
                  value={group_name}
                  onChange={e => onChange(e)}
                />

                <div className="text_center">
                  <button
                    type="submit"
                    className="button submit btn btn-primary"
                    onClick={(e) => onSubmit(e)}
                  // onClick={() => Them(this.state.group_name)}
                  >
                    <span className="fa fa-plus"></span> &nbsp;Lưu lại
                  </button>{" "}
                  &nbsp;
                  <Link
                    to="/home/mange-group"
                    className="button cancle btn btn-primary"
                  >
                    <span className="fa fa-close"></span> &nbsp;Hủy bỏ
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AddForm;
