import React, { Component } from 'react'
import axios from 'axios';
import ShowImages from './ShowImages';
import './ShowImages.css'

class SearchForm extends Component {
    state={
        imageName:'',
        amount:'',
        images:[],
        apiURL:"https://pixabay.com/api/",
        apiKey:"20304612-d41453aa25f62f9ae22189cb2"
    }
    changeHandler =(e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    submitHandler=(e)=>{
        if(this.state.imageName === '' && this.state.amount === ''){
            this.setState({
                images:[]
            });
        }else if(this.state.imageName !== '' && this.state.amount !== ''){
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.imageName}
        &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        }
        
        e.preventDefault();
        this.setState({
            imageName:'',
            amount:''
        })
        this._input.focus();
    }

    
    render() {
        return (
            <div className='form'>
                <form onSubmit={this.submitHandler}>
                    <input className='image-input' type='text' name='imageName' ref={el=>this._input=el} value={this.state.imageName}  placeholder='Enter Image Type' onChange={this.changeHandler}></input>
                    <br />
                    <input className='image-amount' type='text' name='amount'  value={this.state.amount} placeholder="Enter Number Of Images" onChange={this.changeHandler}></input>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
                <br />
                {this.state.images.length > 0 ? <ShowImages images={this.state.images}/> : null}
            </div>
        )
    }
}

export default SearchForm
