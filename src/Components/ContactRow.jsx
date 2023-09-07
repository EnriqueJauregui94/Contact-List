import React from 'react';
import ContactList from './ContactList';

export default function ContactRow({ contact }) {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}
