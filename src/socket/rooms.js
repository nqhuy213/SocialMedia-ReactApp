export const generateRoom = (array) => {
  var roomId = ''
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    roomId += element
  }
  return roomId
}