import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () =>{
    console.log("-----")
    return navigate("/");
  }
  return (
    <>
     <div className='component'>Contact</div>
     <button onClick={handleSubmit}>Submit Form</button>
    </>
  );
}

export default Contact;
