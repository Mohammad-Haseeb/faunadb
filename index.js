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

// ****************************************************
// Created a key for child database "gatsbyDataBase"


// try{
//       let result=await adminClient.query(
//                q.CreateKey({
//                    database:q.Database("gatsbyDataBase"),
//                    role:"admin",
//                })
//       );
//       console.log("Result : ",result.secret);
// }
// catch(error){
//    console.log("Error",error)
// }
//    Create Collections
//   try{
//       let result=await adminClient.query(
//            q.CreateCollection({name:"Teachers"})
//       );
//    console.log("Result : ",result);
//   }
//   catch(error){
//       console.log("Error", error);
//   }





})()
