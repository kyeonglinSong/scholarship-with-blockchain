import React from "react";
import { useSelector } from "react-redux";
import NavigationBar from "../../components/common/NavigationBar";
import NavigationBarNotLogin from "../../components/common/NavigationBarNotLogin";


const NavigationContainer = ()=>{
    const { user } = useSelector(({auth})=>({user:auth.auth}));
    if (user){
        return <NavigationBar />;
    }else{
        return <NavigationBarNotLogin />
    }
}

export default NavigationContainer;