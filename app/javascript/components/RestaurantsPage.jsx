import React from 'react'
import { useState, useEffect } from "react";

const Restaurants = (props) => {

    console.log(props.restaurants)
    console.log(props.locations)

    function getLocationName(id){
        let res = props.locations.filter(l => l.id == id)
        return res[0].name
    }

    var rl = props.restaurants.map((r) =>{
        console.log(r.location_id)
        return(
            <div key = {r.id} >
                <p>{r.name} : {r.description} @ {getLocationName(r.location_id)}</p>
            </div>
        )
    });

    const backToRoot=() => {
        fetch('/return_to_root', {
            method: 'GET', 
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.redirected) {
                console.log("in redirection")
                window.location.href = response.url;
            }
            else{
                console.log(response);
            }
        })
    }

    return (
        <div className="container">
            <button type="button" className="btn btn-primary" onClick={backToRoot}>Back</button>
            <h1>RESTAURANTS AS LIST</h1>
            <p>Name : Description @ Location</p>
            {rl}
        </div>
    );
}
export default Restaurants