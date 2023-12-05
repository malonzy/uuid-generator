import {v4,v1} from 'uuid'
export default function handler(req,res){
    if (req.method !== 'GET'){
        res.status(400).json({error:'invalid method'})
    }

    const {version} = req.query
    const versions = ['v4','v1']

    if (!versions.includes(version)){
        res.status(404).json({error:'resource not found'})
    }

    let uuid = ''
    switch (version){
        case 'v4':
            uuid = v4()
            break
        case 'v1':
            uuid = v1()
            break
    }

    res.json({uuid:uuid})
}