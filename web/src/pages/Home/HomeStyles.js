

const height = window.innerHeight;
// const height_logo = height * 0.20;
const height_logo = height * 0.20;

const styles = {
    container: {
      flex: 1, 
      backgroundColor: 'white',
      //backgroundColor: 'green',

      //color:"green"
    },
    header: {
        flex: 2,
        //justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        
    },
    footer: {
        //flex: 1,
        backgroundColor: 'black',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        height:300,
        
    },
    logo: {
        width: height_logo,
        height: height_logo,
        
    },
    logo_name:{
        fontSize:30,
        fontWeight: 500

    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor:'#08d4c4'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  }

  export default styles;