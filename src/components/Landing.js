import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import '../App.css';

const Landing = () => {
    const [ytid, setYtid] = useState("localhost:3000");

    const btnClick = (e) => {
        if (document.getElementById('ytinput').value !== '') {
            let id = (document.getElementById('ytinput')).value
            let splitId = id.split('v=')[1];
            setYtid(`https://youtubesd-api.herokuapp.com/api/mp3/${splitId}`)
        }
    }

    return (
        <div className="App">
            <Container className="mainTitle">
                <Row>
                    <Col>
                        <Row>
                            <h1 className="fh1">Soundpad Downloader</h1>
                        </Row>
                        <Row>
                            <h2 className="fh2">Get awesome sound files for your soundpad!</h2>
                        </Row>
                    </Col>
                    <Col className="ytForm">
                        <Form.Label htmlFor="ytinput">Enter the YouTube link</Form.Label>
                        <Form.Control
                            type="string"
                            id="ytinput"
                        />
                        <Button variant="primary" type="submit" className="btnSumbit"
                            onClick={
                                () => {
                                    btnClick();
                                    console.log(ytid)
                                }
                            }
                            href={ytid}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container >
            <div className="bottomFirst">
                <Container>
                    <Row>
                        <Col>
                            <h1>7.000 +</h1>
                            <h2>Monthly Users</h2>
                        </Col>
                        <Col>
                            <h1>Fastest</h1>
                            <h2>Download for any YouTube video</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >

    );
}

export default Landing