const Dev = require('../models/Dev');
const parseStringToArray = require('../utils/parseStringToArray');

module.exports = {
    async find(req, resp){

        const {latitude, longitude, techs} = req.query;
        
        const techsArray = parseStringToArray(techs);
        console.log(techsArray);
        
        const devs = await Dev.find({
            techs:{
               $in: techsArray,

            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates:[longitude,latitude],
                    },
                    $maxDistance:10000
                }
            }
        });
        return resp.json({
            message:'asso',
            devs:devs
        })
    }
}