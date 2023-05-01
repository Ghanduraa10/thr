// export function fetchData(){
//     return async function(dispatch){
//         const data = await fetch('http://localhost:3000/posts')
//         const response = await data.json()
//         dispatch({
//             type : 'posts/fetchsuccess',
//             payload : response
//         })
//     }
// }

// export function detailData(id){
//     return async function(dispatch){
//         const response = await fetch(`http://localhost:3000/posts/${id}`,{
//             method: "GET", // *GET, POST, PUT, DELETE, etc.
//             mode: "cors", // no-cors, *cors, same-origin
//             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: "same-origin", // include, *same-origin, omit
//             headers: {
//               "Content-Type": "application/json",
//               // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             redirect: "follow", // manual, *follow, error
//             referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//              // body data type must match "Content-Type" header
//         })
//         dispatch(detailData(id))
//     }
// }