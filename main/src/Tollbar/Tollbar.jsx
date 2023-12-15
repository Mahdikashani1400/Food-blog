import "./Tollbar.css"
import SocialIcons from "./SocialIcons"
export default function Tollbar(){
    return(
        <div id="Tollbar">
            <div className="tollbar__container">
              <div className="container">
              <div className="tollbar__content">
                    <div className="right">
                        <span>آخرین اخبار</span>
                        <span>|</span>
                        <span>بهترین روش استاندارد</span>
                    </div><div className="left">
                        <p>ما را دنبال کنید</p>
                        <SocialIcons>
                            <svg>
                                <use></use>
                            </svg>
                        </SocialIcons>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

