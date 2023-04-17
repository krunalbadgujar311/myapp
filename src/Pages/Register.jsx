import React,{useState} from 'react'
import Add from "../Image/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,db,storage} from "../Firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err,setErr]=useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    

    try{
    const res=await createUserWithEmailAndPassword(auth, email, password);
    const date = new Date().getTime();
    const storageRef = ref(storage, `${displayName + date}`);

    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          //Update profile
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          //create user on firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          //create empty user chats on firestore
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        } catch (err) {
          console.log(err);
          setErr(true);
          setLoading(false);
        }
      });
    });
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
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="नाव"/>
                <input type="email" placeholder="ईमेल"/>
                <input type="password" placeholder="पासवर्ड"/>
                <input style={{display:"none"}} type="file" id="file" text='छायाचित्र'/>
                <label htmlFor="file">
                    <img src={Add} alt=""/>
                    <span>छायाचित्र</span>
                </label>
                <button disabled={loading}>साइन अप करा</button>
                {loading && "प्रतिमा अपलोड आणि संकुचित करत आहे कृपया प्रतीक्षा करा..."}
                {err && <span>काहीतरी चूक झाली</span>}
            </form>
            <p>
              तुमचे खाते आहे का? <Link to="/">लॉगिन</Link>
            </p>
        </div>
    </div>
  )
}

export default Register