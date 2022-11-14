import React from "react"


export default function Article(props){

    return(
        <>
        <h1>{props.Name}</h1>
        <h4>{props.Article}</h4>
        <h4>{props.Email}</h4>
        <p>{props.Content}</p>
        </>
    )

}