
function greetUser()
{
    

    function getRandomColor()
    {
        let letters = "0123456789ABCDEF"
        let color = "#"

        for (let i=0;i<6;i++)
        {
            color+=letters[Math.floor(Math.random()*letters.length)]
        }

        return color
    }
    
    
        //const randomColor = getRandomColor();
        const randomColorText1 = document.getElementById("number")
        const randomColorText2 = document.getElementById("name")
        const randomColorText3 = document.getElementById("cvv")
        const randomColorText4 = document.getElementById("email")
        const randomColorText5 = document.getElementById("contact")
        const randomColorText6 = document.getElementById("validity")

        //number
        randomColorText1.style.color = getRandomColor()
        randomColorText1.style.transition = "color 1s ease-in-out"
        //name
        randomColorText2.style.color = getRandomColor()
        randomColorText2.style.transition = "color 1s ease-in-out"
        //cvv
        randomColorText3.style.color = getRandomColor()
        randomColorText3.style.transition = "color 1s ease-in-out"
        //email
        randomColorText4.style.color = getRandomColor()
        randomColorText4.style.transition = "color 1s ease-in-out"
        //contact
        randomColorText5.style.color = getRandomColor()
        randomColorText5.style.transition = "color 1s ease-in-out"
        //validitiy
        randomColorText6.style.color = getRandomColor()
        randomColorText6.style.transition = "color 1s ease-in-out"

       

    while (true)
    {
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    let part1 = numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()]
    let part2 = numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()]
    let part3 = numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()]
    let part4 = numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()] + numbers[generateIndex()]

    
    let txt1 = part1 + " " + part2 + " " + part3 + " " + part4

    if(validateCards(txt1))
    {
        console.log(txt1)
        let random_name = generateRandomName()
        let email = generateRandomEmail(random_name)
        let random_cvv = generateCVV()
        let contact = generateRandomNumber()
        document.getElementById("number").innerHTML = txt1
        document.getElementById("name").innerHTML = random_name
        document.getElementById("cvv").innerHTML = random_cvv
        document.getElementById("email").innerHTML = email
        document.getElementById("contact").innerHTML = contact
 
        break
    }


    

    }

    
}

function generateRandomName()
{
    let fnames = ["21", "Niharika", "Aman", "Mukesh", "Anjan", "Sharda", "Archita", "Rahul", "Rachel", "Baby"]
    let lnames = ["Savage", "Sharma", "Dubey", "Pandey", "Singh", "Devakonda", "Singhania", "Subramati", "Iyer"]
    let full_name = fnames[Math.floor(Math.random()* fnames.length)] + " " + lnames[Math.floor(Math.random()*lnames.length)]

    return full_name
}

function generateCVV()
{
    return Math.floor(Math.random()*500 + 111)
}

function generateRandomEmail(name)
{
    let email = name.toLowerCase().replaceAll(" ","_") + "@email.com"

    return email
}


function generateRandomNumber()
{
    let final_number = "+91" + " " + Math.floor(Math.random() * 99999 + 10000).toString() + " " + Math.floor(Math.random() * 99999 + 1000).toString()

    return final_number
}


function validateCards(cardnumber)
{
    let card_number = cardnumber
    let sample = card_number.replaceAll(" ","")
    let list1 = sample.split("")
    
    let part1 = list1.filter((x,index) => index%2!=0).map(x=> parseInt(x)).reduce((a,b) => a+b)
    let part2 = list1.filter((x,index) => index%2==0).map(x=> parseInt(x)).map( x=> 2*x).map(x=>getSum(x)).reduce((a,b) => a+b)

    console.log(part1)
    console.log(part2)

    return (part1+part2)%10==0
    

}



function generateIndex()
{
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    return Math.floor(Math.random() * numbers.length)
}


function getSum(val)
{
    let dict1 = {
        0:0,
        2:2,
        4:4,
        6:6,
        8:8,
        10:1,
        12:3,
        14:5,
        16:7,
        18:9,
    }

    return dict1[val]
}










