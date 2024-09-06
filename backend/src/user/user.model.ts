import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: String,
    birthDate: Date,
    email : String,
},{ collection: 'myUsersCollection' });

export interface User {
    userName: string;
    birthDate: Date;
    email : string;
 }