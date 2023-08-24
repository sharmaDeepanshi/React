import React from 'react'

const Listing = () => {
    let langs=["React","Java","Mongodb","Next JS","Python"];
    let langObj=[
        {id:'1',lang:'Java'},
        {id:'2',lang:'Python'},
        {id:'3',lang:'React'},
        {id:'4',lang:'Next JS'},

    ]
  return (
    <div>Listing
        <h2>List of our languages</h2>
        <ul>
            {langs.map((lang,index)=>(
                    <li key={index}>{lang}</li>
            ))}
        </ul>
        <h2>List of Array objects</h2>
        {langObj.map((obj)=>(
            <li key={obj.id} style={{textAlign:"left",color:"red"}}>
                {obj.id} {obj.lang}
            </li>
        ))}
        {langObj.map((obj)=>(
               <li >{obj.lang}</li>
        ))}
    </div>
  )
}

export default Listing