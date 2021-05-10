import React from 'react';;
const ProjectListinfo=({p_present}) => {

    const {pr_price, pr_name, pr_maxNum} = p_present;
    

   


 
   
    return(

        



     
          
       
        
    <ul> 
        <li>선물 이름 : <span>{pr_name}</span></li> 
        <li>선물 가격 : <span>{pr_price}</span>원</li>
        <li>선물 수량: <span>{pr_maxNum}</span></li>
    </ul>

      
    
      


)

    }    
    

export default ProjectListinfo;