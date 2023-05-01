import { useSelector,useDispatch } from "react-redux";
import Card from "../components/card";
import Footer from "../components/footer";

function Portofolio() {
  const data = useSelector((state)=>{
    console.log('masuk pora');
    return state.postReducer
  })
  console.log(data,"oi");
  return (
    <>
      <div className="grid-cols-3 grid gap-1 mb-20" style={{marginTop:"5vw"}}>
      {data.map((el)=>{
        return <Card data={el} key={el.id} />
      })}
          </div> 
      <Footer />
    </>
  );
}


export default Portofolio;
