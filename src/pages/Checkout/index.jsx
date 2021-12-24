import React, { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useAuth } from "../../context/AuthContext";

const Checkout = () => {
  const [form, setform] = useState({ userName: "", password: "" });
  const [erro, setErro] = useState({});
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleInput = (ev) => {
    setform({
      ...form,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  };
  const submit = (ev) => {
    ev.preventDefault();
    let erroObject = {};
    if (!form.userName.trim()) {
      erroObject.userName = "Khong de trong";
    } else if (!emailRegex.test(form.userName)) {
      erroObject.userName = "vui long dien dung dinh dang";
    }
    if (!form.password) {
      erroObject.password = "khong de trong";
    } else if (form.password.length < 6 || form.password.length > 32) {
      erroObject.password = "pass phai tu 6 -32 ky tu";
    }
    setErro(erroObject);
    if (Object.keys(erroObject).length === 0) {
      alert("thanh cong");
    }
  };
  const _onChange = (name) => (ev) => {
    setform({
      ...form,
      [name]: ev.currentTarget.value,
    });
  };
  return (
    <>
      <div className="checkout-page">
        <div className="container">
          <div className="form-wrap">
            <h1>Register</h1>
            <form onSubmit={submit}>
              <TextField
                label="UserName"
                value={form.username}
                onChange={_onChange("userName")}
                placehoder="Example@gmail.com"
                helperText={erro.userName}
              />
              <TextField
                label="Password"
                value={form.password}
                onChange={_onChange("password")}
                placehoder="Password"
                helperText={erro.password}
              />
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
