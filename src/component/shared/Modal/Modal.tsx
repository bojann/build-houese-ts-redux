import React, {ReactNode} from 'react'
import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop';

interface Props {
    children: ReactNode, 
    orderModalShow: boolean,
    handleModalClose: () => void
}

export default (props: Props) => {
    const classes = props.orderModalShow ? 'modal modal-show' : 'modal modal-hidden';

    return (
        <>
            <Backdrop show={props.orderModalShow} handleModalClose={props.handleModalClose}/>
            <div className={classes}>
                {props.children ? props.children : null}
            </div>
        </>
    )
}
