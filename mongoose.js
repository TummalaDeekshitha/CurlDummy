
const mongoose= require('mongoose');

const connectDB = async() => {
    
   
 
    await mongoose.connect('mongodb+srv://deekshithareddy2223:gXkPedRi3ZJadM22@mycluster.mkhf17a.mongodb.net/mydb?retryWrites=true&w=majority')

        .then(() => {
            console.log(`Connected to DB `);
        })
        .catch((err) => {
            console.error(`Error connecting to DB: ${err.message}`);
            process.exit(1);
        });
 
    // const dbConnection = mongoose.connection;
 
    // await dbConnection.on("error", (err) => {
    //     console.error(`Error connecting to DB: ${err}`);
    // });
 
    // dbConnection.once("open", () => {
    //     console.log(`Connected to DB: ${url}`);
    // });
};
module.exports = { connectDB };

