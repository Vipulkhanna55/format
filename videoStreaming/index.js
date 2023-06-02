const express=require('express');
const app=express();
const fs=require('fs');


app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
app.get('/video',(request,response)=>{
    const range=request.headers.range;
    if(!range){
        response.status(400).send("Bad request ");   
    }
    const videoPath='./sample.mp4';
    const videoSize=fs.statSync(videoPath).size;
    const chunk_size=10**6;
    const start=0;
    const end=Math.min(start+chunk_size,videoSize-1);
    const contentLength=end-start+1;
    const headers={
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": `bytes`,
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    response.writeHead(206,headers);
    const videoStream=fs.createReadStream(videoPath,{start,end});
    videoStream.pipe(response);

})

app.listen(3000,(console.log(`App is listening on port ${8000}`)));
