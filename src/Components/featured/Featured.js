import useFetch from '../../hooks/userFetch'
import './featured.scss' 

const Featured = () => {
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
  console.log(data);
  return (
    <div className='featured'>
        {loading? "it's loading please wait":
        <>
         <div className='featuredItem'>
            <img src="https://i.pinimg.com/originals/c1/7b/2a/c17b2a827edb14b8b3c4451992911250.jpg" alt="" className="featuredImg"/>
            <div className='featuredTitles'>
                <h1>Madrid</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
        <img src="https://i.pinimg.com/originals/c1/7b/2a/c17b2a827edb14b8b3c4451992911250.jpg" alt="" className="featuredImg"/>
            <div className='featuredTitles'>
                <h1>Berlin</h1>
                <h2>{data[0]} properties</h2>
            </div>
       </div>
        </>
       }
    </div>
  )
}

export default Featured