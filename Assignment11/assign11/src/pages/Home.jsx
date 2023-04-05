import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return(
       <div>
           <h1>This is Home Page</h1>
           <button style={{
                margin: "20px auto",
                display: "flex",
                backgroundImage: "linear-gradient(to right, #3acadf, #651fff 95%)",
                color: "white",
                padding: "10px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                fontSize: "13px",
                width: "auto",
                alignItems: "center",
                justifyContent: "center",
            }} onClick={() => navigate("/")}>Log in</button>
       </div>
    );
   }