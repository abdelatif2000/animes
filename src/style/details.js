import styled from 'styled-components';
export const Conatiner=styled.div`

  display:flex;
  align-items: center;
  justify-content: space-between;
  background-image: url('images/background-1.png');
  @media (max-width:770px){
    flex-direction: column;
  };
  
`
export const BoxImage=styled.div`
  width:40%;
  margin:3% 4%;
  margin-left: 5%;
  box-shadow: 0 -1px 19px 7px rgb(0 0 0 / 64%);

  @media (max-width:1230px){
      width:90%;  
      text-text-align:center;
  };
  @media (max-width:770px){
      width:50%;
      text-align:center;
  };

`
export const DetailsStyled =styled.div`
  background-image:url('/images/background-1.png');
  background:#1e2331;
  height:100vh;
  *{
    color:white;
    font-weight: bold;
    background:#1e2331;
  } 

`
export const Image=styled.img`
width:100%;
height:100%
`
  
export const Buttons=styled.div` 
margin-bottom: 3%;
 
`

export const Title=styled.h1`
 /* text-align:center; */
 margin: 3% 0;
 @media (max-width:770px){
      font-size: 24px;
      text-align:center;
  }
 
`
  
export const Info=styled.div``
  
export const RigthBtn=styled.button`
    padding: 9px 18px;
    border: 1px solid #4b555f;
    border-radius: 25px;
    margin-left: 7px;
    color: #fff;
    font-size: 20px;
    display: inline-block;
    margin-bottom: 6px;
    background:rgba(0,0,0,0);
    @media (max-width:770px){
      font-size: 14px
  }

`
export const LeftBtn=styled(RigthBtn)``
  

export const CenterBtn=styled(RigthBtn)``
  
export const Desc=styled.div`
   *{
       font-size: 18px;
       font-weight: 700;
   }
`
export const P=styled.p`
 margin-bottom: 3%;

 `
export const InfoButtom=styled.div`
    display: flex;
    align-items: center;
    @media (max-width:770px){
    flex-direction: column;
    align-items: flex-start;
    
  };
`
export const RightInfo=styled.div`
   width:47%;
   margin-bottom: 3%;
   @media (max-width:770px){
    margin-left:5%;
  };
`
export const Type=styled.div``
export const StateAnime=styled.div``
export const DureAnime=styled.div``
export const Source=styled.div``
export const LeftInfo=styled.div`
width:50%;
margin-bottom: 3%;
@media (max-width:770px){
    margin-left:4%;
  };
`
export const StartAnime=styled.div``
export const NumberApoist=styled.div``
export const Sesions=styled.div``


export const StartWatching=styled(RigthBtn)`
   background:green;
`
export const PlaceVideo=styled.div`
    display :none;
    padding:20px 0; 
    height:300px
    /* height:200px;
    width:100% */
    
    
`
export const LinkVideo=styled.iframe`
/* @media (max-width:770px){

  } */

  

  

`

