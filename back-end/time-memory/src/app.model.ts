import * as mongoose from 'mongoose';

export const AppSchema = new mongoose.Schema({
    date: {type: String, required: true},
    time: {type: String, required: true},
    context: {type: String, required: true}
})

export interface App {
    id: string;
    date: string;
    time: string;
    context: string
}