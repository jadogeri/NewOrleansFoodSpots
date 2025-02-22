
export const handleNavClickDelay = (route, time,  callback, isActive, setIsActive,state = null) => {

    if(isActive){
        setTimeout(() => {
            setIsActive(false);
            callback(route,{state : state});
        }, time);

    }
}
