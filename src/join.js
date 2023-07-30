import React from "react";
import { Input, Button } from "antd";

export default function Join(){
    return(
        <div className="join">
            <h3 className="join-h">JOIN OUR NEWS LETTER</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum ad simi impedit ratione provident ex at.</p>
            <Input placeholder="Join us" className="join_info" />
            <Button type="primary" className='btn_join'>Add to cart</Button>
        </div>
    )
}