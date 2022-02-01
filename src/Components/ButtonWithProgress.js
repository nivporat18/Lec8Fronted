import React from "react"



const ButtonWithProgress =(props)=>{
    return(
        <button
        className="btn btn-primary"
        disabled={props.disabled}
        onClick={props.onClick}>
        {props.text}

        {
        props.showProgress && (
          <div
            className="spinner-border spinner-border-sm text-info mx-1"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )
        }
      </button>
    )
}

export default ButtonWithProgress