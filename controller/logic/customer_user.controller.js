const customerUserDto = require("../../model/dto/customer_user.dto");
const config = require("config");
const helpers = require("../helpers/general.helpers");

exports.login = (req, res, next) => {
    customerUserDto.login({username: req.body.username}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        if (data.lenght > 0) {
            let pass = helper.DecryptPassword(data[0].password);
            if (req.body.password === pass) {
                tk = helper.GenerateToken(data[0]);
                return res.status(200).json({
                    token: tk
                });
            } else {
                return res.status(400).json({
                    info: "User or password are incorrect."
                })
            }
        };
    });
}