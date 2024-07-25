import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: String,
    birthDate: Date,
});

export interface User {
    userName: string;
    birthDate: Date;
 }