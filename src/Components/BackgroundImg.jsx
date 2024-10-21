function BackgroundImg(){
    return(
        <img style={{
            position: "fixed",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            objectFit:"fill",
            pointerEvents: "none",
            userSelect: "none"
        }} src={"../../../images/zoom.png"} alt="background"/>
    );
}
export default BackgroundImg;
