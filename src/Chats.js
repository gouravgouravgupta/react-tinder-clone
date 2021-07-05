
import React from 'react'
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat name="Mark" 
            message="yo whtasapp"
            timestamp="40 seconds ago"
            profilePic="https://th.bing.com/th/id/R74ab2c3bbad8f2c9f784103698143987?rik=FQB2bolmP6bSzQ&riu=http%3a%2f%2fimg.izismile.com%2fimg%2fimg11%2f20180309%2f640%2fbeautiful_girls_make_the_world_go_around_640_high_38.jpg&ehk=DT2aK8W%2fOI%2f%2bBkjY6kHZFxhOVMq9uchvoUM3nxSanrM%3d&risl=&pid=ImgRaw ">

            </Chat>
            <Chat name="Ellen" 
            message="whats up?"
            timestamp="20 sec ago"
            profilePic="https://weneedfun.com/wp-content/uploads/2016/07/Emo-Girls-Photos-For-Facebook-Profile-10.jpg">

            </Chat>
            <Chat name="Sandra" 
            message="Ola"
            timestamp="4 months ago"
            profilePic="https://iphoneswallpapers.com/wp-content/uploads/2017/10/Girl-Beautiful-Smiling-Face-iPhone-Wallpaper-iphoneswallpapers_com.jpg">

            </Chat>
            <Chat name="Natasha" 
            message="oops there is he is?"
            timestamp="1 week ago"
            profilePic="https://i.pinimg.com/originals/2b/7a/cf/2b7acf13ab4e90130c169dbb97ce6572.jpg">

            </Chat>
            
        </div>
    )
}

export default Chats
