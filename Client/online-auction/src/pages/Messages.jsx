import React, { useState, useEffect } from 'react';
import { AdmNav } from '../components/AdmNav';
import axios from 'axios';

export const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:19999/api/v4/getForm') 
            .then((response) => {
                setMessages(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching messages:', error);
            });
    }, []);
    //  console.log(messages);
    return (
        <div>
            <AdmNav />
            <div className="w-screen h-screen p-5 bg-gray-100">
                <h1 className="text-2xl font-bold mb-5">Admin Messages</h1>
                <div className="bg-white shadow-md rounded-lg p-4">
                    {messages.length > 0 ? (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">Email</th>
                                    <th className="border px-4 py-2">Subject</th>
                                    <th className="border px-4 py-2">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg) => (
                                    <tr key={msg._id} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{msg.Email}</td>
                                        <td className="border px-4 py-2">{msg.Subject}</td>
                                        <td className="border px-4 py-2">{msg.Message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center text-gray-600">No messages received yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messages;