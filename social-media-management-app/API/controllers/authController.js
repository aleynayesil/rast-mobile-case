const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../models/auth.js');

const register = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await auth.findOne({email});

        if (user) {
            return res.status(500).json({message: "Bu email adresi ile daha önce giriş yapılmış."});
        }

        if (password.length < 6) {
            return res.status(500).json({message: "Parola 6 karakterden az olamaz"});
        }

        const hashedPassword = await bcrypt.hash(password,12);

        const newUser = await auth.create({password:hashedPassword, email});

        const token = jwt.sign({id: newUser.id}, process.env.SECRET_TOKEN, {expiresIn:'1h'});

        res.status(201).json({
            status: 'OK',
            newUser,
            token
        });
        
    } catch (error) {//500 hatası sadece server hataları için kullanılır genel olarak hatalarda bu kodu kullanmayı tercih ettim.
        return res.status(500).json({message: message.error});
    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await auth.findOne({email});

        if (!user) {
            return res.status(500).json({message: "Böyle bir kullanıcı bulunamadı."});
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(500).json({message: "Hatalı parola girdiniz."});
        }

        const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN, {expiresIn:'1h'});

        res.status(200).json({
            status: 'OK',
            user,
            token
        })
    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

module.exports = {login, register};