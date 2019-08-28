const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    accountNumber:{
        type: String,
        required: true,
        unique: true
    },
    balance:{
        type: Number,
        required: true,
    },
});
accountSchema.methods.addToAccount = function(amount){
    this.balance = this.balance + amount;
    return this.balance
};
accountSchema.methods.subtractFromAccount = function(amount){
    if (this.balance - amount < 0 ){
        this.balance = 0;
    }
    this.balance = this.balance - amount;
    return this.balance;
};
accountSchema.methods.setAccountBalance = function(newBalance){
    this.balance = newBalance;
}

module.exports = mongoose.model('Account', accoutSchema);
