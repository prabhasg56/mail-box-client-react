import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MailDetails = () => {
    const {mailId} = useParams();
    console.log("mailId")
  return (
    <>
      <Container>
        
      <h2>Here is your mail details {mailId}</h2>
      </Container>
    </>
  )
}

export default MailDetails;
