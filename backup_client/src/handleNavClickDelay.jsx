
export const handleNavClickDelay = (route, time,  callback, isActive,state = null) => {

    if(isActive){
        setTimeout(() => {
            //setIsActive(false);
            callback(route,{state : state});
        }, time);

    }
}
