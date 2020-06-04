import React from 'react';
import '../Styling/Refer.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { EmailShareButton, FacebookShareButton, TwitterShareButton } from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon } from "react-share";


const imageLinks = ["https://cdn2.hubspot.net/hubfs/521324/App-Icon-1200x1200-gmail.png",
    "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png",
    "https://live.staticflickr.com/65535/49967495518_10d097dfe5_o.png"]

class Refer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: null,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeUser !== prevProps.activeUser) {
            this.setState({ activeUser: this.props.activeUser })
        }
    }

    componentDidMount() {
        this.setState({ activeUser: this.props.activeUser })
        console.log(this.props.activeUser)
    }

    copyTextToClipboard = () => {
        let copyText = document.getElementById("link")
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    render() {
        return (
            <div className="ref">
                <Row>
                    <Col>
                        <Card style={{ margin: "0 auto", width: "45vw", height: "18vh", marginTop: "2vh", marginBottom: "2vh", float: "none", marginLeft: "10vw" }}>
                            <Card.Header>
                                Your Referral Link:
                                <div style={{ float: 'right' }}>
                                    <Button variant="outline-secondary" size="sm" onClick={() => this.copyTextToClipboard()}>Copy to Clipboard</Button>
                                </div>
                            </Card.Header>
                            <Card.Body class="h5 text-center" style={{ margin: "0 auto", marginTop: "3vh", marginLeft: "3vh", marginRight: "3vh", float: "none" }}>
                                {/* {`alex-shen1.github.io${process.env.PUBLIC_URL}/#/ref/${this.props.activeUser}`} */}
                                <textarea id="link" value={`alex-shen1.github.io${process.env.PUBLIC_URL}/#/ref/${this.props.activeUser}`} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ margin: "0 auto", width: "20vw", height: "18vh", marginTop: "2vh", marginBottom: "2vh", float: "none" }}>
                            <Card.Header>
                                Refer a friend!
                            </Card.Header>
                            <Card.Body style={{ justifyContent: 'space-between' }}>
                                {imageLinks.map(link => {
                                    return <Button variant="light">
                                        <img src={link} width="20px" height="20px" />
                                    </Button>
                                })}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
            </div >
        )
    }
}

export default Refer;