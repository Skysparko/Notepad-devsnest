// let search = document.getElementById('search');
const new_btn = document.getElementById("new");
const add = document.getElementById("add");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const topic = document.getElementById("topic");
const file = document.getElementById("file");
const nofile1 = document.getElementById("nofile1");
const main_topic = document.getElementById("main_topic");
const test = document.getElementById("test");
const listofpad=[];
let i =1;

let copybtn;

add.addEventListener("click",function(){
    form.style.display="inline-flex";
    console.log('yes');
    topic.focus();

});

// add.addEventListener("click",function(){

//     form.style.display="inline-flex";
//     console.log('yes');
//     topic.focus();

// });

submit.addEventListener("click",function(){
    
    if (topic.value==null || topic.value==0){
        alert("Please enter valid input");
    }
    else{
        



        new_btn.classList.add("no-hover");
        
        new_btn.style.borderRadius="20px 0px 0px 20px"

        form.style.display="none";
        // const btn = document.createElement("button");
        // btn.textContent=topic.value;
        // document.getElementById("new").appendChild(btn);
        nofile1.classList.remove("main_section");
        nofile1.classList.add("expand");
        
        
        const card = document.createElement("span");
        // card.style.background="red";
        card.setAttribute("class","panel");
        card.setAttribute("id",i);
        document.getElementById("file").appendChild(card);


        


        const newbutton= document.createElement("button");
        newbutton.setAttribute("class","new_button");
        newbutton.style.display='block'
        newbutton.setAttribute("data-panel",i)
        newbutton.setAttribute("id","card");
        newbutton.textContent=topic.value;
        document.getElementById("new").appendChild(newbutton);
        
        listofpad.push(topic.value);

        i++;

        const card_btn = document.createElement("span");
        card_btn.setAttribute("class","card_btn");
        card.appendChild(card_btn)


        const head = document.createElement("h1");
        head.textContent=topic.value;
        head.setAttribute("class","heading")

        card_btn.appendChild(head);
        // card.style.display="flex";
        card.style.flexDirection="column";
        card.style.padding="10px";
        card.style.margin="20px";


        const copyspan = document.createElement("span");
        copyspan.setAttribute("class","copy");
        card_btn.appendChild(copyspan);

        copybtn = document.createElement("button");
        copybtn.innerHTML="COPY"
        copybtn.setAttribute("class","copybtn");
        copyspan.appendChild(copybtn);

        const closespan = document.createElement("span");
        closespan.setAttribute("class","close");
        card_btn.appendChild(closespan);

        const closebtn = document.createElement("button");
        closebtn.innerHTML="&#x2715";
        closebtn.setAttribute("class","closebtn");
        closespan.appendChild(closebtn);
        

        // let cardclass = document.querySelectorAll('.card');
        // let closeclass = document.querySelectorAll('.close');



        closebtn.addEventListener('click', function(element) {

            // stuff to execute
                card.remove();
                newbutton.remove();
                
        });

        // document.getElementById(topic.value).style.display="block";
        // card.style.display="none";
        

       
        // document.getElementById("1").style.display="flex";
        const textarea = document.createElement("div");
        textarea.setAttribute("class","text")
        textarea.setAttribute("contenteditable","true")
        
        card.appendChild(textarea);
        textarea.focus();
        // textarea.setAttribute("Placeholder","Write your note here......")
        // main_topic.textContent= topic.value;
        copybtn.addEventListener("click",function(){
            document.execCommand('selectAll');
            document.execCommand('copy');
            console.log("yes baby");
        })
        

        let buttons = document.querySelectorAll('.new_button');
        let panels = document.querySelectorAll('.panel');


        panels.forEach(element =>{
            element.addEventListener('click',function(){
                textarea.focus();
            })
        })
        buttons.forEach(button => {
        button.addEventListener('click', e => {
            textarea.focus();
            panels.forEach(panel => {
            panel.style.display = panel.id === e.target.dataset.panel ? 'flex' : 'none';
            console.log("bye baby");
            });
            textarea.focus();
        }); 
        });


        topic.value=null;
    } 
});




// search.addEventListener("input",function(){

//     let inputval = search.value;
//     let notescard = document.getElementsByClassName("card");
//     console.log(inputval)
//     Array.from(notescard).forEach(function (element) {
//         let txt = element.getElementsByTagName("h1")[0].innerText

//         if (txt.includes(inputval)) {
//             element.style.display = "inline-flex"
//         }
//         else{
//             element.style.display="none"
//         }
//     });
// });


const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");

bold.addEventListener("click",function(){

    document.execCommand('bold');
})

italic.addEventListener("click",function(){
    document.execCommand('italic');
    // const   text = window.getSelection().toString();
    // let btn = document.createElement('span');
    // btn.innerHTML = text;
    // btn.style.fontStyle = 'italic';
    // document.execCommand('insertHTML', false, btn.outerHTML);

})



underline.addEventListener("click",function(){
    document.execCommand('underLine');

    // const   text = window.getSelection().toString();
    // let btn = document.createElement('span');
    // btn.innerHTML = text;
    // btn.style.textDecoration = 'underline';
    // document.execCommand('insertHTML', false, btn.outerHTML);

});










