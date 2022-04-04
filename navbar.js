import React from "react";
import { Text, View, Image } from 'react-native';
import { styles } from "./style";
const Navbar = () => {
    return (
        <>
            <View style={styles.main_nav}>
                <View style={styles.nav}>
                    
                    <Image style={styles.img} 
                     source={{
                        uri: 'https://clinic.xpresscure.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Flogo.035e4534600314daa0e80da6ad1addfc.png&w=1920&q=75',
                      }}
                    // source={require('https://www.xpresscure.com/img/apple-icon.png' )}
                    />
                   
                </View>
            </View>

        </>
    );
};

export default Navbar;
