const faunaDB=require("faunadb"),
q=faunaDB.query;


(async ()=>{

var adminClient = new faunaDB.Client({ secret: "Enter Your key" });

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
     

// Create Index

// try{
//       let result= await adminClient.query(
//         q.CreateIndex({
//             name: 'posts_of_workers',
//             source:q.Collection('Workkers'),
//             terms:[{field:['data','title']}],
//         })
//       );
//       console.log("Result : ",result);

// }catch(error){
//    console.log(error);
// }

// Create Documents in Specific Collections

// try{
//   let result=await adminClient.query(
//       q.Create(
//           q.Collection("Teachers"),
//           {data:{title:"It Second data passing",
//                  name:"Muhammad Haseeb Hussain",
//                  faith:'Allah o Akbar'

//         }},

//       )

//   );
//   console.log(result);
// }
// catch(error){
//     console.log(error);

// }

//  Data Reterival with Reference

// try{
//    var result= await adminClient.query(
//        q.Get(
//          q.Ref(q.Collection('Teachers'),'290904275063669253')
//        )
//    );
//    console.log("Result : ", result.data.title);

// }
// catch(error){
//     console.log("Error : ",error);
// }
//  Retrieve data through Index Searching

//**** */ It will only search on collection in which you created a index
        

// try{
//      var result=await adminClient.query(
//          q.Get(
//          q.Match(q.Index("posts_of_workers"),"It first data passing")
//          )
//          );
//      console.log(result);
// }
// catch(error){
//     console.log("Error : ",error);
// }
//  Update Document
// try{
//       var result= await adminClient.query(
//           q.Update(
//             q.Ref(q.Collection('Teachers'),'290904275063669253'),
//             {data:{title:"Checking Update via CRUD"}}
//           )
//       );
//       console.log(result);
// }
// catch(error){
//     console.log(error);
// }

//   Replacing Document
// try{
//     var result= await adminClient.query(
//         q.Replace(
//           q.Ref(q.Collection('Teachers'),'290904275063669253'),
//           {data:{title:"Replacing"}}
//         )
//     );
//     console.log(result);
// }
// catch(error){
//   console.log(error);
// }
//   Deleting Document
// try{
//     var result= await adminClient.query(
//         q.Delete(
//           q.Ref(q.Collection('Teachers'),'290904275063669253'),
         
//         )
//     );
//     console.log(result);
// }
// catch(error){
//   console.log(error);
// }


})()
