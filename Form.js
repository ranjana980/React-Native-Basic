import React, { useState } from "react";
import { styles } from "./style";
// import { Actions } from 'react-native-router-flux'
import { ImageBackground, Button, View, Text, Image, Table, Row } from "react-native";
import axios from "axios";
const image = { uri: "https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" };
// const image = { uri: "https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg" };
const Form = () => {
    const [list, setlist] = useState([])
    const departmentFunc = async () => {
        const result = await axios.get(`https://dev-clinic.xpresscure.com/api/health_worker/list_department`)
        setlist(result.data.msg)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}> 
                <Text>Photo</Text>
                <Text style={{left:10}}> Departmanet Name</Text>
                <Text style={{left:20}}>Doctor Category</Text>
                <Text style={{left:40}}>Status</Text>
                </View>
                {list.map((itme) => (
                    <>
                        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row',backgroundColor: "#fff",top:10 }}>
                            {/* <View style={{ flex: 1, alignSelf: 'stretch' }}> */}
                            <Image style={styles.dept} source={{ uri: itme.dep_images }} />
                            {/* </View> */}
                            <Text >{itme.department_name}</Text>
                            <Text style={{left:100}}>{itme.categoryOfDoctor}</Text>
                            <Text >{itme.status}</Text>
                        </View>

                    </>
                ))}
               
                <Button
                    // style={{width:10}}
                    onPress={departmentFunc}
                    title="View Department List"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </ImageBackground>
        </View>
    )

}


export default Form;