import React from 'react'
import Chai from './Chai'
import Chai1 from './Chai1'
import Chai2 from './Chai2'
import Chai3 from './Chai3'



import styledComponents from 'styled-components'


function Home() {
  return (
    <HiIamContainer>
      
       
        <Chai
        title="model X"
        description="test"
        backgroundImg="model-x.jpg"
        
       />
       <Chai1
        title="model Y"
        description="test"
        backgroundImg="model-y.jpg"
        
        />
      
         <Chai2
        
        title="model 3"
        description="test"
        backgroundImg="model-3.jpg"
        
        />
        <Chai3
        
        title="new-interior"
        description="test"
        backgroundImg="new-interior.jpg"
        
        />
      
 </HiIamContainer>
   
  )
}
export default Home
const HiIamContainer=styledComponents.div`` 