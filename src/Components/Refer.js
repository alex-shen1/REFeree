import React from 'react';
import '../Styling/Refer.css';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


const imageLinks = ["https://cdn2.hubspot.net/hubfs/521324/App-Icon-1200x1200-gmail.png",
    "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png",
    "https://live.staticflickr.com/65535/49967495518_10d097dfe5_o.png"]

const messages = [
    "I’m inviting you to check out Sneak Co! Sneak Co. is an up-and-coming brand dedicated to creating stylish, sustainable shoes. Sneak Co. products are made to last and built with easily-recyclable materials for a future-friendly shoe. Sign up and stay in the loop with the link below and start earning points towards Sneak Co. exclusive rewards!",
    "Hey everyone, check out Sneak Co! Sneak Co. is an up-and-coming brand dedicated to creating stylish, sustainable shoes. Sneak Co. products are made to last and built with easily-recyclable materials for a future-friendly shoe. Sign up and stay in the loop here with the link below and start earning points towards Sneak Co. exclusive rewards!",
]

class Refer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: null,
            show: false,
            public: true,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeUser !== prevProps.activeUser) {
            this.setState({ activeUser: this.props.activeUser })
        }
    }

    componentDidMount() {
        this.setState({ activeUser: this.props.activeUser })
        // console.log(this.props.activeUser)
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

    gmailMessage = () => {
        let copyText = document.getElementById(messages[0])
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
        alert('Your message has been copied!');
    }

    publicMessage = () => {
        let copyText = document.getElementById('shareText')
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");
        alert('Your message has been copied!');
    }

    handleShowEmail = () => {
        this.setState({
            show: true,
            public: false,
        })
    }
    handleShow = () => {
        this.setState({
            show: true,
            public: true,
        })
    }
    handleClose = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <div className="ref">
                <Row>
                    <Col>
                        <Card style={{ margin: "0 auto", width: "45vw", height: "19vh", marginTop: "2vh", marginBottom: "2vh", float: "none", marginLeft: "10vw" }}>
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
                        <Card style={{ margin: "0 auto", width: "20vw", height: "19vh", marginTop: "2vh", marginBottom: "2vh", float: "none" }}>
                            <Card.Header>
                                Refer a friend!
                            </Card.Header>
                            <Card.Body style={{ textAlign: 'center', justifyContent: 'space-between' }}>
                                <Button variant="light" onClick={() => this.handleShowEmail()}>
                                    <img src={imageLinks[0]} width="40px" height="40px" />
                                </Button>
                                <Button variant="light" onClick={() => this.handleShow()}>
                                    <img src={imageLinks[1]} width="40px" height="40px" />
                                </Button>
                                <Button variant="light" onClick={() => this.handleShow()}>
                                    <img src={imageLinks[2]} width="40px" height="40px" />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
                <Modal show={this.state.show} onHide={this.handleClose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>Refer your friends and family!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <textArea id='shareText' style={{ width: "49vw", height: "30vh" }}>
                            {this.state.public ?
                                messages[1]
                                :
                                messages[0]
                            }
                            {`\n\nalex-shen1.github.io${process.env.PUBLIC_URL}/#/ref/${this.props.activeUser}`}
                        </textArea>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='primary' onClick={() => this.publicMessage()}>Copy Text</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}

export default Refer;