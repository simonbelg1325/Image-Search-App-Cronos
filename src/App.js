import React from "react";
import axios from "axios";
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from "./ImageList/ImageList";

const API_KEY = "18489297-5e8bd2221da63b0ca4b8ba132";



class App extends React.Component{

  state =  {
    images : [],
    error: null
  };

  handleGetRequest = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.SearchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo`;
  
    axios.get(url).then((res) => {
      !searchValue ? this.setState({error: "Please provide a search value!"}): this.setState({images: res.data.hits, error: null});
    })
  };

  render(){
    return(
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        {
         this.state.error !== null ? 
         <div style={{color:"#fff", textAlign: "center"}}>{this.state.error}</div> : <ImageList images={this.state.images}/>
        }
      </div>
    )
  };
}

export default App