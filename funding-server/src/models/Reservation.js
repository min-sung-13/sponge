import mongoose, { Schema } from 'mongoose';

const P_Reservation = new Schema({
    r_code: String,     
    r_userid: String,   
    r_price: Number,    
    r_detail: String,   
    r_phone: String,    
    r_addr: {          
        ad_name: String,   
        ad_addr1: String,  
        ad_addr2: String, 
        ad_addr3: String,   
        ad_please: String,   
    },
    r_date: {
        type: Date,
        default: Date.now
    },       
    r_condition: String 
});

const Reservation = mongoose.model('reservation', P_Reservation);

export default Reservation;