import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  abbreviation: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  country: {
    fontSize: 15,
    color: 'gray',
    paddingVertical: 3,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plane: {
    color: 'blue',
    fontSize: 25,
    marginTop: 15,
  },
  location: {
    fontSize: 10,
  },
});

export default styles;