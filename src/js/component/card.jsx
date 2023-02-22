import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MyCard() {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignshack.net%2Fwp-content%2Fuploads%2Fplaceholder-image.png&f=1&nofb=1&ipt=f6800093ed8a9cc4217d02024c90843992748de4dae672d5e08d2a815e22cc25&ipo=images"
				/>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</>
	);
}
