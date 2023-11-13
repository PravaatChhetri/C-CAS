import React,{useState} from "react";
import logo from "../assets/CCASLogo.png"; // Adjust the relative path
import styled from "styled-components";
import axios from "axios";
import bcrypt from "bcryptjs"; // Import bcrypt
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
  margin: auto;

`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signIn !== true
      ? `transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      `
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

const Form = styled.form`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ffae42;
  background-color: #ffae42;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-tranform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const OverLayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

const OverLay = styled.div`
  background: #ff416c;
  background: webkit-linear-gradient(to right, #ffae42, #ffae42, #fbbd23);
  background: linear-gradient(to right, #ffae42, #fbbd23);
  background-repeat: no-repeat;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverLayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

const RightOverLayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 0;
`;

const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [signInEmail, setSignInEmail] = React.useState("");
  const [signInPassword, setSignInPassword] = React.useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  
  
  // Store the hashed password
  const handlePasswordHashing = async () => {
    try {
      const saltRounds = 10; // You can adjust this based on your requirements
      const hashed = await bcrypt.hash(password, saltRounds);
      setHashedPassword(hashed);
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  };

  const handleSignUp = async (e) => {
    console.log("hashed password", hashedPassword);
    e.preventDefault();
    try {
      // Make a POST request to the server to create a new user
      const response = await axios.post("http://localhost:8000/users", {
        name:username,
        email,
        role: "Student",
        password:hashedPassword, // Store the hashed password
      });
      console.log("User created:", response.data);
      alert("User created:", response.data);
      if(response.data){
        setUser(response.data);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the server to log in the user
      const response = await axios.post("http://localhost:8000/users/login", {
        email: signInEmail,
        password: signInPassword,
      });
      // When the user logs in
localStorage.setItem("userRole", response.data.role);
localStorage.setItem("userEmail", response.data.email);
localStorage.setItem("userName", response.data.name);

      alert(response.data.name+" logged in");
      if(response.data.role==="Canteen Owner"){
      navigate('/dashboard');}
      else if(response.data.role==="Admin"){
        navigate('/dashboard-admin');
      }
      else{
        navigate('/dashboard-student');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in:", error);
    }
  }





  return (
    <Container >
      <SignUpContainer signinIn={signIn}>
        <Form onSubmit={handleSignUp}>
          <Title className="text-2xl">Create Account</Title>
          <Input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Name" />
          <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
          <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value);handlePasswordHashing();
}} placeholder="Password" />
          <Button type="submit">Sign Up</Button>
        </Form>
      </SignUpContainer>

      <SignInContainer signinIn={signIn}>
        <Form onSubmit={handleSignIn}>
          <Title className="text-2xl">Sign In </Title>
          <Input type="email" value={signInEmail} onChange={(e)=>{setSignInEmail(e.target.value)}} placeholder="Email" />
          <Input type="password" value={signInPassword} onChange={(e)=>{setSignInPassword(e.target.value)}} placeholder="Password" />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button type="submit">Sign In</Button>
        </Form>
      </SignInContainer>

      <OverLayContainer signinIn={signIn}>
        <OverLay signinIn={signIn}>
          <LeftOverLayPanel signinIn={signIn}>
            <div>
              <img src={logo} alt="Logo" />
              <Paragraph>Login to order now!</Paragraph>
            </div>
            {/* <Title>Welcome back!</Title> */}

            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverLayPanel>

          <RightOverLayPanel signinIn={signIn}>
            <ImageContent>
              <img src={logo}  alt="Logo" />
              <Paragraph className="font-medium">Sign up to enjoy delicious food now!</Paragraph>
            </ImageContent>
            {/* <Title>Hello Friends!</Title> */}

            <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
          </RightOverLayPanel>
        </OverLay>
      </OverLayContainer>
    </Container>
  );
};

export default Login;
