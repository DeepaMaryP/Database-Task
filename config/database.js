import { error, log } from "console";
import mongoose from "mongoose";

const connectToDatabase = () => {
    try {
        mongoose.connect(`${process.env.CLOUD_MONGI_URL}/${process.env.DB_NAME}`).then(
            () => {
                console.log('Database is connected succesfully');
            }
        ).catch(
            (err) => {
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase