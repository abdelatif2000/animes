import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Amines extends Component {
    state={
        animesALL:[]
    }
      async componentDidMount() {
        const response = await  axios.get("/data.json");
        this.setState({animesALL:response.data.animes});
       }
 
    render() {
        console.log("render");
        return (
            <div className="listAnimes row">
      
              { this.state.animesALL.map(item=>{
                return (
                    <Link className="card col-6 col-sm-6 col-md-3 col-lg-2 " id='itemAnime'  to={`/details/${item.id}`} key={item.id}>
                        <img src={item.url}  className="card-img-top" alt="..."/>
                         <div className="card-body">
                         <p classNameclassName="card-text"> {item.title}</p>
                       
                         </div>  
                    </Link>
                )
            })}
            </div>
            


          
        )
    }
}

