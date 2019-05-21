// @ts-ignore
import firebase,  {User} from 'react-native-firebase';
const uuidv5 = require('uuid/v5');

export async function upload(user: User, imagePath: string) {
    const randomImageId = uuidv5(imagePath, uuidv5.URL);

    const storageRef = firebase.storage().ref();
    const userImageRef = storageRef.child(`images/${user.uid}/${randomImageId}`);
    const res = await userImageRef.putFile(imagePath);
    return res.downloadURL;
}