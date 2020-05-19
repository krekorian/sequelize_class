exports.displayCreateExpense = function (req, res) {
    console.log("reaching controller displayCreateExpense")
    res.json({ page: 'Create new Expense request' });
}

exports.CreateExpense = function (req, res) {
    console.log("reaching controller displayCreateExpense")
    res.status(202).json({ page: 'Create new Expense request POST request' });
}