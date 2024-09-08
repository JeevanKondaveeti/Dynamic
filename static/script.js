/*const heading = document.createElement('h5');
const text = document.createTextNode('Form name');
const genform =document.getElementById('Genform');
const form =document.createElement('form');
heading.appendChild(text);
genform.appendChild(heading);
genform.appendChild(form);
const label = document.createElement('label')
const question = docment.createTextNode("")*/

const jsonData = {
    q_list:[
        ["How are you?","Text"],
        ["How are you?","Textarea"],
        ["Favourite color","Radiobutton","Red,Blue,Green,Orange"],
        ["How are you?","Text"]
    ]
  };
  
  const formContainer = document.getElementById('formContainer');

  for (let i in jsonData.q_list){
   /* console.log(jsonData.q_list[i])*/
    if (jsonData.q_list[i][1] == "Text"){
        var input = document.createElement('input');
        input.type = jsonData.q_list[i][1];
        /*console.log(jsonData.q_list[i][1]);*/
    }else if(jsonData.q_list[i][1] == "Textarea"){
        var input = document.createElement('textarea');
        input.type = jsonData.q_list[i][1];
        /*console.log(jsonData.q_list[i][1]);*/
    }else if(jsonData.q_list[i][1] == "Radiobutton"){
        let radiogrp = document.createElement('div')
        const optionList = jsonData.q_list[i][2].split(',');
        var list =optionList.forEach((value,index)=>{
            //creating label element
            let label = document.createElement('label')
            label.textContent = value;
            //creating an input element of type radio
            let radio = document.createElement('input');
            radio.type = "radio";
            radio.name = "optionList";
            radio.value = value;
            radiogrp.appendChild(radio)
            radiogrp.appendChild(label)
            radiogrp.appendChild(document.createElement('br'));
        })
        var input = radiogrp;
        
    }
    const label = document.createElement('label');
    label.textContent = jsonData.q_list[i][0];
    formContainer.appendChild(label);
    formContainer.appendChild(document.createElement('br'))
    formContainer.appendChild(input);
    formContainer.appendChild(document.createElement('br'))
    


  }

  /*
  const label = document.createElement('label');
  label.textContent = jsonData.question;
  
  const input = document.createElement('input');
  input.type = jsonData.input_type;
  
  formContainer.appendChild(label);
  formContainer.appendChild(input);*/