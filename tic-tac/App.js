import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const board= ['', '', '', '', '', '', '', 'O', 'X']; 
export default function App() {
  return (
    <View style={styles.containerbg}>
      {/* Styling the container and board */}
      <View style={styles.container}>
        <View style={styles.board1}>
          <View style={styles.board2}>
            {/* Styling the grid lines */}
              {board.map((_, i) => (
              <View key={i} style={styles.cell} />
              ))}
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerbg: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //CREATING THE BOARDS AND CONTAINER--------------
  container: 
  {
    backgroundColor: '#B5AEB4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0, //sharpness of the corners
    width: 350,
    height: 750
  },

  board1:
  {
    backgroundColor: '#F7A739',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, //sharpness of the corners
    borderColor: '#000000',
    borderWidth: 2,
    width: 300,
    height: 300,
  },
  
  board2:
  {
    backgroundColor: '#1b8741',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10, //sharpness of the corners
    borderWidth: 2,
    width: 251,
    height: 251,

    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#000000',
  },
  //--------------------------------------------------

  //CREATING THE GRID LINES FOR THE TIC-TAC-TOE-------
  cell:
  {
    width: 82,
    height: 82,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#1b8741',
  },

  //CREATING THE CROSSES AND CIRCLES-------------------
  cross:
  {


  },

  circles:
  {

  }

});
