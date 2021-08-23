import React from 'react'

const Dashboard = ({inquiries}) => {
    return (
        <div>
            {inquiries.map(inquiry => <p>{inquiry.firstName} {inquiry.date}</p>)}
        </div>
    )
}

export default Dashboard
