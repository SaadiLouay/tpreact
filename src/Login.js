import React from 'react';
import Home from './home';

export default class Login extends React.PureComponent {

    state = {
        identifiant: null,
        motDePasse: null
    }

    seConnecter = () => {
        console.log(this.state.identifiant)
        console.log(this.state.motDePasse)

        if (this.state.identifiant === 'admin' && this.state.motDePasse === 'admin') {

        }else {

        }
    }

    handleChange(event) {
        const input = {};
        input[event.currentTarget.getAttribute('name')] = event.target.value;
        this.setState(Object.assign(this.state, input));
    }

    render() {
        return <div>
            identifant <input type="text" value={this.state.identifiant} name="identifiant" onChange={this.handleChange.bind(this)} />
            Mot de passe <input type="password" value={this.state.motDePasse} name="motDePasse" onChange={this.handleChange.bind(this)} />

            <button onClick={this.seConnecter.bind(this)}>Se connecter</button>
        </div>
    }
}