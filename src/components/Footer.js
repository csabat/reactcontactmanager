import React, { Component } from 'react';

class Footer extends Component {


    handleAddContact = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;

        this.props.onAddContactSubmit({
            name: name,
            email: email,
            phone: phone
        })


    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleAddContact}> 
                <input name="name" type='text' />
                <input name="email" type='text' />
                <input name="phone" type='text' />
                <button>Submit</button>
            </form>
                
            </div>
        )
    }
    
}

export default Footer;
