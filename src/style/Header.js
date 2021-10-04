import styled from 'styled-components';
export const Item=styled.a`
padding: 25px 9px;
font-size: 14px;
color: #1e1e1e;
font-weight: bold;
font-size:20px;
font-family: NeoSansArabic-Bold,Arial,sans-serif;
text-decoration:none;
`

export const Container=styled.div`
  @media (max-width: 770px) {
       width:100%;
    }
`
export const BoxItem=styled.li`
    a:hover{
      color:black;

    }
    @media (max-width: 770px) {
       border-bottom: 1px Solid #e0e0e0;
       width:107%;
       a{
         width: 100%;
         display: block;
         padding: 5px;
       }
       a:hover{
         background: #428bca;
         color:white;
       }
       
    }
`
export const Nav=styled.div`
display:flex;
align-items: center;
/* background:green; */
justify-content: space-between;
flex-wrap:wrap;
@media (max-width: 1200px) {
  flex-direction:column;  
  ul{
    width:100%;
    margin:30px 0;
  }
}
`

export const Filter=styled.div`
  display:flex;
  /* background:gray; */
  /* direction:ltr; */
  /* width:22%; */
  @media (max-width: 1198px) {
     margin:auto;
     display:block;
}
`
export const GroupItems=styled.ul`
    display:flex;
    margin-top: 23px;
    align-items: center;
    list-style: none;
    transition: height 1s ease-in-out ;

    @media (max-width: 770px) {
       flex-direction:column;
       border:1px solid #e0e0e0;
       width:100%;
       height:0;
       overflow:hidden;
       align-items: flex-start;
       height:${props=>props.show===false ? "0" :"100%" };
       display: ${props=>props.show===false ? "none" :"flex" };
    }

`
export const BoxImage=styled.div`
@media (max-width: 1024px) {
   
}
 
`

export const BtnSearch=styled.button`
    width: 40px;
    height: 39px;
    padding: 6px;
    border-radius: 46px;
    background-color: #f0f0f0;
    color: #1e1e1e;
    line-height: 56ox;
    margin-left: 5px;
    outline:none;
    border: none;
   
`
export const BtnUser=styled(BtnSearch)`
   
`
export const BtnSun=styled(BtnSearch)`
   
`
export const BtnSHowMenu=styled.button`
    width: 100%;
    background: black;
    color: white;
    height: 40px;
    text-align: right;
    padding: 10px 7px;
    display:none;
    margin-bottom:${props=>props.show===false ? "30px" :"0"};
    @media (max-width: 770px) {
      display:block;
    }
`
  
