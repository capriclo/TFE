import React, { Component } from 'react';
import './Client.css';

export class Client extends Component {
    render() {
        return (
            <div>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 client_id">
                                <div className="profile-head">
                                            <h1>
                                                Client 12645
                                            </h1>
                                            <h4>
                                                Points de fidélité : <span>175</span>
                                            </h4>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Archivez le client"/>
                            </div>
                        </div>
                        <div className="row client_data">
                            <div className="col-md-8">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="caracteristics">
                                                <label>Nom</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Hubin</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="caracteristics">
                                                <label>Prénom</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Loris</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="caracteristics">
                                                <label>Adresse</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Rue Jacque Prévert n°11 7000 Mons</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="caracteristics">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>loris.hubin@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="caracteristics">
                                                <label>Numéro de téléphone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>+33 654 589 124</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>           
                </div>
            </div>
        )
    }
}

export default Client
