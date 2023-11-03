import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ResponsivePage = (props) => {
    return (
        <div className="container">
            <div className="wrapper-div-resp">
                <div className="avatar-div">
                    <div className="avatar">
                        <img src="https://i.pravatar.cc" alt=""></img>
                        <div className="text-under-ava">
                            <p className="text-p">chaemining</p>
                            <span className="text-span">le your content live longer the feed</span>
                        </div>
                    </div>

                </div>
                <div className="separator"></div>
                <div className="social-div">
                    <div className="center-div">
                        <div className="div-wraper-icon">
                            <div className="wraper-icon">
                                <FacebookIcon className="fb-icon icon" />
                            </div>
                            <div className="wraper-text">
                                <p className="texp-icon-p">채미닝의 페이스북</p>
                                <span className="text-icon-span">https://www.facebook.com/test</span>
                            </div>
                        </div>
                        <div className="div-wraper-icon">
                            <div className="wraper-icon">
                                <TwitterIcon className="tw-icon icon" />
                            </div>
                            <div className="wraper-text">
                                <p className="texp-icon-p">채미닝의 트위터 채                                </p>
                                <span className="text-icon-span">https://www.twitter.com/test</span>
                            </div>
                        </div>
                        <div className="div-wraper-icon">
                            <div className="wraper-icon">
                                <YouTubeIcon className="yt-icon icon" />
                            </div>
                            <div className="wraper-text">
                                <p className="texp-icon-p">미닝의 유투브 채미</p>
                                <span className="text-icon-span">https://www.youtube.com/test</span>
                            </div>
                        </div>
                        <div className="div-wraper-icon">
                            <div className="wraper-icon">
                                <InstagramIcon className="ig-icon icon" />
                            </div>
                            <div className="wraper-text">
                                <p className="texp-icon-p">닝의 인스타그램</p>
                                <span className="text-icon-span">https://www.instagram.com/test</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResponsivePage;