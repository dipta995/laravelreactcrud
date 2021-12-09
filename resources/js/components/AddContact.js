import React from 'react';
import axios from 'axios';


class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
        mobile: ""
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    saveContact = async(e) => {
        e.preventDefault();
        const res = await axios.post("/contact",this.state);
        this.setState({name: '',email: '',mobile:'',phone: ''});
        if (res.data.status===200) {
            this.props.hooks.push("/");
        }

    }
    render(){
        return(
            <div>
            <form onSubmit={this.saveContact}>
               <div className="form-group">
                    <label className="col-form-label mt-4" for="inputDefault">Name</label>
                    <input type="text" className="form-control" placeholder="Default input"  name="name" value={ this.state.name } onChange={this.handleInput} required />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-4" for="inputDefault">Email</label>
                    <input type="email" className="form-control" placeholder="Default input"  name="email" value={ this.state.email } onChange={this.handleInput} required />
                    <div className="form-group">
                    <label className="col-form-label mt-4" for="inputDefault">Mobile no</label>
                    <input type="text" className="form-control" placeholder="Default input"  name="mobile" value={ this.state.mobile } onChange={this.handleInput} required />
                </div>
                <div className="form-group">

                    <input type="submit"  value="Create" className="btn btn-success" />
                </div>
                </div>
            </form>
            </div>
        )
    }
}

export default AddContact;
