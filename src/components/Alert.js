import React from 'react'


const Alert = (props) => {

    const captialiaze = (word) => {
        const lowercase = word.toLowerCase()
        return lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
    }

    return(
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captialiaze(props.alert.type)}</strong>: {props.alert.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    )

}


export default Alert