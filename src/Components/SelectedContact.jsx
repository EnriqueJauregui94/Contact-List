import React, { useState, useEffect } from "react";
import "./SelectedContact"; // Import the CSS file

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContactData() {
            try {
                if (selectedContactId) {
                    const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
                    const contactData = await response.json();
                    setContact(contactData);
                } else {
                    // Clear the contact data when selectedContactId is null
                    setContact(null);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchContactData();
    }, [selectedContactId]);

    return (
        <div className="selected-contact-container"> {/* Apply CSS class */}
            <h2>Selected Contact</h2>
            {contact ? (
                <div className="contact-details"> {/* Apply CSS class */}
                    <p><strong>Name:</strong> {contact.name}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Phone:</strong> {contact.phone}</p>
                    {/* Add more contact details here */}
                    <button onClick={() => setSelectedContactId(null)}>Back to List</button>
                </div>
            ) : (
                <p>No contact selected.</p>
            )}
        </div>
    );
}