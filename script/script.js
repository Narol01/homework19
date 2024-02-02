const texts=[
	{
		id: 1,
		text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. C другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития."
	},
	{
		id: 2,
		text: "Идейные соображения высшего порядка, a также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий."
	},
	{
		id: 3,
		text: "He следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт консультация c широким активом способствует подготовки и реализации форм развития. Задача организации, в особенности же консультация c широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же консультация c широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач."
	},
	{
		id: 4,
		text: "Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации. Таким образом укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития."
	}
]
let postId=1;
const btn1Node=document.querySelectorAll(".small button");
btn1Node.forEach(elem=>
    elem.addEventListener("click", (event)=>{
    const btnIndex=[...btn1Node].indexOf(event.target)
    const {text} =texts.find(elem=>elem.id ===btnIndex + 1 )
    console.log(text)
    
}) 
)
console.log("rgb("+123+","+202+","+189+")")
console.log(`rgb(${123},${202},${189})`)

texts.forEach(({id,text})=>{
const container=document.querySelector(".small");
const btnNode=document.createElement("button");
btnNode.addEventListener("click", (event)=>{
    const currentTextNode=document.querySelector(".big .text");
    currentTextNode.innerText=text;

})

btnNode.innerText=`${id} кнопка`;
container.append(btnNode);
})

const [leftTrigersNode,rightTrigersNode]=document.querySelectorAll(".triggers button");
leftTrigersNode.addEventListener("click",()=>{
postId--;
postId=postId<1? texts.length : postId;
const currentTextNode=document.querySelector(".big .text");
currentTextNode.innerText=texts.find(({id})=>id===postId).text;
})

rightTrigersNode.addEventListener("click",()=>{
    postId++;
    postId=postId>texts.length? 1 : postId;
    const currentTextNode=document.querySelector(".big .text");
    currentTextNode.innerText=texts.find(({id})=>id===postId).text;
    })




