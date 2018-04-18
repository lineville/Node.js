module.exports = {
    getCustomers: (callback) => {
        return someApi.get('/customers', (err, res) => {
            callback(res.body);
        })
    }
};

