import React, { Component } from 'react';
import './NewClient.css';
import {PostData} from '../../services/Services/PostData';



export class NewClient extends Component {


    constructor(props){
        super(props);
        this.state = {
            name: "",
            first_name:"",
            address:"",
            email: "",
            phone:"",
            registrationErrors: ""
          };
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
       
        var config ={
            host: '127.0.0.1',
           user: 'root',
           password: 'Root123*',
           port: '3306', 
           database: 'tfe'
        }
        var mysql = require ('mysql');
        var connection = mysql.createConnection(config);
        connection.connect();
        console.log(connection);

       
    }

    signup() {
        if(this.state.name && this.state.first_name && this.state.address && this.state.email && this.state.phone){
            PostData('signup',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                }
                else alert(result.error);
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return (
            <div>
                <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w780">
                        <div className="card card-3">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Nouveau Client</h2>
                                <form method="POST">
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Nom" name="name" onChange={this.onChange} />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Prénom" name="first_name" onChange={this.onChange} />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Adresse" name="address" onChange={this.onChange} />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" onChange={this.onChange} required />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone" onChange={this.onChange} />
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" onClick={this.signup}>Créer le client</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewClient