const Complaint = require('../models/Complaint');
exports.createComplaint = async (req, res) => {
    const { description, address } = req.body;
    try {
        const newComplaint = new Complaint({
            user: req.user.id,
            description,
            address
        });
        const complaint = await newComplaint.save();
        res.json(complaint);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
exports.getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find({ user: req.user.id }).sort({ date: -1 });
        res.json(complaints);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
exports.updateComplaint = async (req, res) => {
    const { status, assignedTo, updates } = req.body;
    try {
        let complaint = await Complaint.findById(req.params.id);
        if (!complaint) return res.status(404).json({ msg: 'Complaint not found' });
        complaint.status = status || complaint.status;
        complaint.assignedTo = assignedTo || complaint.assignedTo;
        if (updates) complaint.updates.push({ message: updates, date: new Date() });
        complaint = await Complaint.findByIdAndUpdate(req.params.id, { $set: complaint }, { new: true });
        res.json(complaint);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
