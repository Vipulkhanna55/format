import pptxgen from "pptxgenjs";
import express from 'express'
const app=express();

// 1. Create a new Presentation
let pres = new pptxgen();

// 2. Add a Slide
let slide = pres.addSlide();

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
let textboxText = "Hello World from PptxGenJS!";
let textboxOpts = { x: 1, y: 1, color: "363636" };
slide.addText(textboxText, textboxOpts);

let slide2 = pres.addSlide();

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
let textboxText2 = "Hello World from PptxGenJS!";
let textboxOpts2= { x: 1, y: 1, color: "363636" };
slide2.addText(textboxText2, textboxOpts2);

// 4. Save the Presentation
pres.writeFile();

app.get('/download',(request,response)=>{
    response.download('./Presentation.pptx');
})
app.get('/',(request,response)=>{
    response.sendFile('/home/vipul/Desktop/myWork/pptSlide/public/index.html');
})
app.listen(5000,()=>{
    console.log("Listening on port 5000");
})

