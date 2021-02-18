const faunaDB=require("faunadb"),
q=faunaDB.query;


(async ()=>{

var adminClient = new faunaDB.Client({ secret: "fnAECXwUqYACASM7mVf1cWGOIwauTZHaRy9QTwTi" });

            // createDaataBase

//         try{
//             let result= await adminClient.query(
//                      q.CreateDatabase({name:"gatsbyDataBase"})
//             );
//             console.log(result);
//         }
//         catch(error){
//    console.log("Error",error);
//         }

})()
