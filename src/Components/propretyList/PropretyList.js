import useFetch from "../../hooks/userFetch";
import "./propretyList.scss";
const PropertyList = () => {
 const imgs = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6b7abc54c782f11a0_3.png",
    "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e6e7345f8606c14439_2.png",
    "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd892e61cab6c8d61313a06_1.png"
  ]
  const {data,loading,error} = useFetch("/hotels/countByType")

  return (
    <div className="pList">
      {loading? "loading...":<>
     {
      imgs.map((img,i)=>{
       return(
        <div className="pListItem" key={i}>
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
       )
      })
     }</>}
      
     
    </div>
  );
};

export default PropertyList;