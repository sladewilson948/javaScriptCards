
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
    
    
        const randomColor = getRandomColor();
        const randomColorText = document.getElementById("number")
        randomColorText.style.color = randomColor
        randomColorText.style.transition = "color 1s ease-in-out"
        

        /* const randomColor = getRandomColor()
        console.log(randomColor)
        randomColorText.style.color = randomColor
        randomColorText.style.transition = "3s ease-in-out" */

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
        console.log(randomColor)
        document.getElementById("number").innerHTML = txt1
        break
    }


    

    }

    
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










