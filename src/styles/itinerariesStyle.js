import {StyleSheet} from "react-native"

const style = StyleSheet.create({
    itinerarycontainer:{
        marginTop: 10,
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#1E212D',
        color: "#FAF3E0",
        marginBottom: 6,
        borderStyle: 'solid',
        borderColor: '#1E212D' ,
        borderWidth: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
    },
    itineraryname:{
        padding:8,
        color: "#FAF3E0",
        fontWeight: 'bold',
        fontSize: 24
    },
    itinerarytext1:{
        color: "#FAF3E0",
        margin: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },
    itinerarybody:{
        flex:1,
        justifyContent:"center",
    },
    itinerarydata:{    
        flex:1,
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 2,
    },
    itinerarydescription:{
        padding: 10,
        color: "#FAF3E0",
        fontSize: 16
    },
    itinerarydatap:{
        padding: 5,
        color: "#FAF3E0",
        fontSize: 14,
        alignSelf: 'center'
    },
    commentsbtn:{
        backgroundColor: '#FAF3E0',
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
    },
    text:{
        fontSize: 18,
        color: '#1E212D',
        fontWeight: 'bold'
        },
    noitinerariestext: {
        margin: 40,
        textAlign: 'center',
        fontSize: 28,
        color: '#FAF3E0',
        fontWeight: 'bold'
    },
    btntext:{
        fontSize: 20,
        color: '#FAF3E0',
        fontWeight: 'bold',
        textAlign:'center'
    },
    gohomebtn:{
        backgroundColor: '#1E212D',
        padding: 10,
        borderRadius: 20,
        width:'50%',
        alignSelf: 'center'
    }
})
export default style