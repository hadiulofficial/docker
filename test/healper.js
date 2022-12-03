const connDb  = () => {
    const dummyPromice = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve()
        },1000)
    })

    return dummyPromice;
}

export default connDb