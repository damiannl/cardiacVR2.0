import { getDatabase, child, get} from "/firebase/database";

const db = getDatabase();

get(child(ref(db), '/client_id')).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log(snapshot);
    }
}).catch((error) => {
    console.error(error);
});