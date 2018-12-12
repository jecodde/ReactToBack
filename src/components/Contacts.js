import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {

    constructor(){
        super();
        this.state = {
            contacts:[
                {
                    id: 1,
                    name: 'Jon Doe',
                    email: 'jdoe@gmail.com',
                    phone: '111-111-111'
                },
                {
                    id: 2,
                    name: 'ger Doe',
                    email: 'ger@gmail.com',
                    phone: '22-2-3333'
                },
                {
                    id: 3,
                    name: 'har Doe',
                    email: 'har@gmail.com',
                    phone: '333-32-333533'
                }
            ]
        }
    }


  render() {

    const {contacts} = this.state;

    return (
      <div>
          {contacts.map((contact)=>
            <Contact
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
            />
            )}
      </div>
    )
  }
}

export default Contacts;
