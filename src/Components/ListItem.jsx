import { Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ListItem = (props) => {
    return (
        <Row className='mb-3'>
            <Col sm={7}>
                <Image 
                src={props.items.snippet.thumbnails.high.url}
                thumbnail />
            </Col>

            <Col sm={5}>
            <p>{props.items.snippet.title}</p>
            <h6>{props.items.snippet.channelTitle}</h6>
            </Col>
        </Row>
    );
};

export default ListItem;