import React, { Component } from 'react'
import {Conatiner,BoxImage,Image,Buttons,Title,Info,RigthBtn,LeftBtn,CenterBtn,Desc,P,RightInfo,Type,StateAnime,
DureAnime,Source,LeftInfo,StartAnime,NumberApoist,Sesions,DetailsStyled,InfoButtom,StartWatching,LinkVideo,PlaceVideo
} from "../style/details";
import axios from 'axios';
export default class Details extends Component {
    state={
        anime:{}
    }
    componentDidMount() {
        this.getAnime();
    }
    
     getAnime= async()=> {
        const  id=this.props.match.params.id;
        const response = await  axios.get("/data.json");
        const anime =response.data.animes.find(item=>item.id==id);
        this.setState({anime:anime});
    }
 
    render() {
        console.log("details")
        return (
               <div>
                    <DetailsStyled>
            <Conatiner>
                <BoxImage><Image src={this.state.anime.url} /></BoxImage>
                <Info>
                    <Title>{this.state.anime.title}</Title>
                    <Buttons>
                        <RigthBtn>شريحة من الحياة</RigthBtn>
                        <CenterBtn>دراما</CenterBtn>
                        <LeftBtn>رومانسي</LeftBtn>
                    </Buttons>
                    <Desc>
                       <P>{this.state.anime.desc}</P>
                     <InfoButtom>
                     <RightInfo>
                     <Type>النوع: <span style={{color: '#006075'}}>Movie</span></Type> 
                     <StateAnime>حالة الأنمي: مكتمل</StateAnime>  
                     <DureAnime>مدة الحلقة: 1 ساعة و 38 دقيقة</DureAnime>
                      <Source>المصدر: رواية</Source>
                    </RightInfo>  
                    <LeftInfo>
                       <StartAnime>بداية العرض: 2021</StartAnime> 
                       <NumberApoist>عدد الحلقات: 1  </NumberApoist>  
                       <Sesions>الموسم: <span style={{color: '#006075'}}>شتاء 2020</span> </Sesions>
                       <StartWatching onClick={()=>{
                           document.getElementById("show").style.display = "grid";
                           document.getElementById("show").style.placeItems = "center";
                           window.scrollTo(0,document.body.scrollHeight);
            }}>شاهد الان</StartWatching>
                    </LeftInfo>   
                    </InfoButtom>  
                    </Desc>
                </Info>
             
            </Conatiner>
            <PlaceVideo id='show' className="row">
               <LinkVideo className="col-12 col-md-6  " frameBorder="0" marginWidth="0" marginHeight="0"  src={this.state.anime.iframe} allowFullScreen ></LinkVideo>
            </PlaceVideo>
          </DetailsStyled>
               </div>
        )
    }
}


