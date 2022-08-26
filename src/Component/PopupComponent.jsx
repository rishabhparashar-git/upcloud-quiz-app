import './popup.css'

export default function PopupComponent(props){
    const score = props.score;
    // const score = 100;
    function Message(){
        if (score===100){
            return (
                <>
                    <h3>Well Done !!!</h3>
                    <h3> You have Scored {score}/100</h3>
                </>
            )
        }else if(score>=60 && score<100){
            return (
                <>
                    <h3>Very Good !!!</h3>
                    <h3> You have Scored {score}/100</h3>
                </>
            )
        }
    else{
            return (
                <>
                    <h3>Sorry you are not eligible to get best offer, Please try Again</h3>
                    <h3> You have Scored {score}/100</h3>
                </>
            )
        }
    }
    return(
        <div className="popup-window">
            <div className="popup">
                <Message/>   
		<button className="close-btn">
                    <div className="one line"></div>
                    <div className="two line"></div>
                </button>
            </div>
        </div>
    )
};  