
export const handleNavClickDelay = (route, time,  callback, isActive, setIsActive) => {

    if(isActive){
        setTimeout(() => {
            setIsActive(false);
            callback(route);
        }, time);

    }
}
