const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {
    async store (req, resp){
        const { github_username, techs, latitude, longitude} = req.body;
    
        let dev = await Dev.findOne({github_username:github_username});
    
        if(!dev){
            const response_git = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, bio, email,avatar_url,login} = response_git.data;
        
            const techsArray = parseStringToArray(techs);
        
            const location = {
                type:'Point',
                coordinates:[longitude, latitude],
            }
            dev = await Dev.create({
                name,
                github_username:login,
                bio,
                avatar_url,
                techs:techsArray,
                email ,
                location
            });
        
        }

        return resp.json({
            message:'dev adicionado',
            dev:dev
            ,
        });
    },
    async getAll(req, resp){
        const devs = await Dev.find();
        return resp.json({
            message:"toma",
            devs:devs
        });
    }
}