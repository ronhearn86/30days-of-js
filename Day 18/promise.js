const posts = [
    {title: 'Post One', body:'Body one testing'},
    {title: 'Post Two', body:'Body two testing'}
]
function getPost(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post,index) =>{
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
     },1000)
}
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post)
            
            const err = false

            if(!err){
                resolve();
                
            }else{
                reject('SOmething went wrong');
            }
        },2000)
    })

}


// createPost({title:'post three', body: 'tis is post three'})
// .then(getPost)
// .catch(err => console.log(err))

// async function init(){
//     await createPost({title:'post three', body: 'tis is post three'})
//     getPost()
// }
// init()

async function fetchuser(){
const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()
console.log(data)
}
fetchuser()
// const promise1 = Promise.resolve('Hello')
// const promise2 = new Promise((resolve,reject) =>
//     setTimeout(resolve, 2000, 'goodbye'))
//     const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// const promise3 = 10
// Promise.all([promise1, promise2, promise3,promise4]).then(((values) => console.log(values)))

