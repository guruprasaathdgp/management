const mongoose = require('mongoose');
const ComplaintSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updates: [{ message: String, date: Date }]
});
module.exports = mongoose.model('Complaint', ComplaintSchema);
