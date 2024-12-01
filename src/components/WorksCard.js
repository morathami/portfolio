import React from "react";
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Image, Card } from 'antd';
import { imageCardLst } from '../assets/params.js';

function WorksCard(props) {
    const { Meta } = Card;
    const bgColorYellow = props.bgColorYellow;
    const titleText = props.titleText;
    const tagsText = props.tagsText;
    const worksLink = props.worksLink;
    const imageLink = imageCardLst[worksLink];

    return (
        <Container className="workscard-container">
            <Link to={worksLink}>
                <Row className="justify-content-center">
                    <Card style={{ width: "360px", padding: 0 }} className={`${bgColorYellow ? "workscard-yellow" : "workscard-pink"}`}
                    cover={
                        <Image id="workscard-image" width={360} preview={false} src={imageLink} />
                    }
                    >
                        <Meta
                            title={titleText}
                            description={tagsText}
                        />
                    </Card>
                </Row>
            </Link>
        </Container>
    )
};

export default WorksCard;