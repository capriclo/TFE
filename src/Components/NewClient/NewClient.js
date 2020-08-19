import React, { Component } from 'react';
import './NewClient.css'

export class NewClient extends Component {
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
                                        <input className="input--style-3" type="text" placeholder="Nom" name="name"/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Prénom" name="first_name"/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Adresse" name="address"/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" />
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone" />
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit">Créer le client</button>
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