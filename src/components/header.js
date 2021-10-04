import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Container,Filter,GroupItems,Item,BoxItem,BoxImage,BtnSHowMenu,BtnUser,BtnSearch,BtnSun} from '../style/Header';
import  {Link,BrowserRouter}  from 'react-router-dom'

export default class Header extends Component {
  state={
    show:false
  }
    render() {
        return (
            <Container className="container-fluid" >
            <Nav className="container">
             <BoxImage ><BrowserRouter><Link to="/"><img src='/images/logo.png' alt="logo "/></Link></BrowserRouter> </BoxImage>
                <BtnSHowMenu show={this.state.show} onClick={()=>this.setState({show:!this.state.show})}> <i style={{padding:"0 0 0 5px"}} class="fa fa-bars"></i>القائمة</BtnSHowMenu>
                <GroupItems show={this.state.show}>
                  <BoxItem className="nav-item">
                    <Item  href="#">الرئيسية</Item>
                  </BoxItem>
                  <BoxItem >
                    <Item href="#">قائمة الأنمي</Item>
                  </BoxItem>
                  <BoxItem>
                    <Item  href="#">أفلام الأنمي  </Item>
                  </BoxItem>
                  <BoxItem className="nav-item">
                    <Item  href="#"> أنميات الموسم </Item>
                  </BoxItem>
                  <BoxItem className="nav-item">
                    <Item href="#"> مواعيد الحلقات  </Item>
                  </BoxItem>
                  <BoxItem className="nav-item">
                    <Item href="#"> اتصل بنا  </Item>
                  </BoxItem>
                </GroupItems>
                <Filter className="d-flex" >
                  <BtnSun className="sun" type="submit"><i class="fas fa-sun"></i></BtnSun>
                  <BtnSearch className="search" type="submit"><i class="fas fa-search"></i></BtnSearch>
                  <BtnUser className="user" type="search"   ><i class="fas fa-user"></i></BtnUser>
                </Filter>
              </Nav>
          </Container>
        )
    }
}
