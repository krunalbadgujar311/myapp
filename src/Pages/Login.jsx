import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {

  const [err,setErr]=useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/home")
  } catch (err) {
    setErr(true);
    setLoading(false);
  }
};
  return (
    <div className="Mainbox">
        <div className="Innerbox">
            <div className="Signlogo">
              <img src="https://assets.letsendorse.com/le/1569936014_MLLzYtBtFMUGOyhkCD_15699360147541/2020/08/24/mffJn15982450052120.png"/>
            </div>
            <span className="Registration">नोंदणी</span>
            <form  onSubmit={handleSubmit}>
                <input type="email" placeholder="ईमेल"/>
                <input type="password" placeholder="पासवर्ड"/>
                <button>साइन इन करा</button>
                {err && <span>काहीतरी चूक झाली</span>}
            </form>
            <p>तुमचे खाते नाही आहे? <Link to="/register">नोंदणी करा</Link></p>
        </div>
    </div>
  )
}

export default Login
