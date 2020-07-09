import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';
export const Loading = () => {
    return (
        <Col xs="12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"/>
            <p>Loading . . .</p>
        </Col>
        )
}