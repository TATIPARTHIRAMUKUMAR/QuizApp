import { useState } from "react";
import TextField from "@mui/material/TextField";
import landingImage from "../assets/QuizLandingPage.webp";
import Quiz from "../assets/quiz.png";
import { Autocomplete, Button, InputAdornment } from "@mui/material";
import PasswordIcon from "@mui/icons-material/Password";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch } from "react-redux";
import { user_login, user_signup } from "../redux/action";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { EmailOutlined } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});

  const onLogingChange = (key, value) => {
    console.log(key, value);
    let temp = { ...loginData };
    temp[key] = value;
    setLoginData(() => ({ ...temp }));
  };

  const onLogin = () => {
    const payload = {
      username: loginData?.user_name,
      password: loginData?.password,
    };
    dispatch(user_login(payload, () => {
      navigate("/dashboard");
      window.location.reload()
    }));
  };

  const onSignUp = () => {
    const payload = {
      username: loginData?.user_name,
      password: loginData?.password,
      email:loginData?.email,
      institution:loginData?.institution,
      role:loginData?.role?.label
    };
    dispatch(user_signup(payload, () => {
      setLoginStep(0);
    }));
  };

  const onVerify = () => {
    // const payload = {}
    toast.info("Under Development")

  }

  const [loginStep,setLoginStep] = useState(0);
  const [forget,setForget] = useState(false); 

  return (
    <div
      className="bg-center h-[100vh] w-[100vw] grid  items-center justify-center "
      style={{
        background: `radial-gradient(#852222, #1a225a)  , url(${landingImage})`,
        backgroundSize: "cover",
        backgroundBlendMode: "saturation",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="grid md:grid-cols-2 items-center justify-center gap-2 w-[91vw] md:w-[70vw] h-[70vh] outline outline-white bg-white bg-opacity-30 rounded-2xl shadow shadow-white overflow-hidden">
        <div className="hidden md:block w-full h-full bg-center grid items-center justify-center "
         style={{background:`url(${Quiz})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"120%"}} 
         >
          {/* <Image src={Quiz} className="w-[100%]" /> */}
        </div>
        <div className="relative flex items-center justify-center bg-white h-full w-[98vw] md:w-full bg-opacity-90 p-2 overflow-hidden"  > 
          <div
            className="absolute h-[70%] w-full flex flex-col gap-4 p-6 "
            style={{ left: loginStep === 0 ? "0" : "-100%" }}
          >
          {
            forget ? <>
            <ArrowBackIcon className="cursor-pointer" onClick={()=>{ setForget(false) }} />
            <div
              className="text-4xl font-semibold font-custom1 text-center"
             >
              Verify Email
            </div>

            <div className="grid gap-4 ">
              <TextField
                value={loginData?.email}
                id="standard-basic"
                label="Email"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("email", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />

            </div>
            
            <div className="flex justify-between items-center">
              <div>
                {" "}
                New user ?{" "}
                <span className="text-purple-700 font-semibold cursor-pointer" onClick={()=>{setLoginStep(1)}} >
                  {" "}
                  Register{" "}
                </span>{" "}
              </div>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => {
                  onVerify();
                }}
              >
                {" "}
                Verify{" "}
              </Button>{" "}
            </div>
          </> :

          
          <>
            <div
              className="text-5xl font-semibold font-custom1 text-center "
              style={{ color: "" }}
            >
              Login
            </div>

            <div className="grid gap-4 ">
              <TextField
                value={loginData?.user_name}
                id="standard-basic"
                label="User Name"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("user_name", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                value={loginData?.password}
                id="standard-basic"
                label="Password"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("password", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
                type="password"
              />
            </div>
            <div className="text-sm font-medium text-purple-700 cursor-pointer" onClick={()=>setForget(true)} >
              Forget password
            </div>
            <div className="flex justify-between items-center">
              <div>
                {" "}
                New user ?{" "}
                <span className="text-purple-700 font-semibold cursor-pointer" onClick={()=>{setLoginStep(1)}} >
                  {" "}
                  Register{" "}
                </span>{" "}
              </div>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => {
                  onLogin();
                }}
              >
                {" "}
                Login{" "}
              </Button>{" "}
            </div>
          </>
          }

          </div>

          <div
            className="absolute w-full flex flex-col gap-4 p-4"
            style={{ left: loginStep === 1 ? "0" : "100%" }}

          >
            <div
              className="text-5xl font-semibold font-custom1 text-center "
            >
              Sign up
            </div>
            <div className="grid gap-4 ">
              <TextField
                value={loginData?.user_name}
                id="standard-basic"
                label="User Name"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("user_name", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                value={loginData?.email}
                id="standard-basic"
                label="Email"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("email", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailOutlinedIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                value={loginData?.password}
                id="standard-basic"
                label="Password"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("password", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
                type="password"
              />

              <TextField
                value={loginData?.institution}
                id="standard-basic"
                label="Institution"
                variant="standard"
                style={{ width: "100%" }}
                onChange={(event) =>
                  onLogingChange("institution", event.target.value)
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessOutlinedIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />

              <Autocomplete
                disablePortal
                fullWidth
                id="combo-box-demo"
                variant="standard"
                style={{ width: "100%" }}
                options={[
                  { label: "Student", value: 1 },
                  { label: "Teacher", value: 2 },
                  { label: "Admin",   value: 3 },
                ]}
                sx={{ width: 300 }}
                onChange={(_, value) => onLogingChange("role", value)}
                renderInput={(params) => (
                  <TextField
                    variant="standard"
                    {...params}
                    label="Select Role"
                  />
                )}
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                {" "}
                Already a user ?{" "}
                <span className="text-purple-700 font-semibold cursor-pointer" onClick={()=>{setLoginStep(0);setForget(false)}} >
                  {" "}
                  Sign in{" "}
                </span>{" "}
              </div>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => {
                  onSignUp();
                }}
              >
                {" "}
                Sign up{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
