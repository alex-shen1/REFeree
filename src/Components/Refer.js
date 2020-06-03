import React from 'react';
import '../Styling/Refer.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { database } from "../firebase";


class Refer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="ref">
                <Row>
                    <Col>
                        <Card style={{ margin: "0 auto", width: "45vw", height: "25vh", marginTop: "3vh", marginBottom: "3vh", float: "none", marginLeft: "10vw" }}>
                            <Card.Header>
<<<<<<< Updated upstream
                                Your Referral Link
=======
                                Your Referral Link:
>>>>>>> Stashed changes
                            </Card.Header>
                            <Card.Body class="h3 text-center" style={{ margin: "0 auto", marginTop: "7vh", marginLeft: "3vh", marginRight: "3vh", float: "none" }}>
                                {`${process.env.PUBLIC_URL}/${this.props.activeUser}`}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ margin: "0 auto", width: "16vw", height: "25vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>
                            <Card.Header>
                                Refer a friend!
                            </Card.Header>
                            <Card.Body>
                                <Button variant="light">
                                    <img src="https://cdn2.hubspot.net/hubfs/521324/App-Icon-1200x1200-gmail.png" width="40px" height="40px" />
                                </Button> {' '}
                                <Button variant="light">
                                    <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" width="40px" height="40px" />
                                </Button> {' '}
                                <Button variant="light">
                                    <img src="https://lh3.googleusercontent.com/proxy/L1Qczy6X8MHlu0EOMm6NPr88KdGmpGS6ocRV0l3lqsn96R0Wz2ec6nEViQKXW-MY_KBSBxLlrooEkwEk4_EzrIA_l0oKvAxQmPplyQR11AAFzrGsCoEFqxCDQbC_sBSjZA" width="40px" height="40px" />
                                </Button> {' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Refer;