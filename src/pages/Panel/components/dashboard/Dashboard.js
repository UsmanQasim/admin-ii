import React from 'react'

const Dashboard = ({inquiries}) => {
    return (
        <div>
            {inquiries.map((inquiry, key) => <p key={key}>{inquiry.firstName} {inquiry.date}</p>)}
        </div>
    )
}

export default Dashboard
