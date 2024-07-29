import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: String,
    birthDate: Date,
},{ collection: 'myUsersCollection' });

export interface User {
    userName: string;
    birthDate: Date;
 }