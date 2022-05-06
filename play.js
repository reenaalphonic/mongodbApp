


let data = [
    {
        "id": "62623ec5a60aedf858e19f64",
        "answer": [
            {
                "optionId": "62623e2ea60aedf858e19f39",
                "_id": "62623ec5a60aedf858e19f69"
            }
        ],
        "explanation": {
            "description": "<p><span>Android is a stack of software applications for mobile devices, which includes an operating system, middleware applications, and some key applications. It executes within own process and own instance of Dalvik Virtual Machine. DVM executes byte code and later transforms into .dex format files.</span></p>"
        }
    },
    {
        "id": "62612beaa60aedf858e19347",
        "answer": [
            {
                "optionId": "62612ac8a60aedf858e191b5",
                "_id": "62612beaa60aedf858e1934b"
            }
        ],
        "explanation": {
            "description": ""
        }
    },
    {
        "id": "62638631d8c36aaac5ba5fa3",
        "answer": [
            {
                "optionId": "626385b8d8c36aaac5ba5f89",
                "targetId": "62638daad8c36aaac5ba629b",
                "_id": "62639167d8c36aaac5ba637e"
            }
        ],
        "explanation": {
            "description": "<p><strong style=\"color: rgb(48, 48, 48);\">Drag and Drop – Math&nbsp;</strong><span style=\"color: rgb(48, 48, 48);\">(#041) asks students to drag and drop integers, expressions, text or images. Teachers can add an optional grid layout or background. This question type is auto-graded.</span></p>"
        }
    },
    {
        "id": "62638613d8c36aaac5ba5f8b",
        "answer": [
            {
                "optionId": "62638505d8c36aaac5ba5f1f",
                "_id": "62638613d8c36aaac5ba5f90"
            },
            {
                "optionId": "62638504d8c36aaac5ba5f1c",
                "_id": "62638613d8c36aaac5ba5f91"
            }
        ],
        "explanation": {
            "description": ""
        }
    },
    {
        "id": "6262775b61bce18c5a38107c",
        "answer": [
            {
                "optionId": "6262771d61bce18c5a381074",
                "_id": "6262775b61bce18c5a38107f"
            }
        ],
        "explanation": {
            "description": "<p><span>Objects are allocated memory in heap memory space.</span></p>"
        }
    }
]


// 62623ec5a60aedf858e19f64
let yourAnswer = [
    {
        "optionId": "62623e2ea60aedf858e19f39",
        "targetId": ""
    }
]



console.log("yourAnswer    " ,result("62623ec5a60aedf858e19f64",yourAnswer))

// 62612beaa60aedf858e19347
let singleAnswer = [
    {
        "optionId": "62612ac8a60aedf858e191b4",
        "targetId": ""
    }
]


console.log("singleAnswer  " ,result("62612beaa60aedf858e19347",singleAnswer))


// 62638631d8c36aaac5ba5fa3
let dargAnswer = [
    {
        "optionId": "626385b8d8c36aaac5ba5f89",
        "targetId": "62638daad8c36aaac5ba629b",
    }
]


console.log("dargAnswer    " ,result("62638631d8c36aaac5ba5fa3",dargAnswer ,"drag"))

// 62638613d8c36aaac5ba5f8b
let mulAnswer = [
    {
        "optionId": "62638504d8c36aaac5ba5f1c",
        "targetId": ""
    },
    {
        "optionId": "62638505d8c36aaac5ba5f1f",
        "targetId": ""
    }
]



console.log("mulAnswer     " ,result("62638613d8c36aaac5ba5f8b",mulAnswer))



// 6262775b61bce18c5a38107c
let trueAnswer = [
    {
        "optionId": "6262771d61bce18c5a381073",
        "targetId": ""
    }
]


console.log("trueAnswer    " ,result("6262775b61bce18c5a38107c",trueAnswer))





function result (questId, yourAnswer , type ){
let count = 0;
let len=0
data.forEach((section) => {
    if (section.id == questId) {
        if (yourAnswer.length === section.answer.length) {
              len=section.answer.length;
            for (let i = 0; i < yourAnswer.length; i++) {
                for (let j = 0; j < section.answer.length; j++) {
                    if(type=="drag"){
                        if ((yourAnswer[i].optionId == section.answer[j].optionId)&& 
                          (yourAnswer[i].targetId == section.answer[j].targetId)){
                            count++;
                            break;
                        }                    }
                    else{
                    if (yourAnswer[i].optionId == section.answer[j].optionId) {
                        count++;
                        break;
                    }
                 }
                }
            }           
            
        }
        
    }
})


// console.log("count ... " , count ,len)
 return count===len ? "Right " : "Wrong"

}