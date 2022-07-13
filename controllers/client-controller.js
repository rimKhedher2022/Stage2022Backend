const client_model = require ("../models/client-model")
const nodemailer = require("nodemailer")




var transport = nodemailer.createTransport({  // congiguration bin mailtrap w application 
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cbe17083c49ec1",
      pass: "483ebf61956943"
    }
  });

module.exports=
{



register:(req,res)=>


    {

req.body["image"] = req.file.filename

const client = new client_model(req.body)

client.save(req.body,(err,item)=>
{
        if(err)

        {
        res.status(406).json({message:"faild to save client"})
        }

        else
        {


            transport.sendMail({
                from: "myapp@gmail.com",
                to: item.email,
                cc: 'rym_k@yahoo.fr',
                bcc: "rym_k@yahoo.fr",
                subject: "Welcome " + item.firstName,
                text: "bonjour mr ",
                html: `<!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta http-equiv="x-ua-compatible" content="ie=edge">
                  <title>Welcome Email</title>
                </head>
                <body>
                  <h2>Hello ${item.firstname +" "+ item.lastname}! </h2>
                  <p>We're glad to have you on board at ${item.email}. </p>
                  <p>We're glad to have you on board at it gate</p>
                </body>
                </html>`,
                attachments: [{
                    filename: req.file.filename,
                    path: "./storages/" + req.file.filename,
                    cid: "test"
                }]
            }, function(err, info) {
                if (err) {
                    console.log("error:", err)
                } else {
                    console.log("Email Send successufly:", info + reponse)
                }
            })



        res.status(201).json({message:"client saved" , data:item})

        }


}


)



    },



    getall:(req,res)=>


    {
        client_model.find({},(err,items)=>
        {

            if(err)
            {
        res.status(406).json({message:"failed to get all clients "})
            }

            
            else 
           {
        res.status(201).json({message:"list of clients",data:items})
           }

        }
        
        
        
        )
    },



    getone:(req,res)=>


    {
        client_model.findById(req.params.id,(err,items)=>
        
        {
            if(err)
            {
res.status(406).json({message:"failed to get this client"})
            }

            else 


            {
res.status(201).json({message:"client",data:items})
            }
        }
        
        
        )
    } , 



    getbyname:(req,res)=>
    {
client_model.find({firstname:req.query.firstname},(err,items)=>
{

    if(err)

    {
res.status(406).json({message:"failed to get client by this name"})
    }

    else

    {
res.status(201).json({message:"client by this name ",data:items})
    }
}



)

    }, 



    update:(req,res)=>


    {
            client_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>

            {
                if(err)
                {
            res.status(406).json({message:"failed to update this client"})

                }

                else
                {

                    res.status(201).json({message:" client updated successufly", data:item})
                }
            }



            )


    },



delete:(req,res)=>


{
            client_model.findByIdAndRemove(req.params.id,(err)=>

            
            {
                if(err)
                {
        res.status(406).json({message:"failed to delete this client"})
                }
                else
                {
                    res.status(201).json({message:"deleted successuflly"})

                }

            }
            )
}







}