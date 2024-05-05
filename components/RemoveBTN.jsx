"use-client"
import {HiOutlineTrash} from 'react-icons/hi'

const RemoveBTN = ({ id }) => {
  const removeTopic = async ()=>{
    const confirmed = confirm("Are you sure?")
    if(confirmed){
     const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method: "DELETE"
      });

      if(res.ok){
        location.reload()
      }
    }
  };

  return (
    <button onClick={removeTopic} className='text-red-400'>
      <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBTN
