import react from 'react'
import { MailOutlined, PhoneFilled } from '@ant-design/icons'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='content_footer'>
            <div className='sub_footer'>
                <h4 className='sub_foot'>Dev Store</h4>
                <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum ad similique a possimus in officia dolores consequuntur, magnam enim earum unde et fugiat illum impedit ratione provident ex at.</p>
            </div>
            <div className='sub_footer'>
                <h4 className='sub_foot'>Contact Us</h4>
                <div>
                <p><MailOutlined />  devstore@gmail.com</p>
                <p><PhoneFilled />   +(256) 786868414</p>
                </div>
            </div>
            <div className='sub_footer'>
                <h4 className='sub_foot'>About Us</h4>
                <p>FAQ</p>
                <p>Privacy</p>
                <p>Support</p>
                
            </div>
            </div>
        </div>
    )
}