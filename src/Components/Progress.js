import React from 'react';
import '../Styling/Progress.css';
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            referralCount: 4,
            nextPrizeAt: 5
        }
    }

    render() {
        return (
            <div className="progressbar">
                <Row>
                    <Col>
                        <Card className="Card" style={{ margin: "0 auto", width: "30vw", height: "25vh", marginTop: "3vh", marginBottom: "3vh", float: "none" }}>
                            <Card.Body>You are __ referrals away!</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <ProgressBar
                            variant="info"
                            striped now={100 * (this.state.referralCount / this.state.nextPrizeAt)}
                            className='Bar'
                            label={this.state.referralCount}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Progress;